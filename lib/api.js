const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      "Cache-Control": "no-store",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const register = async (user) => {
  return fetcher({
    url: "/api/register",
    method: "POST",
    body: user,
    json: false,
  });
};

export const login = async (user) => {
  return fetcher({
    url: "/api/login",
    method: "POST",
    body: user,
    json: false,
  });
};

//const isProd = process.env.NODE_ENV === 'production'
export const getFlights = async () => {
  return fetcher({
    url: `${process.env.NEXTAUTH_URL}/api/flights`,
    method: "GET",
  });
};

export const getFlightByParams = async (params) => {
  return fetcher({
    url: `/api/flights?${params}`,
    method: "GET",
  });
};

export const getFlightById = async (id) => {
  return fetcher({
    url: `/api/flights/?id=${id}`,
    method: "GET",
  });
};

export const getAirlineById = async (airlineId) => {
  return fetcher({
    url: `/api/airlines?airlineId=${airlineId}`,
    method: "GET",
  });
};
