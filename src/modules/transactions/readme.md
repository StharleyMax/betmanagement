#  TRANSACTIONS

* ## schema
---

```json
{
  "id": 1,
  "userId": 2,
  "bankId": 1,
  "oldBalance": 15.5,
  "transaction": {
    "name": "deposit",
    "price": "10"
    },

}
```

 ## SQL
---

  ```sql
  CREATE TYPE  type_transaction AS ENUM ('deposit', 'withdraw');

  CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    bank_id INT NOT NULL,
    old_balance FLOAT NOT NULL,
    type type_transaction NOT NULL,
    price FLOAT NOT NULL,
    CONSTRAINT fk_user_transaction
      FOREIGN KEY(user_id)
        REFERENCES users(id),
    CONSTRAINT fk_bank_transaction
      FOREIGN KEY(bank_id)
        REFERENCES bank(id)
  );
  ```


  ## USECASES
 ---

- []  Cadastrar TRANSACTION
  - [] Validar se user e bank estão ativos
  - [] Se type for "SAQUE" verificar se possui esse saldo na "BANCA"
  - [] Buscar saldo(BALANCE) anterior da "BANCA" e registrar no old_balance
  - [] Atualizar saldo(balance) da "BANCA"

- [] Update TRANSACTION
  - [] Só é possivel atualizar a ultima "TRANSAÇÃO"
  - [] Se type for "SAQUE" verificar se possui esse saldo na "BANCA"
  - [] old_balance não é pra ser atualizado
  - [] Atualizar balance da "BANCA"

- [] Show TRANSACTION
  - [] Validar se a transaction existe

- [] Buscar todas TRANSACTIONS
  - [] trazer todas a "TRANSAÇÕES" de cada "BANCA" do usuario logado

- [] Delete Transaction
  - [] Só é possivel deletar a ultima transação. não precisa de softDelete
