import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import {
  UrlValidater,
  HttpsValidateStrategy,
  HttpValidateStrategy,
  RFC3986ValidateStrategy,
} from "./mod.ts";

Deno.test("Check the HttpsValidate when given valid https url", function (): void {
  const url: string = "https://deno.land/";
  let urlValidator = new UrlValidater(url, new HttpsValidateStrategy());
  assertEquals(urlValidator.validate(), true);
});

Deno.test("Check the HttpsValidate when given valid http url", function (): void {
  const url: string = "http://deno.land/";
  let urlValidator = new UrlValidater(url, new HttpsValidateStrategy());
  assertEquals(urlValidator.validate(), true);
});

Deno.test("Check the HttpValidate when given valid https url", function (): void {
  const url: string = "https://deno.land/";
  let urlValidator = new UrlValidater(url, new HttpValidateStrategy());
  assertEquals(urlValidator.validate(), false);
});

Deno.test("Check the HttpValidate when given valid http url", function (): void {
  const url: string = "http://deno.land/";
  let urlValidator = new UrlValidater(url, new HttpValidateStrategy());
  assertEquals(urlValidator.validate(), true);
});
