import { check } from 'k6';
import http from 'k6/http';

export default function() {
  const responses = http.batch([
    "http://localhost:3000/"
  ]);

  check(responses[0], {
    "ok status": res => res.status === 200,
    "ok text": res => res.body === 'Hi! shun',
  });
};
