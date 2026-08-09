import type { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly searchForm: Locator;
  readonly tripTypeGroup: Locator;
  readonly fromInput: Locator;
  readonly toInput: Locator;

  constructor(page: Page) {
    super(page);
    this.searchForm = page.getByTestId("search-form");
    this.tripTypeGroup = page.getByTestId("trip-type");
    this.fromInput = page.getByTestId("from-input");
    this.toInput = page.getByTestId("to-input");
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }
}
