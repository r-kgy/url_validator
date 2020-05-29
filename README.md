# url_validator(beta)
simple url validator for Deno.


## Usage
```ts
import {
  UrlValidater,
  HttpsValidateStrategy,
} from "https://deno.land/x/url_validator/mod.ts";

const url: string = "https://deno.land/";
let urlValidator = new UrlValidater(url, new HttpsValidateStrategy());
urlValidator.validate(); // true
```
