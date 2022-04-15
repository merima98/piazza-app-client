describe("Should test posts.", () => {
  beforeEach(() => {
    //user needs to log in. after user gets log in, user will be able to visit post details.

    cy.visit("/login");
    cy.findByRole("textbox").type("merima123@test.com");
    cy.findByPlaceholderText(/password/i).type("merima123");
    cy.findByRole("button", {
      name: /login/i,
    }).click();
    cy.get('[data-test="data-test-new-posts"]').eq(0).click();
  });

  it("Should visit New Posts page.", () => {
    //user clicks on image, so to navigate on post details page.
    cy.get('[data-test="data-test-post-details-image"]').eq(1).click();

    cy.url().should("include", "/post"); // => true
  });
});
