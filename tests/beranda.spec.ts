import { test, expect, devices } from '@playwright/test';

const PREVIEW_DIR = '../reports/.preview';

test.describe('Beranda (/)', () => {
  test('desktop screenshot & basic checks', async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page).toHaveTitle(/Time Base/i);

    // Wait for hero content to be visible
    await page.waitForSelector('h1', { timeout: 15000 });

    await page.screenshot({ path: `${PREVIEW_DIR}/beranda-desktop.png`, fullPage: true });

    // Sticky navbar presence
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Logo image present with alt text
    const logo = page.locator('header img').first();
    await expect(logo).toBeVisible();
    const alt = await logo.getAttribute('alt');
    expect(alt).toBeTruthy();

    await context.close();
  });

  test('mobile screenshot & basic checks', async ({ browser }) => {
    const context = await browser.newContext({ ...devices['iPhone SE'] });
    const page = await context.newPage();
    await page.goto('/');
    await page.waitForSelector('h1', { timeout: 15000 });

    await page.screenshot({ path: `${PREVIEW_DIR}/beranda-mobile.png`, fullPage: true });

    // No horizontal overflow on mobile
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);

    await context.close();
  });
});
