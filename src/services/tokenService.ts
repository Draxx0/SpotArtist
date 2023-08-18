import { Token } from "../types/token";

export async function getBearerToken(): Promise<undefined | Token> {
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
    .then((token: Token) => token)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getTokenFromLocalStorage() {
  const token = localStorage.getItem("token-storage");

  if (!token) {
    throw new Error("No token found");
  }

  return JSON.parse(token);
}
