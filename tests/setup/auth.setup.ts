import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  // log in via UI and save storageState to authFile.
  await page.goto("/login.html?redirect=%2F");
  await page.getByTestId("login-email").fill("test@aerolane.dev");
  await page.getByTestId("login-password").fill("Test1234!");
  await page.getByTestId("login-submit").click();
  await page.getByTestId("auth-menu-trigger").hover(); // hovering over the user name
  await expect(page.getByRole("menuitem", { name: "My account" })).toBeVisible();
  await page.context().storageState({ path: authFile });
});

// ToDo: log in via POST /api/login and save storageState to authFile.
