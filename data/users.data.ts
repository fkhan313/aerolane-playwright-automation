export interface TestUser {
  email: string;
  password: string;
}

// Pre-seeded accounts from the app's mock backend.
export const TEST_USER: TestUser = {
  email: "test@aerolane.dev",
  password: "Test1234!",
};

export const LOCKED_USER: TestUser = {
  email: "locked@aerolane.dev",
  password: "Test1234!",
};
