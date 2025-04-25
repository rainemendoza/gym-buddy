import { test, expect } from '@playwright/test';

// Apply storageState globally for all tests in this file
test.use({
  storageState: 'admin-auth.json', // Apply storage state
});

test.describe('Profile Page Tests', () => {
  test('Profile page is available and displays expected content', async ({ page }) => {
    // Go to the deployed profile page
    await page.goto('https://gym-buddy-five.vercel.app/profile');

    // Check for a heading or some known text from the profile page
    await expect(page.locator('text=My Profile')).toBeVisible();

    // Optionally check for a specific input or button if applicable
    await expect(page.locator('button', { hasText: /save/i })).toBeVisible();
  });
});
