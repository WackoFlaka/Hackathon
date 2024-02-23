import { AccountController } from "./controllers/AccountController.js";
import { ChickenController } from "./controllers/ChickenController.js";
import { MessageController } from "./controllers/MessageController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ChickenController],
    view: `app/views/ChickenView.html`
  },
  {
    path: '#/about',
    controllers: [MessageController],
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




