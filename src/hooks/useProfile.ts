import { useCallback, useEffect, useState } from "react";
import { useTokenStore } from "../store/store";
import { apiFetch } from "../services/apiService";

export const useProfile = () => {
  const [profileData, setProfileData] = useState(null);
  // const { token } = useTokenStore();

  // const getProfileData = useCallback(async () => {
  //   if (token) {
  //     console.log("LOOK AT ME", token);
  //     const response = await apiFetch<any>("https://api.spotify.com/v1/me");
  //     setProfileData(response);
  //   }
  // }, [token]);

  // useEffect(() => {
  //   getProfileData();
  // }, [getProfileData]);

  return { profileData };
};
