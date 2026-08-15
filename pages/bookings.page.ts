import type { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class BookingsPage extends BasePage {
  readonly exportExcelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.exportExcelButton = page.getByTestId("export-excel-btn");
  }

  async goto(): Promise<void> {
    await this.page.goto("/bookings.html");
  }
}
