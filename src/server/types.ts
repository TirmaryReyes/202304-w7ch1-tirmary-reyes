import type { Request } from "express";

export type UserCredentialsRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  { username: string; password: string }
>;
