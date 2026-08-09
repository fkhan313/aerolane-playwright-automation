import type { Page, Locator } from "@playwright/test";

export class Header {
  readonly authMenuTrigger: Locator;
  readonly authDropdown: Locator;

  constructor(page: Page) {
    this.authMenuTrigger = page.getByTestId("auth-menu-trigger");
    this.authDropdown = page.getByTestId("auth-dropdown");
  }
}
