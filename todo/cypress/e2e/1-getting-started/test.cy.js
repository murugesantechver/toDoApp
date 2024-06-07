// cypress/integration/example.spec.js
describe("My First Test", () => {
  it("Visits example.com", () => {
    cy.visit("https://example.com");
    cy.contains("This domaisn");
    cy.url().should("include", "example.com");
  });
});
