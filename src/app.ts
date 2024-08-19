import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Controller from './controllers/Controller';
import NotFoundErrorMiddleware from './middlewares/NotFoundErrorMiddleware';
import RunTimeErrorMiddleware from './middlewares/RunTimeErrorMiddleware';

dotenv.config();

class App {
public app: express.Application;

public constructor(controllers: Controller[]) {
  this.app = express();
  this.app.use(cors());

  this.initMongoose();
  this.connectDataBase();
  this.initExpressJson();
  this.initControllers(controllers);
  this.initNotFoundErrorMiddleware();
  this.initRunTimeErrorMiddleware();
}

private initMongoose(): void {
  mongoose.set('runValidators', true);
}

private connectDataBase(): void {
  const databaseUrl = process.env.DATABASE_URL;
  mongoose.connect(`${databaseUrl}`);
}

private initExpressJson(): void {
  this.app.use(express.json());
}

private initControllers(controllers: Controller[]): void {
  controllers.forEach((controller) => {
    this.app.use('/', controller.router);
  });
}

private initNotFoundErrorMiddleware() {
  this.app.all('*', NotFoundErrorMiddleware);
}

private initRunTimeErrorMiddleware() {
  this.app.use(RunTimeErrorMiddleware);
}

public listen(port: number): void {
  this.app.listen(port, () => {
    console.log(`Aplicação iniciada na porta: ${port}`);
  });
}
}

export default App;
