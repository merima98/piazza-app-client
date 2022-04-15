describe("Should test registration.", () => {
  it("Should successfuly register user.", () => {
    //reigstration
    cy.visit("/");
    cy.findByPlaceholderText(/first name/i).type("John");
    cy.findByPlaceholderText(/last name/i).type("Doee");
    cy.findByPlaceholderText(/email/i).type("merima123@test.com");
    cy.findByPlaceholderText(/password/i).type("merima123");

    cy.findByRole("button", {
      name: /register/i,
    }).click();
  });
});
