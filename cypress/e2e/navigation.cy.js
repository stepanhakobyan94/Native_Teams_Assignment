import LoginPage from "../support/page_objects/loginPage";
import NavigationPage from "../support/page_objects/navigationPage";

const loginPage = new LoginPage();
const navigationPage = new NavigationPage();

describe("Navigation", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.clickLoginButton();
    loginPage.fillEmail("stepanh08@gmail.com");
    loginPage.fillPassword("G!GuqFB9U8kxM7W");
    loginPage.submitLogin();
    loginPage.verifyDashboardVisible();
  });

  it("should navigate to Wallet section", () => {
    navigationPage.clickPayments();
    navigationPage.clickWallet();
    navigationPage.verifyWalletPage();
  });

  it("should navigate to Payment Request section", () => {
    navigationPage.clickPayments();
    navigationPage.clickPaymentRequest();
    navigationPage.verifyPaymentRequestPage();
  });

  it("should navigate to Payroll Calculator section", () => {
    navigationPage.clickEmployment();
    navigationPage.clickPayrollCalculator();
    navigationPage.verifyPayrollCalculatorPage();
  });

  it("should navigate to Legal Entity section", () => {
    navigationPage.clickTax();
    navigationPage.clickLegalEntity();
    navigationPage.verifyLegalEntityPage();
  });

  it("should navigate to Mobility section", () => {
    navigationPage.clickMobility();
    navigationPage.verifyMobilityPage();
  });

  it("should navigate to Documents section", () => {
    navigationPage.clickDocuments();
    navigationPage.verifyDocumentsPage();
  });
});
