describe('Testing the user experience from landing page to repository view without using the search bar', () => {
    beforeEach("Retrieve all required routes", () => {

      // Getting all required routes ready for end-to-end tests from landing page to repository view for mock repo: shadowsocks/shadowsocks-windows
      let name = "shadowsocks-windows";
      let owner = "shadowsocks";
      cy.server();
      cy.route("GET", "**/techstack/topten**", "fixture:test_top_ten.json");
      cy.route(
        "GET",
        `**/techstack/{name_owner}?name=${name}&owner=${owner}`,
        "fixture:techstack_name_owner.json"
      );
      cy.route("GET", "**/release/**", "fixture:release_name_owner.json");
      cy.route("GET", "**/techstack/list**", "fixture:techstack_list.json");
      });

    it('Scenario from landing page to repository view', () => {
      cy.visit("/");

      // Pressing the 'Start Analysing" Button on the landing page
      cy.get("div.callToAction").click().get("p").should('contain','List of repositories')

    // On the repository list page, select row which contains repo: 'shadowsocks-windows'.
    cy.contains('td', 'shadowsocks-windows')  // gives you the cell 
    .parent()                              // gives you the row
    .within($tr => {                       // filters just that row
    cy.get('td.el-table_2_column_5.el-table__cell')      // finds the buttons cell of that row
        .click()  // clicking the specified row
    })
    // Clicking Checkout button
    cy.get("button.nav-button").click() 

    // Verifying that the user has reached the final step, which is the repository's view page
    cy.get("h1").should("contain", "shadowsocks/shadowsocks-windows");

    });
  });
