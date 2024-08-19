import { Response } from 'express';
import HttpStatusCode from './HttpStatusCode';

export default function ResponseCreate(res: Response, body: any) {
  const status = HttpStatusCode.CREATED;
  const message = 'Criado com sucesso!';
  const error = false;

  return res.status(status).send({
    status, message, error, body,
  });
}
