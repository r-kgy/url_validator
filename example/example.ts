import {
  UrlValidater,
  HttpsValidate,
} from "https://deno.land/x/url-validator/mod.ts";

const url: string = "https://deno.land/";
let urlValidator = new UrlValidater(url, new HttpsValidate());
urlValidator.validate(); // true
