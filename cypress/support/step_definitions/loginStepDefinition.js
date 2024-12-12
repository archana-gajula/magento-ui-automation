import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageObjects/LoginPage";

const loginPage = new LoginPage();

const emailId = 'test'+ new Date().getTime() + '@test.com';
const password = 'TestPassword!2#';
const firstName = 'Test';
const lastName = 'User';

Given('I navigate to the application', () => {
  loginPage.visit();
});

When('I Create a new account', () => {
  loginPage.createAccount();
  loginPage.enterFirstName(firstName);
  loginPage.enterLastName(lastName);
  loginPage.captureEmail(emailId);
  loginPage.createPassword(password);
  loginPage.enterConfirmPassword(password);
  loginPage.createAnAccount();
});

Then ('I land into the My Account page', () => {
  loginPage.verifyMyAccountPage();
});

When ('I login with valid user credentials', () => {
  loginPage.clickOnSignIn();
  loginPage.enterEmail(emailId);
  loginPage.enterPassword(password);
  loginPage.SignIn();
});


Then('I should see the Home Page', () => {
  loginPage.verifyHomePage();
});