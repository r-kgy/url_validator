import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import {
  UrlValidater,
  HttpsValidate,
  HttpValidate,
  RFC3986Validate,
} from "./mod.ts";

Deno.test("Check the HttpsValidate when given valid https url", function (): void {
  const url: string = "https://deno.land/";
  let urlValidator = new UrlValidater(url, new HttpsValidate());
  assertEquals(urlValidator.validate(), true);
});

Deno.test("Check the HttpsValidate when given valid http url", function (): void {
  const url: string = "http://deno.land/";
  let urlValidator = new UrlValidater(url, new HttpsValidate());
  assertEquals(urlValidator.validate(), true);
});

Deno.test("Check the HttpValidate when given valid https url", function (): void {
  const url: string = "https://deno.land/";
  let urlValidator = new UrlValidater(url, new HttpValidate());
  assertEquals(urlValidator.validate(), false);
});

Deno.test("Check the HttpValidate when given valid http url", function (): void {
  const url: string = "http://deno.land/";
  let urlValidator = new UrlValidater(url, new HttpValidate());
  assertEquals(urlValidator.validate(), true);
});
