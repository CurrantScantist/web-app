// Testing /repositories page

describe("Testing page on Load of /repositories page", () => {
  it("Checking Input placeholder string match", () => {
    cy.visit("/repositories");
    cy.get("input")
      .invoke("attr", "placeholder")
      .should("contain", "Search for a repository!");
  });
});

// Testing endpoint from repository page using mock data
describe("Testing endpoint using Mock data for the list of techstack", () => {
  beforeEach("testing techstack/list endpoint", () => {
    cy.server();
    cy.route("GET", "**/techstack/list**", "fixture:techstack_list.json");
  });

  it("Checking whether mock data is getting populated in /repositories page", () => {
    cy.visit("/repositories");
    // Testing repository name
    cy.get("td").contains("shadowsocks-windows");
    // Testing owner
    cy.get("td").contains("beetbox");
    // Testing fork count
    cy.get("td").contains(91);
    // Testing Tags
    cy.get("td").contains("fancyzones");
  });
});
