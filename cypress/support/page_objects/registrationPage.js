class RegistrationPage {
  visit() {
    cy.visit("https://nativeteams.com/pricing");
  }

  selectFreePlan() {
    cy.get("button[data-name='free']").click().wait(2000);
  }

  fillFirstName(firstName) {
    cy.get("#input-first-name").type(firstName);
  }

  fillLastName(lastName) {
    cy.get("#input-last-name").type(lastName);
  }

  fillEmail(email) {
    cy.get("#input-email").type(email);
  }

  fillPassword(password) {
    cy.get("#input-password").type(password);
  }

  agreeToTerms() {
    cy.get("#input-agree").check();
  }

  proceed() {
    cy.get("#btn-step-one-proceed").click({ force: true }).wait(3000);
  }

  fillPhone(phone) {
    cy.get("[name='phone']").type(phone);
  }

  selectBusinessType(type) {
    cy.get("span .multiple__select__body__selected").eq(0).click().wait(1000);
    cy.get(`[data-value="${type}"]`).click();
  }

  selectFreelancePlatform(platform) {
    cy.get("span .multiple__select__body__selected")
      .eq(1)
      .click({ force: true })
      .wait(1000);
    cy.get(`[data-value="${platform}"]`).click();
  }

  selectPaymentMethod(method) {
    cy.get("span .multiple__select__body__selected")
      .eq(2)
      .click({ force: true })
      .wait(1000);
    cy.get(`[data-value="${method}"]`).click();
  }

  submitRegistration() {
    cy.get("#btn-step-two-register").click({ force: true }).wait(3000);
  }

  verifyErrorMessage(message) {
    cy.contains(message).should("be.visible");
  }
}

export default RegistrationPage;
