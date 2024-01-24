import { describe } from "node:test";

describe("HomePage test suite", () => {
  cy.visit("http://localhost:5173/");

  it("Basic testing", () => {
    cy.get("#main-title").then((h1) => {
      expect(h1).to.exist;
      expect(h1).to.have.length(1);
    });
  });

  it("Calculate correct vertical distances try #1", () => {
    it("should have a vertical distance of 8px between <h1> and <p>", () => {
      // Replace with the URL of your website
      cy.visit("https://example.com");

      // Replace with the correct selectors for your <h1> and <p> elements
      cy.get("h1").then((h1) => {
        cy.get("p").then((p) => {
          const h1Rect = h1[0].getBoundingClientRect();
          const pRect = p[0].getBoundingClientRect();

          // Calculate vertical distance
          const verticalDistance = Math.abs(pRect.top - h1Rect.bottom);

          // Assert that the vertical distance is 8 pixels
          expect(verticalDistance).to.eq(8);
        });
      });
    });
  });
});
