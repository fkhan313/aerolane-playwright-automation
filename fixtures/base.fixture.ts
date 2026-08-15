import { test as base } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { ResultsPage } from "../pages/results.page";
import { SummaryPage } from "../pages/summary.page";
import { ConfirmationPage } from "../pages/confirmation.page";
import { LoginPage } from "../pages/login.page";
import { MyAccountPage } from "../pages/my-account.page";
import { BookingsPage } from "../pages/bookings.page";

interface PageFixtures {
  homePage: HomePage;
  resultsPage: ResultsPage;
  summaryPage: SummaryPage;
  confirmationPage: ConfirmationPage;
  loginPage: LoginPage;
  accountPage: MyAccountPage;
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
    await use(new MyAccountPage(page));
  },
  bookingsPage: async ({ page }, use) => {
    await use(new BookingsPage(page));
  },
});

export { expect } from "@playwright/test";
