import LoginPage from "../support/page_objects/loginPage";
import { faker } from "@faker-js/faker";

const loginPage = new LoginPage();
const notValidPassword = faker.internet.email().toLowerCase();
const notValidEmail = faker.name.fullName();

describe("Login Functionality", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("should allow a user to log in with valid credentials", () => {
    loginPage.clickLoginButton();
    loginPage.fillEmail("stepanh08@gmail.com");
    loginPage.fillPassword("G!GuqFB9U8kxM7W");
    loginPage.submitLogin();
    loginPage.verifyDashboardVisible();
  });

  it("should not allow a user to log in with invalid email credential", () => {
    loginPage.clickLoginButton();
    loginPage.fillEmail(notValidEmail);
    loginPage.fillPassword(notValidPassword);
    loginPage.submitLogin();
    loginPage.verifyInvalidEmailMessage();
  });

  it("should not allow a user to log in with invalid password credential", () => {
    loginPage.clickLoginButton();
    loginPage.fillEmail("stepanh08@gmail.com");
    loginPage.fillPassword(notValidPassword);
    loginPage.submitLogin();
    loginPage.verifyInvalidPasswordMessage();
  });
});
