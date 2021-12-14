import { isPositive } from "../../src/func/01";
describe('isPositive', () => {
  it('n = 0', () => {
    expect(isPositive(0)).toEqual(false);
  });
  it('n > 0', () => {
    expect(isPositive(10)).toEqual(true);
  });
  it('n < 0', () => {
    expect(isPositive(-10)).toEqual(false);
  });
});