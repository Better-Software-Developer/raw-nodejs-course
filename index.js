import { createServer } from "http";
import { parse } from "querystring";
import { readFile, copyFileSync } from "fs";
import formidable from "formidable";

import data from "./data.js";
import { getContacts } from "./list.js";
import { deleteContact } from "./delete.js";
import { getContactForm } from "./form.js";
import { saveContact } from "./save.js";

createServer((request, response) => {
  const urlParts = request.url.split("/");
  if (urlParts.includes("delete")) {
    data.contacts = deleteContact(data.contacts, urlParts[2]);
    redirect(response, "/");
  } else if (urlParts.includes("new")) {
    sendResponse(response, getContactForm(data.contacts));
  } else if (urlParts.includes("edit")) {
    sendResponse(response, getContactForm(data.contacts, urlParts[2]));
  } else if (urlParts.includes("save") && request.method === "POST") {
    const form = formidable({});
    form.parse(request, (err, contact, files) => {
      if (files.profilePic) {
        copyFileSync(
          files.profilePic[0].filepath,
          `public/assets/${files.profilePic[0].originalFilename}`
        );
        contact["file"] = `/assets/${files.profilePic[0].originalFilename}`;
      }
      saveContact(data.contacts, contact);
      redirect(response, "/");
    });
  } else if (urlParts.includes("assets")) {
    readFile(`public${request.url.replaceAll("%20", " ")}`, (err, data) => {
      if (err) {
        response.statusCode = 404;
        response.end();
      } else {
        response.end(data);
      }
    });
  } else if (request.url === "/favicon.ico") {
    readFile("public/favicon.ico", "utf-8", (err, data) => {
      if (err) {
        response.statusCode = 404;
        response.end();
      } else {
        response.end(data);
      }
    });
  } else {
    response.writeHead(200, { "Content-Type": "text/html" });
    sendResponse(response, getContacts(data.contacts));
  }
}).listen(8080, () => {
  console.log(`Contacts App is running at http://localhost:8080`);
});

function sendResponse(response, responseBody) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(responseBody);
}

function redirect(response, to) {
  response.writeHead(302, { location: to, "content-type": "text/plain" });
  response.end(`redirecting to ${to}`);
}
