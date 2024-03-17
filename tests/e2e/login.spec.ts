import { test } from '@playwright/test';
import LoginPage from '../pages/login-page'
import pages from '../../utils/pageUrls'

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    //navigate to login page url which is saved in util/pages
    await page.goto(pages.loginPage);
    loginPage = new LoginPage(page);
});

test.describe("Login tests", () => {
  test("login successfully", async ({ page }) => {
    //TODO check where to store username and password
    await loginPage.login('username','passwors');    

  });
});
