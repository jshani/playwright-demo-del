import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly startedButton: Locator;
    readonly languageDropdown: Locator;
    readonly dropdownOptionJava: Locator;
    readonly javaDescription: string;

  constructor(page) {
    this.page = page;
    this.startedButton = page.getByRole("link", { name: "Get started" });
    this.languageDropdown = page.getByRole("button", { name: "Node.js" });
    this.dropdownOptionJava = page.getByText("Java", { exact: true });
    this.javaDescription =
      "Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.2";
  }

  async clickGetStartedButton() {
    await this.startedButton.click();
  }

  async hoverOverLanguageDropdown() {
    await this.languageDropdown.hover();
  }

  async clickDropdownOptionJava() {
    await this.dropdownOptionJava.click({ force: true });
  }

  async assertJava() {
    await expect(this.page).toHaveURL(/.*java\/docs\/intro/);
    await expect(this.page.getByText(this.javaDescription)).toBeVisible();
  }
}
export default HomePage;
