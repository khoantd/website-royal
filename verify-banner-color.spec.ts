import { test, expect } from '@playwright/test';

test.describe('Marketing Home Hero', () => {
  test('hero section shows new headline and light background', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const heroSection = page.locator('section').filter({ hasText: 'Chuyển đổi số' }).first();
    await expect(heroSection).toBeVisible();

    const className = await heroSection.getAttribute('class');
    expect(className).toMatch(/overflow-hidden/);

    await expect(heroSection.getByText(/doanh nghiệp của bạn/i)).toBeVisible();
    await expect(heroSection.getByText(/AI & Automation/i)).toBeVisible();
  });
});
