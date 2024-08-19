import { Response, Request } from 'express';
import ResponseNotFound from '../responses/ResponseNotFound';

export default function NotFoundErrorMiddleware(req: Request, res: Response) {
  return ResponseNotFound(res);
}
