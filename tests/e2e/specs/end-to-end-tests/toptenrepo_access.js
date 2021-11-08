describe('Testing top ten repositories view', () => {
    it('Test that top ten list takes the user to the repository metadata page', () => {
    //   cy.visit("https://fathomtech.io/");
        cy.visit("/");
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
  