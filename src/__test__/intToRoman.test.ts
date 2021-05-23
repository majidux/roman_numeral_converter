import { RomanNumerals } from '../utils';

describe('Integer to Roman numeral test unit test', () => {
  it('expect 2008, toBe MMVIII', () => {
    const wrapper = RomanNumerals.toRoman({ num: 2008 });
    expect(wrapper).toBe('MMVIII');
  });
  it('expect 1990, toBe MCMXC', () => {
    const wrapper = RomanNumerals.toRoman({ num: 1990 });
    expect(wrapper).toBe('MCMXC');
  });
});
