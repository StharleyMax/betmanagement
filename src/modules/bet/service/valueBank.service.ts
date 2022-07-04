import { getRepository } from 'typeorm';
import { Bank } from '../../bank/typeorm/entities/Bank';
import { FindBankService } from '../../bank/services/FindBankService';
import { BetEntity } from '../typeorm/entities/bet.entities';
import { SportsEntity } from '@modules/sports/typeorm/entities/sports.entities';

export class ValueBank {
  async primeiraAposta(idUser: number, prohibited: number): Promise<any> {
    const bank = getRepository(Bank);
    const bet = getRepository(BetEntity);
    const findSports = getRepository(SportsEntity);
    const restulSports = await findSports.findOne({ where: { id: idUser } });

    const resultValueBank = await bank.findOne(idUser);

    //Tradução.: prohibited --> Entrada

    const value = resultValueBank?.balance;
    if (!value) throw new Error('Valeu not found');

    let aposta: boolean = true;

    //Verificar se saldo é maior que 0
    if (value > 0) {
      //Verificar se entrada é maior que o saldo
      if (prohibited > value) {
        throw new Error('Insufficient funds'); //Saldo insuficiente;
      }
      const result = prohibited + value;
      const saveBet = bet.create({});
      await bet.save();
    } else {
      const result = prohibited - value;
    }
  }
}
