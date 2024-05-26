import { faker } from "@faker-js/faker";
import RegistrationPage from "../support/page_objects/registrationPage";

const registrationPage = new RegistrationPage();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email().toLowerCase();
const notValidEmail = faker.name.fullName();

describe("Registration Functionality", () => {
  beforeEach(() => {
    registrationPage.visit();
  });

  it("should allow a user to register with valid data", () => {
    registrationPage.selectFreePlan();
    registrationPage.fillFirstName(firstName);
    registrationPage.fillLastName(lastName);
    registrationPage.fillEmail(email);
    registrationPage.fillPassword("ValidPassword123#");
    registrationPage.agreeToTerms();
    registrationPage.proceed();
    registrationPage.fillPhone("12344556");
    registrationPage.selectBusinessType("invoicing_clients");
    registrationPage.selectFreelancePlatform("upwork");
    registrationPage.selectPaymentMethod("payoneer");
    registrationPage.submitRegistration();
  });

  it("should show error messages for invalid data entries", () => {
    registrationPage.selectFreePlan();
    registrationPage.fillFirstName(firstName);
    registrationPage.fillLastName(lastName);
    registrationPage.fillEmail(notValidEmail);
    registrationPage.fillPassword("notValidPassword123");
    registrationPage.agreeToTerms();
    registrationPage.proceed();

    registrationPage.verifyErrorMessage(
      "The email must be a valid email address."
    );
    registrationPage.verifyErrorMessage(
      "At least one special character (e.g. @ $ ! % * ? ^ & #)"
    );
  });
});
