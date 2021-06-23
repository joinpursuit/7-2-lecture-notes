const request = require("supertest");

const cats = require("../app.js");
let catsArray = require("../models/cat.js");

describe("cats", () => {
  // when a response is supposed to be successful, we now need 
  // a better-formatted response object. 
  // we want responses to include a `success` boolean attribute
  // and the data will now be sent back under the `payload` attribute
  // example: 
  // a GET to /cats/:idx used to respond with:
  //    { 
  //      age: 2,
  //      designer: 'Mittens'
  //      lovesCatnip: true,
  //      latestPiece: "Tangled Yarn",
  //      price: 88,
  //    }
  // 
  // should now respond, when successful, with: 
  //    {
  //      success: true,
  //      payload: {
  //        age: 2,
  //        designer: 'Mittens'
  //        lovesCatnip: true,
  //        latestPiece: "Tangled Yarn",
  //        price: 88,
  //     } 
  //    }
  
  let originalCatsArray = catsArray;

  beforeEach(() => {
    catsArray = originalCatsArray;
  });

  describe("/404 catch-all route", () => {
    it("sets status code to 404 and finishes with formatted response", async () => {
      let response = await request(cats).get('/banana');
      let parsedRes = JSON.parse(response.text);
      expect(response.statusCode).toEqual(404);
      expect(parsedRes.success).toBe(false);
      expect(parsedRes.payload).toMatch(/not found/);

      response = await request(cats).get('/404');
      parsedRes = JSON.parse(response.text);
      expect(response.statusCode).toEqual(404);
      expect(parsedRes.success).toBe(false);
      expect(parsedRes.payload).toMatch(/not found/);
    });
  });

  describe("/cats", () => {
    it("sends the cats array", async () => {
      const response = await request(cats).get("/cats");
      const parsedRes = JSON.parse(response.text);

      // see comment on line 7 for what the expected response is
      expect(parsedRes.success).toBe(true);
      expect(parsedRes.payload).toEqual(catsArray);
    });

    describe("POST", () => {
      it("with correct input, creates cat at last index", async () => {
        const newLastArrayPosition = catsArray.length;
        const newCat = {
          designer: "Mocha",
          age: 8,
          lovesCatnip: true,
          latestPiece: "Distressed Arm Chair",
          price: 3,
        };

        const response = await request(cats)
          .post(`/cats`)
          .send(newCat)
          .set("Accept", "application/json");

        const parsedRes = JSON.parse(response.text);

        // see comment on line 7 for what the expected response is
        expect(parsedRes.success).toBe(true);
        expect(parsedRes.payload).toEqual(newCat);
        expect(catsArray[newLastArrayPosition]).toEqual(newCat);
      });

      it("with incorrect input, responds with specific message at `payload` and 422 status", async () => {
        // backend is expecting `designer`, `age`, `latestPiece`, and `price`
        const newLastArrayPosition = catsArray.length;
        const incompleteCat = {
          designer: 'MewTwo',
          lovesCatnip: true
        };

        const response = await request(cats)
          .post(`/cats`)
          .send(incompleteCat)
          .set("Accept", "application/json");

        const parsedRes = JSON.parse(response.text);

        // see comment on line 7 for what the expected response is
        expect(response.statusCode).toEqual(422);
        expect(parsedRes.success).toBe(false);
        expect(parsedRes.payload).toMatch(/include all required/)
        expect(catsArray[newLastArrayPosition]).toBeUndefined();
      });
    });
  });

  describe("/cats/:arrayIndex", () => {
    describe("GET", () => {
      it("sends the corresponding cat when a valid index is given", async () => {
        const response = await request(cats).get("/cats/1");
        const parsedRes = JSON.parse(response.text);

        // see comment on line 7 for what the expected response is
        expect(parsedRes.success).toBe(true);
        expect(parsedRes.payload).toEqual(catsArray[1]);
      });

      it("sends a redirect when an invalid index is given", async () => {
        const response = await request(cats).get("/cats/806");

        expect(response.redirect).toBe(true);
        expect(response.header.location).toEqual("/404");
      });
    });

    describe("PUT", () => {
      it("replaces the index in the cats array", async () => {
        const newDesigner = 'Smitten';
        const oldCat = catsArray[0];
        const catToUpdate = { ...oldCat };
        catToUpdate.designer = newDesigner;

        const response = await request(cats)
          .put("/cats/0")
          .send(catToUpdate)
          .set("Accept", "application/json")

        const parsedRes = JSON.parse(response.text);
        expect(oldCat.designer).toEqual('Mittens');
        expect(catsArray[0].designer).toEqual(newDesigner);
        // see comment on line 7 for what the expected response is
        expect(parsedRes.success).toBe(true);
        expect(parsedRes.payload).toEqual(catToUpdate);
      });

      it("redirects if there is no cat with the given index param", async () => {
        const NON_EXISTENT_ID = 9999;
        const response = await request(cats)
          .put(`/cats/${NON_EXISTENT_ID}`)
          .send({ fruit: 'banana' })
          .set("Accept", "application/json");

        expect(response.statusCode).toBe(302);
        expect(response.redirect).toBe(true);
        expect(response.header.location).toEqual("/404");
      });
    });

    describe("DELETE", () => {
      it("with valid index param, deletes at the index in the cats array", async () => {
        const catToDelete = catsArray[2];
        const originalLength = catsArray.length;

        const response = await request(cats)
          .delete("/cats/2")
          .set("Accept", "application/json");
        
        const parsedRes = JSON.parse(response.text);

        // see comment on line 7 for what the expected response is
        expect(parsedRes.success).toBe(true);
        expect(parsedRes.payload).toEqual(catToDelete);
        expect(catsArray[2]).toEqual(originalCatsArray[2]);
        expect(catsArray).toHaveLength(originalLength - 1);
      });

      it("redirects if there is no cat with the given index param", async () => {
        const NON_EXISTENT_ID = 9999;
        const response = await request(cats)
          .delete(`/cats/${NON_EXISTENT_ID}`)
          .send()
          .set("Accept", "application/json");

        expect(response.statusCode).toBe(302);
        expect(response.redirect).toBe(true);
        expect(response.header.location).toEqual("/404");
      });
    });
  });
});
