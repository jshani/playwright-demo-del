import { test, expect } from "@playwright/test";

test.describe("Fist tests", () => {
  test("go to node.js page", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.getByRole("link", { name: "Get started" }).click();
    await page.getByRole("button", { name: "Node.js" }).hover();
    await page.getByText("Java", { exact: true }).click();
    await expect(page).toHaveURL(/.*java\/docs\/intro/);
    const javaDescription =
      "Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.";
    await expect(page.getByText(javaDescription)).toBeVisible();
  });
});
