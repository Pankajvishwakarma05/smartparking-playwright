import { test, expect } from '@playwright/test';

test('app loads locally', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/localhost/);
});
