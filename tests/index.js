import { describe, it } from 'mocha';
import 'chai/register-should';

describe('my-test', () => {
  it('should succeed', () => {
    function fib(n) {
      switch (n) {
        case 0:
          return 0;

        case 1:
          return 1;

        default:
          return fib(n - 1) + fib(n - 2);
      }
    }

    fib(10).should.equal(55);
  });
});
