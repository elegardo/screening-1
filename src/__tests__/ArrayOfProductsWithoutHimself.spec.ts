import { generate } from '../ArrayOfProductsWithoutHimself';

describe('generate', () => {

  test('should return correct array', () => {
    const input = [1,2,3,4];

    const result = generate(input);

    expect(result).toStrictEqual([24,12,8,6]);
  });

});