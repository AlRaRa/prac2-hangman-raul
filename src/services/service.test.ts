import { Service } from './service';

let service = new Service();
service.wordSelected = 'casa';

describe('#isLetterInWord', () => {
  describe('should be true', () => {
    test.each`
      letter
      ${'A'}
      ${'a'}
      ${'c'}
    `(
      `when the letter: "$letter" is in the word ${service.wordSelected}`,
      ({ letter }) => {
        expect(service.isLetterInWord(letter)).toBeTruthy();
      }
    );
  });

  describe('should be false', () => {
    test.each`
      letter
      ${' '}
      ${'P'}
      ${'_'}
    `(
      `when the letter: "$letter" isn't in the word: ${service.wordSelected}`,
      ({ letter }) => {
        expect(service.isLetterInWord(letter)).toBeFalsy();
      }
    );
  });
});

describe('#checkWin', () => {
  describe('should be true', () => {
    test.each`
      letters
      ${['A', 'c', 's']}
      ${['a', 'c', 's']}
      ${['A', 'C', 'S']}
    `(
      `when the letters array: "$letters" are all the letters of word: ${service.wordSelected}`,
      ({ letters }) => {
        service.letterPressed = letters;
        expect(service.checkWin()).toBeTruthy();
      }
    );
  });

  describe('should be false', () => {
    test.each`
      letters
      ${['A', 'c']}
      ${['A', 'z']}
      ${['b', 'z']}
    `(
      `when the letters array: "$letters" aren't all the letter of word: ${service.wordSelected}`,
      ({ letters }) => {
        service.letterPressed = letters;
        expect(service.checkWin()).toBeFalsy();
      }
    );
  });
});

describe('#getHiddenWord', () => {
  describe('should be well', () => {
    test.each`
      letters       | expected
      ${['A', 'c']} | ${'c a _ a'}
      ${['A', 'z']} | ${'_ a _ a'}
      ${['b', 'z']} | ${'_ _ _ _'}
    `(
      `when the letter of array: "$letters" that it isn't in the word change to "_" and add " " between letter of "${service.wordSelected}"`,
      ({ letters, expected }) => {
        service.letterPressed = letters;
        expect(service.getHiddenWord()).toEqual(expected);
      }
    );
  });

  /*   describe('should be bad', () => {
    test.each`
      letters       | expected
      ${['A', 'c']} | ${'c a _ a'}
      ${['A', 'z']} | ${'_ a _ a'}
      ${['b', 'z']} | ${'_ _ _ _'}
    `(
      `when the letter of array: "$letters" that it isn't in the word change to "_" and add " " between letter: ${service.wordSelected}`,
      ({ letters, expected }) => {
        service.letterPressed = letters;
        expect(service.getHiddenWord()).not.toEqual(expected);
      }
    );
  }); */
});
