import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-69cc5.cloudfunctions.net/api",
  //"http://localhost:5001/clone-69cc5/us-central1/api",
});

export default instance;
