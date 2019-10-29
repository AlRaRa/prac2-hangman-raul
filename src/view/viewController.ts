export class View {
  view: Document;
  GUI: any;

  constructor(view: Document) {
    this.view = view;
    this.GUI = {};
  }

  addEvents(
    handlerIsCodeLetter: (code: number) => boolean,
    handlerCheck: (letter: string) => void
  ): void {
    this.view.addEventListener('keypress', event => {
      if (handlerIsCodeLetter(event.charCode)) handlerCheck(event.key);
    });
  }

  printWord(word: string): void {
    console.log(word);
  }

  printFail(fail: number): void {
    console.log('nº fail: ', fail);
  }

  finishGame(msg: string) {
    console.log(msg);
  }
}
