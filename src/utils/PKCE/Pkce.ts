// import { generateRandomString } from "../functions/generateRandomString";
// import { generateCodeChallenge } from "./generateCodeChallenge";

// const clientId = import.meta.env.VITE_API_CLIENT_ID;
// const redirectUri = "http://localhost:5173";

// const codeVerifier = generateRandomString(128);

// generateCodeChallenge(codeVerifier).then((codeChallenge) => {
//   const state = generateRandomString(16);
//   const scope = "user-read-private user-read-email";

//   localStorage.setItem("code_verifier", codeVerifier);

//   const args = new URLSearchParams({
//     response_type: "code",
//     client_id: clientId,
//     scope: scope,
//     redirect_uri: redirectUri,
//     state: state,
//     code_challenge_method: "S256",
//     code_challenge: codeChallenge,
//   });

//   window.location = "https://accounts.spotify.com/authorize?" + args;

//   const urlParams = new URLSearchParams(window.location.search);
//   const code = urlParams.get("code");

//   const codeVerifier = localStorage.getItem("code_verifier");

//   const body = new URLSearchParams({
//     grant_type: "authorization_code",
//     code: code,
//     redirect_uri: redirectUri,
//     client_id: clientId,
//     code_verifier: codeVerifier,
//   });

//   const response = fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: body,
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("HTTP status " + response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       localStorage.setItem("access_token", data.access_token);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });
