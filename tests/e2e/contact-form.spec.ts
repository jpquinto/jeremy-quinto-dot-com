import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
    test(`should display 'email copied to clipboard!' message`, async ({ page }) => {
        await page.goto('/');

        await page.click('button:has-text("jpq@jeremyquinto.com")');
        
        const copiedText = page.locator('text=email copied to clipboard!');
        await expect(copiedText).toHaveText('email copied to clipboard!');
    });

    test('should say that email is delivered', async ({ page }) => {
        await page.goto('/');
        await page.getByPlaceholder('name').click();
        await page.getByPlaceholder('name').fill('jeremy quinto');
        await page.getByPlaceholder('email').click();
        await page.getByPlaceholder('email').fill('jpq2901@gmail.com');
        await page.getByPlaceholder('message').click();
        await page.getByPlaceholder('message').fill('this is a message!');
        await page.getByRole('button', { name: 'send' }).click();

        const button = page.locator('button:has-text("message sent! thanks!")');
        await expect(button).toHaveText('message sent! thanks!');
    })
})