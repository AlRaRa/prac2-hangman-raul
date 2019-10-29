export class Service {
  words: string[];
  wordSelected: string;
  life: number;
  letterPressed: string[];

  getWords(url: string): Promise<JSON> {
    return fetch(url).then(response => response.json());
  }

  initGame(): void {
    this.life = 7;
    this.wordSelected = this.getRandomWord();
    this.letterPressed = [];
  }

  getRandomWord(): string {
    return this.words.sort(() => Math.random() - 0.5)[0];
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

  pushLetterPressed(letter: string): void {
    if (!this.isLetterPushed(letter)) this.letterPressed.push(letter);
  }

  isLetterPushed(letter: string): boolean {
    return this.letterPressed.some(arrayLetter =>
      this.isLettersEquals(letter, arrayLetter)
    );
  }
  isLettersEquals(letter: string, letter2: string): boolean {
    return letter.toLowerCase() === letter2.toLowerCase();
  }

  checkWin(): boolean {
    this.getGuessedWord().toLowerCase() === this.wordSelected.toLowerCase();
    return false;
  }

  getGuessedWord(): string {
    return this.getHiddenWord()
      .split(' ')
      .join('');
  }

  isCodeLetter(code: number): boolean {
    return (97 <= code && code <= 122) || code === 121;
  }

  lossLife(): boolean {
    --this.life;
    return this.life === 0;
  }
}
