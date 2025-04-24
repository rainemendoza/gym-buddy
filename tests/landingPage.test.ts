import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  // This runs before each test case in the block
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage (landing page)
    await page.goto('https://gym-buddy-five.vercel.app/'); // Replace with the correct URL if needed
  });

  test('should display the landing page title', async ({ page }) => {
    // Check if the landing page title is present
    await expect(page).toHaveTitle('Gym Buddy'); // Replace with your actual title
  });

  test('should show the slogan "A new way to enjoy the gym."', async ({ page }) => {
    // Check if the text "A new way to enjoy the gym." is visible on the page
    const slogan = page.locator('text=A new way to enjoy the gym.');
    await expect(slogan).toBeVisible();
  });

  test('should have a functional sign-in button', async ({ page }) => {
    // Check if the "Sign In" button exists and is clickable
    const signInButton = page.locator('text=Sign In');
    await expect(signInButton).toBeVisible();
    await signInButton.click();

    // Assert that after clicking, the sign-in page should load (replace with actual URL)
    await expect(page).toHaveURL('https://gym-buddy-five.vercel.app/auth/signin');
  });

  // Additional tests can be added here
});
