import { test, expect } from '@playwright/test';

test('dashboard placeholder', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Design System Cloud/);
});
