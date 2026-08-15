import type { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ConfirmationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await this.page.goto("/confirmation.html");
  }
}
