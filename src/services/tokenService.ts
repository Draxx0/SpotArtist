import { Token } from "../types/token";

export async function getBearerToken() {
  const formData = new URLSearchParams();
  formData.append("grant_type", "client_credentials");
  formData.append("client_id", import.meta.env.VITE_API_CLIENT_ID);
  formData.append("client_secret", import.meta.env.VITE_API_CLIENT_SECRET);

  return fetch(import.meta.env.VITE_SPOTIFY_CONNECT_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((token: Token) => insertTokenInLocalStorage(token))
    .catch((err) => {
      throw new Error(err);
    });
}

export function insertTokenInLocalStorage(token: Token) {
  if (!token) {
    throw new Error("Token is required to be insert in storage !");
  }

  localStorage.setItem("token", JSON.stringify(token));
}
