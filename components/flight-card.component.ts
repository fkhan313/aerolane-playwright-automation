import type { Locator } from "@playwright/test";

// Wraps a single <flight-card> custom element (open shadow DOM, auto-pierced by Playwright).
export class FlightCardComponent {
  readonly root: Locator;

  constructor(root: Locator) {
    this.root = root;
  }
}
