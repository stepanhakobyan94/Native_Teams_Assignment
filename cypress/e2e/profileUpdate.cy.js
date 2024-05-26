import { faker } from "@faker-js/faker";
import ProfilePage from "../support/page_objects/profilePage";
import LoginPage from "../support/page_objects/loginPage";

const loginPage = new LoginPage();
const profilePage = new ProfilePage();

describe("Profile Update", () => {
  let newName;
  let newAddress;
  let newRegion;
  let newEmail;
  let newPhone;

  before(() => {
    newName = faker.name.fullName();
    newAddress = faker.address.state();
    newRegion = faker.address.streetAddress();
    newEmail = faker.internet.email().toLowerCase();
    newPhone = faker.string.numeric({ length: 6 });
  });

  beforeEach(() => {
    loginPage.visit();
    loginPage.clickLoginButton();
    loginPage.fillEmail("stepanh08@gmail.com");
    loginPage.fillPassword("G!GuqFB9U8kxM7W");
    loginPage.submitLogin();
    loginPage.verifyDashboardVisible();
    profilePage.settingsButtonClick();
    profilePage.profileButtonClick();
  });

  it("should allow a user to update their profile information", () => {
    profilePage.updateName(newName);
    profilePage.updateEmail(newEmail);
    profilePage.updateAddress(newAddress);
    profilePage.updateRegion(newRegion);
    profilePage.updatePhone("55" + newPhone);
    profilePage.saveProfile();
  });

  it("should verify the updated profile information", () => {
    profilePage.verifyNameSettingsPage(newName);
    profilePage.verifyAddressSettingsPage(newRegion);
    profilePage.verifyRegionSettingsPage(newAddress);
    cy.contains(newPhone);
    cy.contains(newEmail);
  });
});
