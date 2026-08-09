import type { APIRequestContext } from "@playwright/test";

// Thin wrapper over GET/PATCH /api/me.
export class AccountApi {
  constructor(private readonly request: APIRequestContext) {}
}
