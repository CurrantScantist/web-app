// Testing /visualize page

describe("Testing on Load of /visualize page with random query ", () => {
  let name = "x";
  let owner = "y";
  it("Checking Input placeholder string match", () => {
    cy.visit(`/visualize/${name}&${owner}/&`);
    cy.get("h3").should("contain", "Top Contributors");
  });
});

// Testing backend call from visualize page using mock query that return mock data

// First API Endpoint: techstack/%7Bname_owner%7D?name=_____&owner=____
// Here name and owner are query parameters
//  /\/techstack\/%7Bname_owner%7D/ was not working therefore using only techstack
describe("Backend Mock Endpoint for techstack detail using name and owner parameter", () => {
  let name = "shadowsocks-windows";
  let owner = "shadowsocks";
  beforeEach("testing techstack/%7Bname_owner%7D?name=_____&owner=____", () => {
    cy.server();
    cy.route("GET", "**/techstack/**", "fixture:techstack_name_owner.json");
  });

  it("Checking whether mock data is getting populated in /repositories page", () => {
    cy.visit(`/visualize/${name}&${owner}/&`);
    // Testing repository name and owner name
    cy.get("h1").should("contain", "shadowsocks/shadowsocks-windows");
    // Testing information about techstack
    cy.get("h5").should("contain", "A C# port of shadowsocks");
    // Testing  stat information from info-item class
    cy.get(".info-item").children().contains("Stargazers");
    cy.get(".info-item").children().contains("53,190");
    // // Testing Tags
    cy.get("tag").contains("proxy");
    cy.get("tag").contains("shadowsocks");
    cy.get("tag").contains("c-sharp");
  });
});



//http://119.8.181.73:8081/techstack/similar/%7Bname_owner%7D?name=shadowsocks-windows&owner=shadowsocks


// http://119.8.181.73:8081/techstack/contribution/%7Bname_owner%7D?name=shadowsocks-windows&owner=shadowsocks

//http://119.8.181.73:8081/techstack/nodelink_data?name=shadowsocks-windows&owner=shadowsocks
