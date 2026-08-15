import type { Locator } from "@playwright/test";

// Wraps one custom date-picker instance, identified by its data-testid prefix.
export class DatePickerComponent {
  readonly root: Locator;

  constructor(root: Locator) {
    this.root = root;
  }
}
