import { getRepository } from 'typeorm';
import { Bank } from '../../bank/typeorm/entities/Bank';
import { FindBankService } from '../../bank/services/FindBankService';
import { BetEntity } from '../typeorm/entities/bet.entities';
import { SportsEntity } from '@modules/sports/typeorm/entities/sports.entities';

export class ValueBank {
  async primeiraAposta(idUser: number, prohibited: number): Promise<any> {
    const bank = getRepository(Bank);
    const bet = getRepository(BetEntity);
    const findSports = await getRepository(SportsEntity).findOne({
      where: { id: idUser },
    });

    if (!findSports?.id) throw new Error('Sports not found. ValueBankService');
    const idSports = findSports?.id;

    //Pegar valor da banca na conta do usuário
    const resultValueBank = await bank.findOne(idUser);

    //Tradução.: prohibited --> Entrada

    //Trazendo o valor da banca e colocando na variável "value"
    const value = resultValueBank?.balance;
    if (!value) throw new Error('Valeu not found'); //Verificando se o valor foi encontrado.

    let aposta: boolean = true;

    const saveBet: any = { idUser, idSports };

    //Verificar se saldo é maior que 0
    if (value > 0 && aposta === true) {
      //Verificar se entrada é maior que o saldo
      if (prohibited > value) {
        throw new Error('Insufficient funds'); //Saldo insuficiente;
      }
      const result = prohibited + value;
      const resultBet = await bet.save(saveBet);
    } else {
      const result = prohibited - value;
    }
  }
}
