// __tests__/e2e.test.ts
import request from "supertest";

describe("E2E tests for /places URL", () => {
  const serverUrl = "http://localhost:8080";

  it("should return 200 and an array of places when the request is valid", async () => {
    const res = await request(serverUrl)
      .get("/places")
      .query({ lat: 12.9716, lon: 77.5946, radius: 50 });

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should return 500 and an error message when the request is invalid", async () => {
    const res = await request(serverUrl)
      .get("/places")
      .query({ lat: "invalid", lon: "invalid", radius: "invalid" });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should return correct data", async () => {
    const res = await request(serverUrl)
      .get("/places")
      .query({ lat: 12.9716, lon: 77.5946, radius: 50 });

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toEqual(1);
    expect(res.body[0].name).toEqual("Bangalore");
  });
});
