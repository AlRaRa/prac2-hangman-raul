import { Service } from '../services/service';
import { View } from '../view/viewController';

export class Controller {
  service: Service;
  view: View;

  constructor(service: Service, view: View) {
    this.service = service;
    this.view = view;
  }
}
