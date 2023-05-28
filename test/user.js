import supertest from "supertest";
const request = supertest("https://gorest.co.in/public/v2/");

const TOKEN =
  "625d862910c558bdca98691f15d2cb19cc4b282771f1860cbdcac368b4b12364";

describe('Users', () => {
  it('GET /users', () => {
    request.get(`users?access-token=${TOKEN}`).end((err, res) => {
      console.log(err);
      console.log(res.body);
    });
  });
});
