import { useCallback, useEffect } from "react";
import Router from "./router/Router";
import { useTokenStore } from "./store/store";
import {
  getBearerToken,
  getTokenFromLocalStorage,
} from "./services/tokenService";

function App() {
  const { insert } = useTokenStore();

  const insertToken = useCallback(async () => {
    const token = await getBearerToken();
    if (!token) {
      throw new Error("There is no token founded ! ");
    }
    insert(token);
  }, [insert]);

  useEffect(() => {
    if (getTokenFromLocalStorage()) {
      return;
    }
    insertToken();
  }, [insertToken]);

  return <Router />;
}

export default App;
