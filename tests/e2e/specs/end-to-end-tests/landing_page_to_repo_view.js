describe('Testing Start Analysing button', () => {
    beforeEach("testing techstack/topen endpoint", () => {
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

    it('Test that clicking Start Analysing takes the user to the repository list page', () => {
      cy.visit("/");
      cy.get("div.callToAction").click().get("p").should('contain','List of repositories')
      // cy.get("td.el-table_2_column_5.el-table__cell").click({ multiple: true })
      // testing search bar
      // cy.get(input.el-input__inner)

      // Using the search bar above repo list
      cy.get("input.el-input__inner").type('shadowsocks-windows').should('have.value','shadowsocks-windows')

      cy.get("td.el-table_2_column_5.el-table__cell").click()

      cy.get("button.nav-button").click() 

      cy.get("h1").should("contain", "shadowsocks/shadowsocks-windows");





    });
  });
