

export enum StandartMessages {
  formError = 'Formulário preenchido incorretamente ou com campos faltando preencher.',
}

export class ResponseMessage {
  code!: string;
  status!: string;
  time!: string;
  message!: string;
}
