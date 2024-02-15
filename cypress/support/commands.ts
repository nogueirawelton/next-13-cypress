Cypress.Commands.add("searchByQuery", (query: string) => {
  cy.visit("/");
  cy.get("input[name='s']").type(query).parent("form").submit();
});

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>;
  }
}
