const { checkVerticalDistance } = require("../../utils/utils");
import {
  host,
  h1Size,
  h2Size,
  h5Size,
  pSize,
  smallPSize,
} from "../../utils/constants";

describe("HomePage test suite", () => {
  beforeEach(() => {
    cy.visit(host);
    cy.viewport(1320, 720);
    cy.wait(2000);
  });

  it("Basic testing", () => {
    cy.get("#main-title").then((h1) => {
      expect(h1).to.exist;
      expect(h1).to.have.length(1);
      expect(h1).to.contain("Oltean Alexandru");
    });

    cy.get("#main-title")
      .should("have.css", "font-size", `${h1Size}px`)
      .and("have.css", "font-family", "Teko, sans-serif");

    cy.get("#description")
      .should("have.css", "font-size", `${pSize}px`)
      .and("have.css", "font-family", '"Titillium Web", sans-serif');

    cy.get("#company-contact").then(() => {
      expect("#company-contact").to.exist;
    });

    cy.get("#aboutme-title").then((h2) => {
      expect(h2).to.exist;
    });

    cy.get("#aboutme-title")
      .should("have.css", "font-size", `${h2Size}px`)
      .and("have.css", "font-family", "Teko, sans-serif");

    cy.get("#aboutme-desc").then((p) => {
      expect(p).to.exist;
    });

    cy.get("#aboutme-desc")
      .should("have.css", "font-size", `${smallPSize}px`)
      .and("have.css", "font-family", '"Titillium Web", sans-serif');

    cy.get("#btn-linkedin").then((a) => {
      expect(a).to.exist;
    });

    cy.get("#btn-linkedin")
      .should("have.css", "font-size", `${pSize}px`)
      .and("have.css", "font-family", '"Titillium Web", sans-serif');

    cy.get("#skills-title").then((h2) => {
      expect(h2).to.exist;
    });

    cy.get("#skills-title")
      .should("have.css", "font-size", `${h2Size}px`)
      .and("have.css", "font-family", "Teko, sans-serif");

    cy.get("#skills-heading").then((h5) => {
      expect(h5).to.exist;
    });

    cy.get("#skills-heading")
      .should("have.css", "font-size", `${h5Size}px`)
      .and("have.css", "font-family", "Teko, sans-serif");
  });

  it("Calculate correct vertical distances", () => {
    checkVerticalDistance("#main-title", "#description", 0);
    checkVerticalDistance("#aboutme-title", "#aboutme-desc", 8);
    checkVerticalDistance("#aboutme-desc", "#btn-linkedin", 33);
    checkVerticalDistance("#skills-title", "#skills-heading", 50);
    checkVerticalDistance("#skills-heading", "#skills-desc", 0);
    checkVerticalDistance("#work-title", "#work-subtitle", 8);
    checkVerticalDistance("#work-subtitle", "#work-place", 1);
    checkVerticalDistance("#certificates-title", "#certificates-subtitle", 8);
    checkVerticalDistance("#certificates-subtitle", "#certificate", 1);
    checkVerticalDistance("#education-title", "#education-subtitle", 8);
    checkVerticalDistance("#education-subtitle", "#education", 1);
  });
});
