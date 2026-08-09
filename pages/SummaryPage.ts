import type { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SummaryPage extends BasePage {
  readonly itineraryContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.itineraryContainer = page.getByTestId("itinerary-container");
  }

  async goto(): Promise<void> {
    await this.page.goto("/summary.html");
  }
}
