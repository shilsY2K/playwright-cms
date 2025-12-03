import {test, expect} from '@playwright/test';

test('Get request for Articles API', async ({request}) => {
    const apiURL = "https://conduit-api.bondaracademy.com/api/tags";
    const response = await request.get(apiURL);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toHaveProperty('tags');
    expect(Array.isArray(responseBody.tags)).toBe(true);
    expect(responseBody.tags.length).toBeGreaterThan(0);
    expect(responseBody.tags).toContain('Git');
});