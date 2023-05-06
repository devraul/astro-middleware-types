import { sequence } from "astro/middleware";

function validation(_: any, next: any) {
  return next();
}

function auth(_: any, next: any) {
  return next();
}

export const onRequest = sequence(validation, auth);
