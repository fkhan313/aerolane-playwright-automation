import type { Page, Locator } from "@playwright/test";

// Shared shell present on every page: header auth area + progress steps.
export abstract class BasePage {
  readonly page: Page;
  readonly authArea: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.authArea = page.getByTestId("auth-area");
  }

  abstract goto(): Promise<void>;
}
