// import { createSecureServer, constants } from "http2";
import { createServer } from "https";
import { readFile, copyFileSync, readFileSync } from "fs";
import formidable from "formidable";

import data from "./data.js";
import { getContacts } from "./list.js";
import { deleteContact } from "./delete.js";
import { getContactForm } from "./form.js";
import { saveContact } from "./save.js";

const options = {
  key: readFileSync("./localhost.key"),
  cert: readFileSync("./localhost.cert"),
};

// const { HTTP2_HEADER_PATH, HTTP2_HEADER_STATUS, HTTP2_HEADER_METHOD } =
//   constants;

// const server = createSecureServer(options);

// server
//   .on("stream", (stream, headers) => {
//     const parts = headers[HTTP2_HEADER_PATH].split("/");

//     if (headers[HTTP2_HEADER_PATH] === "/favicon.ico") {
//       readFile("public/favicon.ico", (err, data) => {
//         if (err) {
//           stream.respond({
//             "content-type": "text/plain",
//             [HTTP2_HEADER_STATUS]: 404,
//           });
//           stream.end();
//         } else {
//           stream.end(data);
//         }
//       });
//     } else if (parts.includes("assets")) {
//       readFile(
//         `public${headers[HTTP2_HEADER_PATH].replaceAll("%20", " ")}`,
//         (err, data) => {
//           if (err) {
//             stream.respond({ [HTTP2_HEADER_STATUS]: 404 });
//             stream.end();
//           } else {
//             stream.end(data);
//           }
//         }
//       );
//     } else {
//       sendHttp2Response(stream, getContacts(data.contacts));
//     }
//   })
//   .listen(8080, () => {
//     console.log(`Contacts App running at https://localhost:8080`);
//   });

createServer(options, (request, response) => {
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
      const newContact = {
        id: contact.id[0],
        firstName: contact.firstName[0],
        lastName: contact.lastName[0],
        phone: contact.phone[0],
        email: contact.email[0],
        file: contact.file,
      };
      saveContact(data.contacts, newContact);
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
  console.log(`Contacts App is running at https://localhost:8080`);
});

function sendResponse(response, responseBody) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(responseBody);
}

function redirect(response, to) {
  response.writeHead(302, { location: to, "content-type": "text/plain" });
  response.end(`redirecting to ${to}`);
}

function sendHttp2Response(stream, responseBody) {
  stream.respond({ "content-type": "text/html", [HTTP2_HEADER_STATUS]: 200 });
  stream.end(responseBody);
}
