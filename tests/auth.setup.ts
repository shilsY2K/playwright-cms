import { test, expect} from '@playwright/test';
import path from 'path';

// This file is for setting up authentication before running tests.
const authFile = path.join(__dirname, '../playwright/.auth/user.json');
/* setup("Authenticate before tests", async ({ page, context }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('templateapiuser@xyz.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Welcome');
    await page.getByRole('button', { name: 'Sign in' }).click();
    
    await expect(page.getByRole('link', { name: 'templateapiuser' })).toBeVisible();    

    await context.storageState({ path: authFile });
}); */

test('Post request for Login API', async ({ request }) => {
const apiURL = "https://conduit-api.bondaracademy.com/api/users/login";
const response = await request.post(apiURL, {
        data: { user: { email: "templateapiuser@xyz.com", password: "Welcome" } },
        headers: {
            'Content-Type': 'application/json',
            // Include authentication token if required
            'Authorization': `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxOTA3NH0sImlhdCI6MTc2NDcyNzQyMiwiZXhwIjoxNzY5OTExNDIyfQ.u9UxXploQxKE9_CS3jKEAEMcHfMVAgeTmQj4bAnWOyw`
        }
  });
  expect(response.status()).toBe(200);
});