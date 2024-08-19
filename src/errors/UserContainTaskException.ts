import HttpStatusCode from '../responses/HttpStatusCode';
import HttpException from './HttpException';

class UserContainTaskException extends HttpException {
  constructor() {
    super(HttpStatusCode.CONFLICT, 'Impossível excluir, pois o usuário tem tarefas relacionadas!');
  }
}

export default UserContainTaskException;
