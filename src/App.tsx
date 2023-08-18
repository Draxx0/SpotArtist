import { useCallback, useEffect } from "react";
import Router from "./router/Router";
import { useTokenStore } from "./store/store";
import { getBearerToken } from "./services/tokenService";

function App() {
  const { insert } = useTokenStore();

  const insertToken = useCallback(async () => {
    const token = await getBearerToken();
    if (!token) {
      throw new Error("There is no token founded ! ");
    }
    console.log("INSERT TOKEEN", token.access_token);
    insert(token);
  }, [insert]);

  useEffect(() => {
    insertToken();
  }, [insertToken]);
  return <Router />;
}

export default App;
