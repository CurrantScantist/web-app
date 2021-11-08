describe('Testing Start Analysing button', () => {
    beforeEach("testing techstack/topen endpoint", () => {
        cy.server();
        cy.route("GET", "**/techstack/topten**", "fixture:test_top_ten.json");
      });

    it('Test that clicking Start Analysing takes the user to the repository list page', () => {
        cy.visit("/repositories");
        // cy.get("span").should('contain',"Start Analysing");
        cy.get("input.el-input__inner").type('vue').should('have.value','vue')

    });
  });
