import { sequence } from "astro/middleware";

function validation() {}
function auth() {}

export const onRequest = sequence(validation, auth);
