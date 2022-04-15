describe("Should test login form.", () => {
  it("Should successfuly login in to the application", () => {
    cy.visit("/login");

    cy.findByRole("textbox").type("merima123@test.com");
    cy.findByPlaceholderText(/password/i).type("merima123");

    cy.findByRole("button", {
      name: /login/i,
    }).click();
  });
});
