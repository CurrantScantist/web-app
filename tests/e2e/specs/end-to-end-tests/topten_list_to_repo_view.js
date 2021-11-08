describe('Testing the user experience from the top ten repo within landing page to repository view', () => {
    beforeEach("Retrieve all required routes", () => {

      // Getting all required routes ready for end-to-end tests from top ten list to repository view for mock repo: shadowsocks/shadowsocks-windows
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

    // navigating to row within top ten repo list which contains shadowsocks-windows
    cy.contains('td', 'shadowsocks-windows')  // gives you the cell 
    .parent()                              // gives you the row
    .within($tr => {                       // filters just that row
        cy.get('td.el-table_1_column_1.is-center.el-table__cell')      // finds the buttons cell of that row
        .click()  // clicking the specified row
    })

    //   Verifying that the user has reached the final step, which is the repository's view page
    cy.get("h1").should("contain", "shadowsocks/shadowsocks-windows");

    });
  });
