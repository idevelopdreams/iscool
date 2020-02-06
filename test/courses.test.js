// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../app");
// const db = require('../models')

process.env.NODE_ENV = "test";

// beforeAll(async () => {
//     await db.query("CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT)");
// });

// afterEach(async () => {
//     await db.query("DELETE FROM students");
// });

// afterAll(async () => {
//     await db.query("DROP TABLE students");
//     db.end();
// });

describe("GET / ", () => {
    it("should respond with a status of 200", async () => {
      const response = await request(app).get("/");

      expect(response.statusCode).toBe(200);
    });

    // it('should render all courses', async () => {

    // });


});