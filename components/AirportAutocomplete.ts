import type { Locator } from "@playwright/test";

// Wraps one debounced from/to airport input + its suggestion listbox.
export class AirportAutocomplete {
  readonly input: Locator;
  readonly suggestions: Locator;

  constructor(input: Locator, suggestions: Locator) {
    this.input = input;
    this.suggestions = suggestions;
  }
}
