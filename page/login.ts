import {Page} from '@playwright/test';

export class login {
    readonly page: Page;
    readonly emailInput;
    readonly passwordInput;
    readonly signInButton;
    
    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('input[placeholder="Email"]');
        this.passwordInput = page.locator('input[placeholder="Password"]');
        this.signInButton = page.locator('button:has-text("Sign in")');
    }

    async gotoLoginPage() {
        await this.page.goto('https://conduit.bondaracademy.com//login');
    }

    async loginUser(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
}
