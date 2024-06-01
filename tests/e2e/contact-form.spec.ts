import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
    test(`should display 'email copied to clipboard!' message`, async ({ page }) => {
        await page.goto('/');

        await page.click('button:has-text("jpq@jeremyquinto.com")');
        
        const copiedText = page.locator('text=email copied to clipboard!');
        await expect(copiedText).toHaveText('email copied to clipboard!');
    })
})