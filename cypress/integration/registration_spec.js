describe("Should test registration.", () => {
  it("Should successfuly register user.", () => {
    //reigstration
    cy.visit("/");
    cy.findByPlaceholderText(/first name/i).type("John");
    cy.findByPlaceholderText(/last name/i).type("Doee");
    cy.findByPlaceholderText(/email/i).type(
      `john.doe${Math.random()}@gmail.com`
    );
    cy.findByPlaceholderText(/password/i).type("testing");

    cy.get('[cy-test="cy-register-button"]').click();
  });
});
