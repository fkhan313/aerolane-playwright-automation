import type { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountPage extends BasePage {
  readonly profileForm: Locator;

  constructor(page: Page) {
    super(page);
    this.profileForm = page.getByTestId("profile-form");
  }

  async goto(): Promise<void> {
    await this.page.goto("/account.html");
  }
}
