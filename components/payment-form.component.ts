import type { Page, Locator } from "@playwright/test";

// Payment fields on the summary/review page, including masked card number + expiry.
export class PaymentFormComponent {
  readonly cardNumberInput: Locator;
  readonly expiryInput: Locator;

  constructor(page: Page) {
    this.cardNumberInput = page.getByLabel("Card number");
    this.expiryInput = page.getByLabel("Expiry");
  }
}
