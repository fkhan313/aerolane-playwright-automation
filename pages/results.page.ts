import type { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class ResultsPage extends BasePage {
  readonly heading: Locator;
  readonly flightCards: Locator;
  readonly retrySearchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByTestId("results-heading");
    this.flightCards = page.locator("flight-card");
    this.retrySearchButton = page.getByTestId("retry-search");
  }

  async goto(): Promise<void> {
    await this.page.goto("/results.html");
  }
}
