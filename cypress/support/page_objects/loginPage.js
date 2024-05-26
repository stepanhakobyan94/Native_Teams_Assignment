class LoginPage {
  visit() {
    cy.visit("https://nativeteams.com");
  }

  clickLoginButton() {
    cy.contains("a", "Log in").click({ force: true });
  }

  fillEmail(email) {
    cy.get("input[name='email']").type(email);
  }

  fillPassword(password) {
    cy.get("#password").type(password);
  }

  submitLogin() {
    cy.get("button[type='submit']").click();
  }

  verifyDashboardVisible() {
    cy.get(".lhs-expanded-text").should("be.visible");
  }

  verifyInvalidPasswordMessage() {
    cy.contains("Please provide valid email address and password.").should(
      "be.visible"
    );
  }

  verifyInvalidEmailMessage() {
    cy.contains("Please enter a valid email address.").should("be.visible");
  }
}

export default LoginPage;
