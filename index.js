import { createServer } from "http";

import data from "./data.js";
import { getContacts } from "./list.js";
import { deleteContact } from "./delete.js";
import { getContactForm } from "./form.js";

createServer((request, response) => {
  const urlParts = request.url.split("/");
  if (urlParts.includes("delete")) {
    data.contacts = deleteContact(data.contacts, urlParts[2]);
    redirect(response, "/");
  } else if (urlParts.includes("new")) {
    sendResponse(response, getContactForm(data.contacts));
  } else if (urlParts.includes("edit")) {
    sendResponse(response, getContactForm(data.contacts, urlParts[2]));
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
