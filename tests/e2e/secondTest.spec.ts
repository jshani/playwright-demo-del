import { test } from '@playwright/test';
import HomePage from '../../pages/home-page';

const javaDescription =
  "Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.";
let homePage: HomePage;

test.beforeEach(async ({ page }, testInfo) => {
  homePage = new HomePage(page);
  console.log(`Running ${testInfo.title}`);
  await page.goto("https://playwright.dev/");
});

test.describe("Fist tests with page object model", () => {
  test("go to node.js page", async ({ page }) => {
    await homePage.clickGetStartedButton();
    await homePage.hoverOverLanguageDropdown();
    await homePage.clickDropdownOptionJava();
    await homePage.assertJava();
  });
});
