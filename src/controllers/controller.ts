import { Service } from '../services/service';
import { View } from '../view/viewController';
import { URL } from '../assets/constants/constants';

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

  startGame(): void {}
}
