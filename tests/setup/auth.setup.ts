import { test as setup } from "@playwright/test";

const _authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page: _page }) => {
  // TODO: log in via UI or POST /api/login and save storageState to _authFile.
});
