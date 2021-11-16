import { isBalanced } from '../BalancedParentheses';

describe('isBalanced', () => {

  test('should return true', () => {
    const input = '(()(())())';

    const result = isBalanced(input);

    expect(result).toBe(true);
  });

  test('should return false', () => {
    const input = '(()';

    const result = isBalanced(input);

    expect(result).toBe(false);
  });

  test('should return false', () => {
    const input = '())()(';

    const result = isBalanced(input);

    expect(result).toBe(false);
  });

  test('should return true', () => {
    const input = '(((()(())))())';

    const result = isBalanced(input);

    expect(result).toBe(true);
  });

  test('should return false', () => {
    const input = ')(';

    const result = isBalanced(input);

    expect(result).toBe(false);
  });

  test('should return true', () => {
    const input = '()';

    const result = isBalanced(input);

    expect(result).toBe(true);
  });

  test('should return false', () => {
    const input = '())';

    const result = isBalanced(input);

    expect(result).toBe(false);
  });


});