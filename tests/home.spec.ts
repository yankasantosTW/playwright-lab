import { test, expect } from '@playwright/test'
test.describe('Home', () => {
    test('Open Thoughtworks home page and verify title', async ({ page }) => {
        //open URL
        await page.goto('https://www.thoughtworks.com/');
        //verify title
        await expect(page).toHaveTitle('Thoughtworks: A leading technology consultancy | Thoughtworks');
    })

})
