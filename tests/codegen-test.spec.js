import { test, expect } from '@playwright/test';
const path = require('path');

// capture current screen and store in cloud storage (S3 in this example)
const buffer = await page.screenshot({ fullPage: true });
await s3.client.putObject({ 
   bucket: myBucket, 
   key: `${testRunId}/artifacts/landing-page.png`, 
   body: buffer, 
   contentType: “image/png” 
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standar_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});