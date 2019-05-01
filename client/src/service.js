import axios from "axios";

class Service {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
      withCredentials: true
    });
    this.service = service;
  }

  uploadPhoto = file => {
    // console.log(file);
    const formData = new FormData();

    formData.append("picture", file);

    return this.service
      .post("/new-photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => response.data)
      .catch(err => console.log(err));
  };

  sendPhoto = (img, username, email) => {
    return this.service
      .post("/send-photo", { img, username, email })
      .then(res => console.log("image has been sent"))
      .catch(err => console.log(err));
  };
}

export default Service;
