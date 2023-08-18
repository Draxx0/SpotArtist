import { Token } from "../types/token";
import { generateCodeChallenge } from "../utils/PKCE/generateCodeChallenge";
import { generateRandomString } from "../utils/functions/generateRandomString";

// export async function getBearerToken(): Promise<undefined | Token> {
//   const formData = new URLSearchParams();
//   formData.append("grant_type", "client_credentials");
//   formData.append("client_id", import.meta.env.VITE_API_CLIENT_ID);
//   formData.append("client_secret", import.meta.env.VITE_API_CLIENT_SECRET);

//   return fetch(import.meta.env.VITE_SPOTIFY_CONNECT_URI, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: formData,
//   })
//     .then((res) => res.json())
//     .then((token: Token) => token)
//     .catch((err) => {
//       throw new Error(err);
//     });
// }

export async function getBearerToken(): Promise<undefined | Token> {
  const codeVerifier = generateRandomString(128);

  return generateCodeChallenge(codeVerifier).then(async (codeChallenge) => {
    const state = generateRandomString(16);
    const scope = "user-read-private user-read-email";

    localStorage.setItem("code_verifier", codeVerifier);

    const args = new URLSearchParams({
      response_type: "code",
      client_id: import.meta.env.VITE_API_CLIENT_ID,
      scope: scope,
      redirect_uri: "http://127.0.0.1:5173/",
      state: state,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
    });

    window.location = "https://accounts.spotify.com/authorize?" + args;

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code!,
      //! IMPORTANT The ! should be remove.
      redirect_uri: "http://127.0.0.1:5173/",
      client_id: import.meta.env.VITE_API_CLIENT_ID,
      code_verifier: codeVerifier,
    });

    console.log("NO PROBLEM HERE");

    return fetch(import.meta.env.VITE_SPOTIFY_CONNECT_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((token: Token) => token)
      .catch((err) => {
        throw new Error(err);
      });
  });
}

export function getTokenFromLocalStorage() {
  const tokenStorage = localStorage.getItem("token-storage");

  if (!tokenStorage) {
    throw new Error("No token found");
  }

  const token = JSON.parse(tokenStorage);

  return token.state.token;
}
