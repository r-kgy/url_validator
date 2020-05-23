# url_validator
simple url validator for Deno.


## Usage
```ts
import {
  UrlValidater,
  HttpsValidateStrategy,
} from "https://deno.land/x/url-validator/mod.ts";

const url: string = "https://deno.land/";
let urlValidator = new UrlValidater(url, new HttpsValidateStrategy());
urlValidator.validate(); // true
```
