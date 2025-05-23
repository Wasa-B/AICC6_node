import axios from "axios";

/* ====== Common GET Request Function ====== */
export async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}


/* ====== Common POST Request Function ====== */
export async function postRequest(url, data) {
  return await axios.post(url, data).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

