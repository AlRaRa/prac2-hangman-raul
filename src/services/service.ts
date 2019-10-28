import { resolve } from 'url';

export class Service {
  words: string[];
  wordSelected: string;
  life: number;
  letterPressed: string[];

  /*   getWords(): Promise {
    return new Promise(resolve => resolve);
  } */
  initGame(): void {}
  getRamdomWord(): string {
    return '';
  }

  getHiddenWord(): string {
    const stringLetterRegex = `[^${this.letterPressed.join('')}]`;
    return this.wordSelected
      .replace(new RegExp(stringLetterRegex, 'gi'), '_')
      .split('')
      .join(' ');
  }
  isLetterInWord(letter: string): boolean {
    return this.wordSelected.toLowerCase().search(letter.toLowerCase()) > -1;
  }

  checkWin(): boolean {
    return false;
  }
}
