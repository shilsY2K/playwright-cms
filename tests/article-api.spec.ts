import {test, expect} from '@playwright/test';

test('Get request for Articles API', async ({request}) => {
    const apiURL = "https://conduit-api.bondaracademy.com/api/articles";
    const response = await request.get(apiURL + '?limit=10&offset=0');
    
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.articles.length).toBeLessThanOrEqual(10);
    expect(responseBody.articlesCount).toBeGreaterThan(0);

    for (const article of responseBody.articles) {
        expect(article).toHaveProperty('slug');
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('description');
        expect(article).toHaveProperty('tagList');
        expect(article).toHaveProperty('createdAt');
        expect(article).toHaveProperty('updatedAt');
        expect(article).toHaveProperty('favorited');
        expect(article).toHaveProperty('favoritesCount');
        expect(article).toHaveProperty('author');   
    }
});

test('Post request for Articles API', async ({request}) => {
    
    const apiURL = "https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0";
    const newArticle = {
        article: {
            title: "test",
            description: "test1",
            body: "test2",
            tagList: ["Test"]
        }
    };

    const response = await request.post(apiURL, {
        data: newArticle,
        headers: {
            'Content-Type': 'application/json',
            // Include authentication token if required
            'Authorization': `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxOTA3NH0sImlhdCI6MTc2NDcyNzQyMiwiZXhwIjoxNzY5OTExNDIyfQ.u9UxXploQxKE9_CS3jKEAEMcHfMVAgeTmQj4bAnWOyw`
        }
    });

    const responseBody = await response.json();
    console.log(responseBody);
   // expect(response.status()).toBe(200);
});