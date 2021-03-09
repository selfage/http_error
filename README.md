# @selfage/http_error

## Install

`npm install @selfage/http_error`

## Overview

Written in TypeScript and compiled to ES6 with inline source map & source. See [@selfage/tsconfig](https://www.npmjs.com/package/@selfage/tsconfig) for full compiler options. Provides a simple `HttpError` class with status code, as well as taking an error as its cause based on `@selfage/nested_error`.

## HttpError

You can create a `HttpError` as the following, while the third argument is optional.

```TypeScript
import { StatusCode, HttpError } from '@selfage/http_error';

throw new HttpError(
  StatusCode.InternalServerError,
  "Something weird",
  new Error("File system error")
);
```

It will output the following, omitting details.

```
500 HttpError: Something weird
    at Object.<anonymous> (.../http_error/temp.js:4:7)
    ...
Caused by: Error: File system error
    at Object.<anonymous> (.../http_error/temp.js:4:88)
    ...
```

Note that `HttpError` doesn't provide any default error message, but only `status` and `statusCode` properties which are equivalent and are of enum type `StatusCode`, mapping to standard HTTP status code.

```TypeScript
enum StatusCode {
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  URITooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  ImATeapot = 418,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UnorderedCollection = 425,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  BandwidthLimitExceeded = 509,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
}
```

## Factories

To save a bit typing, you might use factory functions which are named after `new<StatusCode name>Error()`.

```TypeScript
import { newForbiddenError } from '@selfage/http_error';

throw newForbiddenError('Not allowed.', new Error('Invalid'));
```

## Client vs server error

Client error is `HttpError` with 4xx status code suggesting the error should be fixed on the client-side. And server error on the other hand is with 5xx status code indicating a bug on the server-side. We provide simple helper functions to tell them apart.

```TypeScript
import {
  isClientError,
  isClientErrorCode,
  isServerError,
  isServerErrorCode
} from '@selfage/http_error';

let e = newForbiddenError('Not allowed.');
isClientError(e); // true
isClientErrorCode(e.statusCode); // true
isServerError(e); // false
isServerErrorCode(e.statusCode); // false
```

## Minification & subclass

See [@selfage/nested_error#Minification](https://github.com/selfage/nested_error#minification).

## Compatibility

See [@selfage/nested_error#ompatibility](https://github.com/selfage/nested_error#compatibility).
