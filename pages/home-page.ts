import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly startedButton: Locator;
    readonly languageDropdown: Locator;
    readonly dropdownOptionJava: Locator;
    readonly javaFileName: string;
    readonly javaFile: Locator

  constructor(page) {
    this.page = page;
    this.startedButton = page.getByRole("link", { name: "Get started" });
    this.languageDropdown = page.getByRole("button", { name: "Node.js" });
    this.dropdownOptionJava = page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' });
    this.javaFileName = 'src/main/java/org/example/App.java'
    this.javaFile = page.getByText('src/main/java/org/example/App');
    }

  async clickGetStartedButton() {
    await this.startedButton.click();
  }

  async hoverOverLanguageDropdown() {
    await this.languageDropdown.hover({ force: true });
  }

  async clickDropdownOptionJava() {
    await this.dropdownOptionJava.click({ force: true });
  }

  async assertJava() {
    await expect(this.page).toHaveURL(/.*java\/docs\/intro/);
    await expect(this.javaFile).toHaveText(this.javaFileName)
  }
}
export default HomePage;
