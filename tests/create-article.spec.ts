import {test, expect, type Page} from '@playwright/test';
import {createArticle} from '../page/create-article';
import { login } from '../page/login';

test.beforeEach(async ({page}) => {
    const loginPage = new login(page);
    await loginPage.gotoLoginPage();
    await loginPage.loginUser('templateapiuser@xyz.com', 'Welcome');
    await expect(page.getByRole('link', { name: 'templateapiuser' })).toBeVisible();
});

test('Create new Article', async ({page}) => {
    const createArticlePage = new createArticle(page);
    
    await createArticlePage.gotoCreateArticlePage();

    const title = 'Test Article Title';
    const about = 'This is a test article about Playwright';
    const article = 'Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API.';
    const tags = '  Playwright, Testing, Automation';

    await createArticlePage.createArticle(title, about, article, tags);             

    // Verify that the article was created successfully
    await expect(page).toHaveURL(/\/article\/.+/);
    const articleTitle = page.locator('h1');
    await expect(articleTitle).toHaveText(title);
}
);