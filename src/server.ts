import App from './app';
import UserController from './controllers/UserController';
import TaskController from './controllers/TaskController';
import DashController from './controllers/DashController';

const app = new App([
  new UserController(),
  new TaskController(),
  new DashController(),
]);

app.listen(3333);
