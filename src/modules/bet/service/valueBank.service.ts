import { getRepository } from 'typeorm';
import { Bank } from '../../bank/typeorm/entities/Bank';

export class ValueBank {
  //Pegar o valor da banca
  async find(idUser: number): Promise<any> {
    const findValueBank = getRepository(Bank);
    const resultValueBank = await findValueBank.findOne(idUser);
  }
  async primeiraAposta(idUser: number, prohibited: number): Promise<any> {
    const bank = getRepository(Bank);
    const resultValueBank = await bank.findOne(idUser);

    //Prohibited --> Entrada

    const value = resultValueBank?.balance;
    if (!value) throw new Error('Valeu not found');

    let aposta: boolean = true;

    //Verificar se saldo é maior que 0
    if (value > 0) {
      //verificar se a entrada e menor que o saldo.
      if (prohibited > value) {
        throw new Error('Insufficient funds'); //Saldo insuficiente;
      }
      const result = prohibited + value;
    } else {
      const result = prohibited - value;
    }
  }
}
