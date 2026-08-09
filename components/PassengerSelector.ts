import type { Page, Locator } from "@playwright/test";

// The passenger/cabin popover with stepper controls on the search form.
export class PassengerSelector {
  readonly trigger: Locator;

  constructor(page: Page) {
    this.trigger = page.getByTestId("passenger-selector-trigger");
  }
}
