import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:4000";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "html",
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  webServer: {
    command: "npm start --prefix aerolane",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/user.json",
      },
      testMatch: /.*\.spec\.ts/,
      testIgnore: /.*\.(api|a11y|visual)\.spec\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        storageState: "playwright/.auth/user.json",
      },
      testMatch: /.*\.spec\.ts/,
      testIgnore: /.*\.(api|a11y|visual)\.spec\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        storageState: "playwright/.auth/user.json",
      },
      testMatch: /.*\.spec\.ts/,
      testIgnore: /.*\.(api|a11y|visual)\.spec\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 7"],
        storageState: "playwright/.auth/user.json",
      },
      testMatch: /.*\.spec\.ts/,
      testIgnore: /.*\.(api|a11y|visual)\.spec\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "Mobile Safari",
      use: {
        ...devices["iPhone 14"],
        storageState: "playwright/.auth/user.json",
      },
      testMatch: /.*\.spec\.ts/,
      testIgnore: /.*\.(api|a11y|visual)\.spec\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "api",
      testMatch: /.*\.api\.spec\.ts/,
    },
    {
      name: "a11y",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/user.json",
      },
      testMatch: /.*\.a11y\.spec\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "visual",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
      },
      testMatch: /.*\.visual\.spec\.ts/,
      dependencies: ["setup"],
    },
  ],
});
