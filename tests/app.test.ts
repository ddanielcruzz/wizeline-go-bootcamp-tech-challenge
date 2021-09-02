import app from "../src/app";
import supertest from "supertest";
import { HELLO_WORLD, HELPER_MESSAGE } from "../src/constants";

describe("GET /not-existing-route", () => {
  it("Should return 404 and a helping text if trying to access unsupported endpoint", async () => {
    const res = await supertest(app).get("/not-existing-route");
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe(HELPER_MESSAGE);
  });
});

describe("GET /", () => {
  it("Should return Hello World!", async () => {
    const res = await supertest(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(HELLO_WORLD);
  });
});

describe("GET /joke", () => {
  it("Should return a Chuck Norris joke", async () => {
    const res = await supertest(app).get("/joke");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBeTruthy();
  });
});
