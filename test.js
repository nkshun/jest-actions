const { check } = require('k6');
const http = require('k6/http');

export default function() {
  const responses = http.batch([
    "http://localhost:3000/"
  ]);

  check(responses[0], {
    "ok status": res => res.status === 400,
    "ok text": res => res.body === 'Who are you?',
  });
};
