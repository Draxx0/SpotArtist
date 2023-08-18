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

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token.token_type} ${token.access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error("An error occured.");
  }

  const data = response.json();

  return data;
}
