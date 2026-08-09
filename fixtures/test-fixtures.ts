import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ResultsPage } from "../pages/ResultsPage";
import { SummaryPage } from "../pages/SummaryPage";
import { ConfirmationPage } from "../pages/ConfirmationPage";
import { LoginPage } from "../pages/LoginPage";
import { AccountPage } from "../pages/AccountPage";
import { BookingsPage } from "../pages/BookingsPage";

interface PageFixtures {
  homePage: HomePage;
  resultsPage: ResultsPage;
  summaryPage: SummaryPage;
  confirmationPage: ConfirmationPage;
  loginPage: LoginPage;
  accountPage: AccountPage;
  bookingsPage: BookingsPage;
}

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  resultsPage: async ({ page }, use) => {
    await use(new ResultsPage(page));
  },
  summaryPage: async ({ page }, use) => {
    await use(new SummaryPage(page));
  },
  confirmationPage: async ({ page }, use) => {
    await use(new ConfirmationPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
  bookingsPage: async ({ page }, use) => {
    await use(new BookingsPage(page));
  },
});

export { expect } from "@playwright/test";
