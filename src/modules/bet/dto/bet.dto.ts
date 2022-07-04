/*
Registro das apostas
vai pegar o ID do Usuário, ID do Sport que fez a aposta.
create_at --> Data da Aposta
*/
export class BetDto {
  id: number;
  idUser: number;
  idSports: number;
  create_at: Date;
  update_at: Date;
}
