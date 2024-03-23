import { Page, Locator, expect} from '@playwright/test'
import messages from '../utils/messages'

class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly messagePanel: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.getByPlaceholder('UserName');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.messagePanel = page.locator('#output');
    }

    async enterUsername(username: string){
        await this.username.fill(username);
    }

    async enterPassword(password: string){
        await this.password.fill(password);
    }

    async clickLoginButton(){
        await this.loginBtn.click();
    }

    async verifyLoggedIn(){
        await expect(this.page).toHaveURL(/.*profile/);
        await expect(this.page).toHaveTitle(/DEMOQA/);
    }

    async login(email: string, password: string){
        await this.enterUsername(email);
        await this.enterPassword(password);
        await this.loginBtn.click();
    }

    async checkInvalidCredentials() {
        await expect(this.messagePanel).toHaveText(messages.login.invalid);
    }
}
export default LoginPage;