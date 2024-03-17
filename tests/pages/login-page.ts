import { Page, Locator } from '@playwright/test'

class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.getByPlaceholder('UserName');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(email: string, password: string){
        await this.username.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}
export default LoginPage;