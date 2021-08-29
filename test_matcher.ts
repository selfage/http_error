import { HttpError } from "./error";
import {
  MatchFn,
  assert,
  assertThat,
  containStr,
  eq,
} from "@selfage/test_matcher";

export function eqHttpError(expected: HttpError): MatchFn<any> {
  return (actual) => {
    assert(actual instanceof HttpError, `to be an HttpError`, `${actual}`);
    assertThat(actual.status, eq(expected.status), `status code`);
    assertThat(actual.message, containStr(expected.message), `${actual.stack}`);
  };
}
