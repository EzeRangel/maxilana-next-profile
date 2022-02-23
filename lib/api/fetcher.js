import handleFetchResponse from './handleFetchResponse';

const headers = {
  'Content-Type': 'application/json',
};

const NextAPIMutator = async ({ endpoint, method, body = null }) => {
  const url = endpoint;

  return handleFetchResponse(
    await fetch(url, {
      method,
      headers,
      body,
    }),
  );
};

const NextAPIFetcher = async ({ endpoint, method = 'GET' }) => {
  const url = endpoint;

  return handleFetchResponse(
    await fetch(url, {
      method,
      headers,
    }),
  );
};

export { NextAPIMutator };
export default NextAPIFetcher;
