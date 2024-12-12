class LoginPage {
  visit() {
    cy.visit(Cypress.config('baseUrl'));
  }

  createAnAccount() {
    cy.get('button[type="submit"]').contains("Create an Account").click();
  }

  SignIn() {
    cy.get('button[type="submit"]').contains("Sign In").click();
  }
  createAccount() {
    cy.get(
        `.header.links a[href="${Cypress.config('baseUrl')}customer/account/create/"]`
    )
      .contains("Create an Account")
      .click();
  }

  captureEmail(email) {
    cy.get("#email_address").type(email);
  }
  enterFirstName(firstName) {
    cy.get("#firstname").type(firstName);
  }

  enterLastName(lastName) {
    cy.get("#lastname").type(lastName);
  }

  enterEmail(email) {
    cy.get('[id="email"]').type(email);
  }

  enterPassword(password) {
    cy.get("#pass").type(password);
  }

  createPassword(password) {
    cy.get("#password").type(password);
  }

  enterConfirmPassword(confirmPassword) {
    cy.get("#password-confirmation").type(confirmPassword);
  }

  verifyHomePage() {
    cy.get("h1").should("contain", "Home Page");
  }
  verifyMyAccountPage() {
    cy.get("h1").should("contain", "My Account");
    cy.get(".page.messages").should(
      "contain",
      "Thank you for registering with Main Website Store."
    );
  }

  clickOnSignIn() {
    cy.get(
        `.header.links a[href="${Cypress.config('baseUrl')}customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]`
    )
      .contains("Sign In")
      .click();
  }
}
export default LoginPage;
