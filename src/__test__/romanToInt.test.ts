import { RomanNumerals } from '../utils';

describe('Roman to Integer numeral test unit test', () => {
  it('expect MMVIII toBe 2008', () => {
    const wrapper = RomanNumerals.fromRoman({ num: 'MMVIII' });
    expect(wrapper).toBe(2008);
  });
  it('expect MCMXC toBe 1992', () => {
    const wrapper = RomanNumerals.fromRoman({ num: 'MCMXC' });
    expect(wrapper).toBe(1990);
  });
});
