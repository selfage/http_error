import { NestedError } from "@selfage/nested_error";

export enum StatusCode {
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

export class HttpError extends NestedError {
  public status = this.statusCode;

  constructor(public statusCode: number, message: string, public cause?: any) {
    super("HttpError", message, cause);
    this.stack = statusCode + " " + this.stack;
  }
}

export function isClientError(httpError: HttpError): boolean {
  return isClientErrorCode(httpError.statusCode);
}

export function isClientErrorCode(code: StatusCode): boolean {
  return code < 500;
}

export function isServerError(httpError: HttpError): boolean {
  return isServerErrorCode(httpError.statusCode);
}

export function isServerErrorCode(code: StatusCode): boolean {
  return code >= 500;
}

export function newBadRequestError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.BadRequest, message, cause);
}

export function newUnauthorizedError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.Unauthorized, message, cause);
}

export function newPaymentRequiredError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.PaymentRequired, message, cause);
}

export function newForbiddenError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.Forbidden, message, cause);
}

export function newNotFoundError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.NotFound, message, cause);
}

export function newMethodNotAllowedError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.MethodNotAllowed, message, cause);
}

export function newNotAcceptableError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.NotAcceptable, message, cause);
}

export function newProxyAuthenticationRequiredError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.ProxyAuthenticationRequired, message, cause);
}

export function newRequestTimeoutRequiredError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.RequestTimeout, message, cause);
}

export function newConflictError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.Conflict, message, cause);
}

export function newGoneError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.Gone, message, cause);
}

export function newLengthRequiredError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.LengthRequired, message, cause);
}

export function newPreconditionFailedError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.PreconditionFailed, message, cause);
}

export function newPayloadTooLargeError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.PayloadTooLarge, message, cause);
}

export function newURITooLongError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.URITooLong, message, cause);
}

export function newUnsupportedMediaTypeError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.UnsupportedMediaType, message, cause);
}

export function newRangeNotSatisfiableError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.RangeNotSatisfiable, message, cause);
}

export function newExpectationFailedError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.ExpectationFailed, message, cause);
}

export function newImATeapotError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.ImATeapot, message, cause);
}

export function newMisdirectedRequestError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.MisdirectedRequest, message, cause);
}

export function newUnprocessableEntityError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.UnprocessableEntity, message, cause);
}

export function newLockedError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.Locked, message, cause);
}

export function newFailedDependencyError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.FailedDependency, message, cause);
}

export function newUnorderedCollectionError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.UnorderedCollection, message, cause);
}

export function newUpgradeRequiredError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.UpgradeRequired, message, cause);
}

export function newPreconditionRequiredError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.PreconditionRequired, message, cause);
}

export function newTooManyRequestsError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.TooManyRequests, message, cause);
}

export function newRequestHeaderFieldsTooLargeError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.RequestHeaderFieldsTooLarge, message, cause);
}

export function newUnavailableForLegalReasonsError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.UnavailableForLegalReasons, message, cause);
}

export function newInternalServerErrorError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.InternalServerError, message, cause);
}

export function newNotImplementedError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.NotImplemented, message, cause);
}

export function newBadGatewayError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.BadGateway, message, cause);
}

export function newServiceUnavailableError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.ServiceUnavailable, message, cause);
}

export function newGatewayTimeoutError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.GatewayTimeout, message, cause);
}

export function newHTTPVersionNotSupportedError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.HTTPVersionNotSupported, message, cause);
}

export function newVariantAlsoNegotiatesError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.VariantAlsoNegotiates, message, cause);
}

export function newInsufficientStorageError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.InsufficientStorage, message, cause);
}

export function newLoopDetectedError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.LoopDetected, message, cause);
}

export function newBandwidthLimitExceededError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(StatusCode.BandwidthLimitExceeded, message, cause);
}

export function newNotExtendedError(message: string, cause?: any): HttpError {
  return new HttpError(StatusCode.NotExtended, message, cause);
}

export function newNetworkAuthenticationRequiredError(
  message: string,
  cause?: any
): HttpError {
  return new HttpError(
    StatusCode.NetworkAuthenticationRequired,
    message,
    cause
  );
}
