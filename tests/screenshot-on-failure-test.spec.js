// example.test.js
const { test, expect } = require('@playwright/test');
const path = require('path');

// placeholder for unique run IDs
let runId = Date.now();

// Function to capture screenshot
async function captureScreenshot(page, testInfo) {
    const screenshotPath = path.join(__dirname, `screenshot-${runId}-${testInfo.title}.png`);
    await page.screenshot({ path: screenshotPath });
    console.log(`Screenshot saved: ${screenshotPath}`);
  }
  
  // Hook to capture screenshot on failure
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await runID = Date.now();
        await captureScreenshot(page, testInfo);
    }
  });

test.describe('Example Test Suite', () => {
  test('should take a screenshot on failure', async ({ page }) => {
    try {
      // Navigate to a web page
      await page.goto('https://example.com');
      
      // Intentional failure for demonstration purposes
      await expect(page).toHaveTitle('Non-Existent Title');
    }
  });
});