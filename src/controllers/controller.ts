import { Service } from '../services/service';
import { View } from '../view/viewController';
import { URL, MSGFINISH } from '../assets/constants/constants';

export class Controller {
  service: Service;
  view: View;

  constructor(service: Service, view: View) {
    this.service = service;
    this.view = view;
    this.service.getWords(URL).then(() => {
      this.startGame();
    });
  }

  startGame(): void {
    this.view.addEvents(this.service.isCodeLetter, this.check);
    this.view.printWord(this.service.getHiddenWord());
  }

  check = (letter: string): void => {
    this.service.isLetterInWord(letter)
      ? this.correctLetter(letter)
      : this.wrongLetter();
  };

  correctLetter(letter: string): void {
    this.service.pushLetterPressed(letter);
    this.view.printWord(this.service.getHiddenWord());
    if (this.service.checkWin()) this.view.finishGame(MSGFINISH.WIN);
  }

  wrongLetter(): void {}
}
