import { test, expect } from "@playwright/test";

test("My account page", async ({ page }) => {
  await page.goto("/account.html");
  await expect(page).toHaveTitle("Aerolane — My account");
});
