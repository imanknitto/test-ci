import supertest from "supertest";
import app from "./app";

let server;

describe("/luas-segitiga", () => {
  beforeAll((done) => {
    server = app.listen(null, () => {
      global.agent = supertest.agent(server);
      done();
    });
  });

  it("alas 5, tinggi 8 luasnya harus 20", async () => {
    const response = await supertest(app)
      .get("/luas-segitiga")
      .query({ alas: 5, tinggi: 8 });

    expect(response.status).toBe(200);
    expect(response.body.luas).toBe(20);
  });

  afterAll(async () => {
    await server.close();
  });
});
