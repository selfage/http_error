export enum StatusCode {
  Internal = 500,
  Unauthenticated = 401,
  Unauthorized = 403,
}

export class HttpError extends Error {
  constructor(public statusCode: number, message: string, public cause?: any) {
    super(message);
  }
}

export function newInternalError(message: string, err?: any): HttpError {
  return new HttpError(StatusCode.Internal, message, err);
}

export function newUnauthenticatedError(
  message: string,
  err?: any
): HttpError {
  return new HttpError(StatusCode.Unauthenticated, message, err);
}
