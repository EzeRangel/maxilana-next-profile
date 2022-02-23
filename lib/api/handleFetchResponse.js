import { FetcherError } from "./errors";

export function getError(errors, status) {
  errors = errors ?? [{ message: "Failed to fetch API" }];

  return new FetcherError({ errors, status });
}

export async function getAsyncError(res) {
  const data = await res.json();

  return getError(data.errors, res.status);
}

const handleFetchResponse = async (res) => {
  if (res.ok) {
    const data = await res.json();

    return data;
  }

  throw await getAsyncError(res);
};

export default handleFetchResponse;
