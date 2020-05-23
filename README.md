# Dependency Injection
simple url validator for Deno.


## Usage
```
import {
  UrlValidater,
  HttpsValidateStrategy,
} from "https://deno.land/x/url-validator/mod.ts";

const url: string = "https://deno.land/";
let urlValidator = new UrlValidater(url, new HttpsValidateStrategy());
urlValidator.validate(); // true
```
