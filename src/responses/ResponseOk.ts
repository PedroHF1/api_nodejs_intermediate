import { Response } from 'express';
import HttpStatusCode from './HttpStatusCode';

export default function ResponseOk(res: Response, body: any) {
  const status = HttpStatusCode.OK;
  const message = 'Ok!';
  const error = false;

  return res.status(status).send({
    status, message, error, body,
  });
}
