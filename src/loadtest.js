import http from 'k6/http';
import { check, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';

const BASE_URL = 'http://localhost:5101';

export const options = {
  thresholds: {
    checks: ['rate>0.99'],
  },
};

export default function () {
  const ok = http.get(`${BASE_URL}/contador`);
  check(ok, {
    'contador retorna 200 OK': (r) => r.status === 200,
  });

  const bad = http.get(`${BASE_URL}/badrequest`);
  check(bad, {
    'badrequest retorna 400 Bad Request': (r) => r.status === 400,
  });

  const err = http.get(`${BASE_URL}/error`);
  check(err, {
    'error retorna 500 Internal Server Error': (r) => r.status === 500,
  });

  sleep(1);
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}
