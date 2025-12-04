import { Page } from '@playwright/test';

export class createArticle {

    readonly page: Page;
    readonly titleInput;
    readonly aboutInput;
    readonly articleInput;
    readonly tagsInput;
    readonly publishButton;

    constructor(page: Page ) {
        this.page = page;
        this.titleInput = page.getByRole('textbox', { name: 'Article Title' });
        this.aboutInput = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.articleInput = page.getByRole('textbox', { name: 'Write your article (in' });
        this.tagsInput = page.getByRole('textbox', { name: 'Enter tags' });
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
    }
    
    async gotoCreateArticlePage() {
        await this.page.goto('https://conduit.bondaracademy.com/editor');
    }

    async createArticle(title: string, about: string, article: string, tags: string) {
        await this.titleInput.fill(title);
        await this.aboutInput.fill(about);
        await this.articleInput.fill(article);
        await this.tagsInput.fill(tags);
        await this.publishButton.click();
    }
}