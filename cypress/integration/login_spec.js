describe("Should test login form.", () => {
  it("Should successfuly login in to the application", () => {
    //login
    cy.visit("/login");
    cy.findByRole("textbox").type("merima123@test.com");
    cy.findByPlaceholderText(/password/i).type("merima123");
    cy.findByRole("button", {
      name: /login/i,
    }).click();

    //add new post
    cy.findByPlaceholderText(/Image URL/i).type(
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    );
    cy.findByPlaceholderText(/Content of image./i).type("e2e Image");
    cy.get('[data-test="add-new-post-button"]').click();

    //should successfully visit user profile
    cy.get('[data-test="data-test-user-icon"]').click({ force: true });
    cy.get('[data-test="data-test-your-profile"]').click();
    cy.url().should("eq", "http://localhost:3000/your-profile");
  });
});
