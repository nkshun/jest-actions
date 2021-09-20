// mock化することでserver立てずに確認できる

const { Get } = require("../root");

test("status 200 with id", () => {
  const req = {
    query: {
      id: "ezaki",
    },
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
  };

  Get(req, res);

  expect(res.status.mock.calls[0][0]).toBe(200);
});
