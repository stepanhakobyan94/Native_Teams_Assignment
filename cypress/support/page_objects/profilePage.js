class ProfilePage {
  settingsButtonClick() {
    cy.get(".settings-menu-activator-wrapper.pointer").click();
  }

  profileButtonClick() {
    cy.get("a[href='/settings?tab=profile'").click();
  }

  verifySettingsPage() {
    cy.contains("h1", "Settings").click();
  }
  saveProfile() {
    cy.contains("span", "Save edits").click({ force: true }).wait(3000);
  }
  updateEmail(email) {
    cy.get("div[name='email'] div div input[placeholder='Type here']")
      .clear({ force: true })
      .type(email);
  }

  updateRegion(region) {
    cy.get('[placeholder="Type here"]')
      .eq(2)
      .clear({ force: true })
      .type(region, { force: true });
  }

  updateName(name) {
    cy.get('[placeholder="Type here"]')
      .eq(0)
      .clear({ force: true })
      .type(name, { force: true });
  }

  updateAddress(address) {
    cy.get('[placeholder="Type here"]')
      .eq(3)
      .clear({ force: true })
      .type(address, { force: true });
  }

  updatePhone(phone) {
    cy.get("input[placeholder='77123456']").clear({ force: true }).type(phone);
  }
  verifyEmailSettingsPage(email) {
    cy.get("div[name='email'] div div input[placeholder='Type here']").should(
      "have.value",
      email
    );
  }

  verifyRegionSettingsPage(region) {
    cy.get('[placeholder="Type here"]').eq(3).should("have.value", region);
  }

  verifyAddressSettingsPage(address) {
    cy.get('[placeholder="Type here"]').eq(2).should("have.value", address);
  }
  verifyNameSettingsPage(name) {
    cy.get('[placeholder="Type here"]').eq(0).should("have.value", name);
  }
}

export default ProfilePage;
