import type { APIRequestContext } from "@playwright/test";

// Thin wrapper over /api/login, /api/logout, /api/me.
export class AuthApi {
  constructor(private readonly request: APIRequestContext) {}
}
