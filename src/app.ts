import './assets/style/main.css';
import { Controller } from './controllers/controller';
import { Service } from './services/service';
import { View } from './view/viewController';

const controller: Controller = new Controller(
  new Service(),
  new View(window.document)
);
