import request from "request";
import { createReadStream } from "fs";

const formData = {
  firstName: "Matthias",
  lastName: "Kohnen",
  phone: "12312312312",
  email: "matthias.kohnen@mail.com",
  profilePic: createReadStream("./test.jpg"),
};

request.post(
  { url: "http://localhost:8080/save", formData },
  (err, response, body) => {
    if (err) {
      console.error(err);
    } else {
      console.log(body);
    }
  }
);
