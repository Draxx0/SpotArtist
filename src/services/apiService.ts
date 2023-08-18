import { Token } from "../types/token";
import { getTokenFromLocalStorage } from "./tokenService";

export async function apiFetch<T>(url: string): Promise<T> {
  const token: Token = getTokenFromLocalStorage();

  if (!token) {
    throw new Error("A token is required to execute requests !");
  }

  if (!url) {
    throw new Error("Url is required.");
  }

  console.log("token", `${token.token_type} ${token.access_token}`);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `${token.token_type} ${token.access_token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });

  return response;
}
