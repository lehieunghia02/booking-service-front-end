export const authFetch = async (
  url: string,
  options: RequestInit = {},
  accessToken: string | null,
  refreshFn: () => Promise<string | null>
): Promise<Response> => {
  const makeRequest = async (token: string | null) =>
    fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });

  let response = await makeRequest(accessToken);


  if (response.status === 401) {
    const newToken = await refreshFn();
    if (newToken) {
      response = await makeRequest(newToken);
    }
  }

  return response;
};
