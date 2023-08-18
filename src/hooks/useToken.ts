export const useToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return undefined;
  }

  return {
    token: JSON.parse(token),
  };
};
