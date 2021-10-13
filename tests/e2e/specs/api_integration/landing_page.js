// https://docs.cypress.io/api/introduction/api.html

describe("Heading Test for Landing Page", () => {
  it("Checking Heading string match", () => {
    cy.visit("/");

    cy.contains("h1", "Compare Open Source Projects & Analyse Vulnerabilities");
  });
});

describe("Backend Mock Endpoint for top ten teckstack", () => {
  beforeEach("testing top ten", () => {
    cy.server();
    cy.route("GET", "**/techstack/topten**", "fixture:test_top_ten.json");
  });

  it("Checking whether mock data exists", () => {
    cy.visit("/");
    cy.get("td").contains("deno");
    cy.get("td").contains("PowerToys");
    cy.get("td").contains("axios");
  });
});
