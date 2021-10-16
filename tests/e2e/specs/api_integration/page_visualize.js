// Testing /visualize page

describe("Testing on Load of /visualize page using random query ", () => {
  let name = "x";
  let owner = "y";
  it("Checking Input placeholder string match", () => {
    cy.visit(`/visualize/${name}&${owner}/&`);
    cy.get("h3").should("contain", "Top Contributors");
  });
});

// Testing backend call from visualize page using mock query that returns mock data

// API Endpoint: techstack/%7Bname_owner%7D?name=_____&owner=____
// Here name and owner are query parameters
describe("Testing endpoint for techstack detail using name and owner parameter", () => {
  let name = "shadowsocks-windows";
  let owner = "shadowsocks";
  beforeEach("testing techstack/%7Bname_owner%7D?name=_____&owner=____", () => {
    cy.server();
    cy.route(
      "GET",
      `**/techstack/{name_owner}?name=${name}&owner=${owner}`,
      "fixture:techstack_name_owner.json"
    );
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
    cy.get(".tag-grid").children().contains("proxy");
    cy.get(".tag-grid").children().contains("shadowsocks");
    cy.get(".tag-grid").children().contains("c-sharp");
  });
});

// Integration Test with Endpoint /techstack and /release on same query name and owner
describe("Testing endpoint using mock data for integration techstack and techstack release using name and owner parameter", () => {
  let name = "shadowsocks-windows";
  let owner = "shadowsocks";
  beforeEach(
    "testing /techstack/similar/%7Bname_owner%7D?name=_____&owner=____ and  /techstack/similar/%7Bname_owner%7D?name=_____&owner=____ ",
    () => {
      cy.server();

      cy.route(
        "GET",
        `**/techstack/{name_owner}?name=${name}&owner=${owner}`,
        "fixture:techstack_name_owner.json"
      );

      cy.route("GET", "**/release/**", "fixture:release_name_owner.json");
    }
  );

  it(`Checking whether mock data is getting populated in /repositories page for /release endpoint and having query name:${name} & owner:${owner}`, () => {
    cy.visit(`/visualize/${name}&${owner}/&`);

    // Waiting time gives additional time to properly load the visualisation
    cy.wait(2000);

    // Testing repository name and owner name from /techstack endpoint
    cy.get("h1").should("contain", "shadowsocks/shadowsocks-windows");
    // Testing information about techstack from /techstack endpoint
    cy.get("h5").should("contain", "A C# port of shadowsocks");

    // Testing  /release information
    // Testing for existence of visualisation- Lines of Code by language - div
    cy.get(".wide-visualisation1").should("exist");
    // Testing for existence of populated visualisation
    cy.get(".wide-visualisation2").children("x-vue-echarts").should("exist");

    // Testing for existence of visualisation- Lines in files by type- div
    cy.get(".wide-visualisation2").should("exist");
    // Testing for existence of populated visualisation
    cy.get(".wide-visualisation2").children("x-vue-echarts").should("exist");

    // Testing for existence of visualisation- Lines of Code- div
    cy.get(".wide-visualisation4").should("exist");
    // Testing for existence of populated visualisation
    cy.get(".wide-visualisation4").children("x-vue-echarts").should("exist");
  });
});

// Further Integration tests
//http://119.8.181.73:8081/techstack/similar/%7Bname_owner%7D?name=shadowsocks-windows&owner=shadowsocks

// http://119.8.181.73:8081/techstack/contribution/%7Bname_owner%7D?name=shadowsocks-windows&owner=shadowsocks

//http://119.8.181.73:8081/techstack/nodelink_data?name=shadowsocks-windows&owner=shadowsocks

// cy.route(
//   "GET",
//   "**/techstack/heatmap/**",
//   "fixture:techstack_heatmap.json"
// );
// cy.route(
//   "GET",
//   "**/techstack/contribution/**",
//   "fixture:techstack_contribution.json"
// );
// cy.route(
//   "GET",
//   "**/techstack/nodelink_data?name=shadowsocks-windows&owner=shadowsocks**",
//   "fixture:techstack_node_link.json"
// );
// cy.route(
//   "GET",
//   "**/techstack/similar/**",
//   "fixture:techstack_similar.json"
// );

//API Endpoint: /techstack/similar/%7Bname_owner%7D?name=_____&owner=____

// describe("Backend Mock Endpoint for techstack similar using name and owner parameter", () => {
//   let name = "shadowsocks-windows";
//   let owner = "shadowsocks";
//   beforeEach(
//     "testing /techstack/similar/%7Bname_owner%7D?name=_____&owner=____",
//     () => {
//       cy.server();

//       cy.route(
//         "GET",
//         "**/techstack/{name_owner}?name=shadowsocks-windows&owner=shadowsocks",
//         "fixture:techstack_name_owner.json"
//       );
//       cy.route(
//         "GET",
//         "**/techstack/similar/**",
//         "fixture:techstack_similar.json"
//       );
//     }
//   );

//   it(`Checking whether mock data is getting populated in /repositories page for /techstack/similar endpoint and having query name:${name} & owner:${owner}`, () => {
//     cy.visit(`/visualize/${name}&${owner}/&`);
//     // Testing repository name and owner name
//     // cy.get("h1").should("contain", "shadowsocks/shadowsocks-windows");
//     // // Testing information about techstack
//     // cy.get("h5").should("contain", "A C# port of shadowsocks");
//     // // Testing  stat information from info-item class
//     // cy.get(".info-item").children().contains("Stargazers");
//     // cy.get(".info-item").children().contains("53,190");
//     // // // Testing Tags
//     // cy.get("tag").contains("proxy");
//     // cy.get("tag").contains("shadowsocks");
//     cy.get("tag").contains("c-sharp");
//   });
// });
