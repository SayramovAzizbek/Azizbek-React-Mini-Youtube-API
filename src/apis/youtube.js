import axios from "axios";

const KEY = "AIzaSyCJhNvy-9vK8QiDmqsEIVncOQ6FPRuVUIU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  //   baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    // part: "string",
    part: "snippet",
    type: "video",
    maxResults: 20,
    key: KEY,
  },
});
