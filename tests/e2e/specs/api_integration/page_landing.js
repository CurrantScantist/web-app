// Testing landing page content load by checking heading
describe("Testing content of heading for Landing Page", () => {
  it("Testing Heading string match", () => {
    cy.visit("/");

    cy.get("h1").should(
      "contain",
      "Compare Open Source Projects & Analyse Vulnerabilities"
    );
  });
});

// Testing backend call from landing page using mock data
describe("Testing endpoint using mock data for the top ten teckstack", () => {
  beforeEach("testing techstack/topen endpoint", () => {
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
