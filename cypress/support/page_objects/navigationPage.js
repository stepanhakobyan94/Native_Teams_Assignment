class NavigationPage {
  clickSettings() {
    cy.get("#settings").click();
  }

  clickPayments() {
    cy.contains("div", "Payments").click();
  }

  clickWallet() {
    cy.contains("span", "Wallet").click();
  }

  clickPaymentRequest() {
    cy.contains("span", "Payment Request").click();
  }

  clickEmployment() {
    cy.contains("div", "Employment").click();
  }

  clickPayrollCalculator() {
    cy.contains("span", "Payroll Calculator").click();
  }

  clickTax() {
    cy.contains("div", "Tax").click();
  }

  clickLegalEntity() {
    cy.contains("span", "Legal Entity").click();
  }

  clickMobility() {
    cy.contains("span", "Mobility").click();
  }

  clickDocuments() {
    cy.contains("span", "Documents").click();
  }

  verifyWalletPage() {
    cy.get(".modal-header > .heading-2").should("be.visible");
  }

  verifyPaymentRequestPage() {
    cy.get(".title-text")
      .contains(
        "Request instant payments and receive the money into your virtual wallet!"
      )
      .should("be.visible");
  }

  verifyPayrollCalculatorPage() {
    cy.contains("p", "Payroll Calculator").should("be.visible");
  }

  verifyLegalEntityPage() {
    cy.contains("span", "Next").should("be.visible");
  }

  verifyMobilityPage() {
    cy.contains("p", "Mobility").should("be.visible");
  }

  verifyDocumentsPage() {
    cy.contains("p", "Documents").should("be.visible");
  }
}

export default NavigationPage;
