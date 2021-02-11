let BACK_END_URL;

BACK_END_URL = 'http://localhost:3000/api';

export const API_URL = BACK_END_URL;

let esc = encodeURIComponent;
const queryUrl = (url = '', data: Record<string, any> = {}) => {
  let query = Object.keys(data)
    .map((k) => esc(k) + '=' + esc(String(data[k] as any)))
    .join('&')
    .trim();
  return url + (query.length > 0 ? '?' + query : '');
};

function prefixRoute(route: string) {
  return BACK_END_URL + (route[0] === '/' ? '' : '/') + route;
}

async function request(
  method: string,
  route: string,
  data: Record<string, any> = {},
) {
  let base_url = prefixRoute(route);
  let url =
    method === 'GET' || method === 'DELETE'
      ? queryUrl(base_url, data)
      : base_url;

  console.log(url);

  let token = null;
  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = token;
  }

  let res = await fetch(url, {
    method,
    headers,
    body: method === 'POST' ? JSON.stringify(data) : undefined,
  });
  return await res.json();
}

export async function get(route: string, data: Record<string, any> = {}) {
  return await request('GET', route, data);
}

export async function post(route: string, data: Record<string, any> = {}) {
  return await request('POST', route, data);
}

export async function deleteRequest(
  route: string,
  data: Record<string, any> = {},
) {
  return await request('DELETE', route, data);
}
