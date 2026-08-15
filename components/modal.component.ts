import type { Page, Locator, FrameLocator } from "@playwright/test";

// Generic wrapper for the fare-rules / terms modals, both backed by real <iframe>s.
export class ModalComponent {
  readonly dialog: Locator;
  readonly closeButton: Locator;
  readonly frame: FrameLocator;

  constructor(page: Page, frameSelector: string) {
    this.dialog = page.getByRole("dialog");
    this.closeButton = page.getByTestId("modal-close");
    this.frame = page.frameLocator(frameSelector);
  }
}
