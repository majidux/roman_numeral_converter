import { romanKeys } from './romanDigits';

interface toRomanProps {
  num: number;
}

interface fromRomanProps {
  num: string;
}

const ERROR_MESSAGE = 'Number is too big:';

export const RomanNumerals = {
  toRoman: ({ num }: toRomanProps): string => {
    let str = '';
    try {
      for (const key of Object.keys(romanKeys)) {
        const q = Math.floor(num / romanKeys[key]);
        num -= q * romanKeys[key];
        str += key.repeat(q);
      }
    } catch (error) {
      return `${ERROR_MESSAGE} ${error}`;
    }
    return str;
  },
  fromRoman: ({ num }: fromRomanProps): number | string => {
    let accelerator = 0;
    try {
      for (let i = 0; i < num.length; i++) {
        const currentNumber = romanKeys[num[i]];
        const nextNumber = romanKeys[num[i + 1]];
        if (!currentNumber) {
          return 'Please enter valid roman number';
        }
        currentNumber < nextNumber
          ? (accelerator -= currentNumber)
          : (accelerator += currentNumber);
      }
    } catch (error) {
      return `${ERROR_MESSAGE} ${error}`;
    }
    return accelerator;
  },
};
