#  TRANSACTIONS

* ## schema
---

```json
{
  "id": 1,
  "user_id": 2,
  "bank_id": 1,
  "old_balance": 15.5,
  "type": "deposit",
  "price": 10,
  "created_at": "2022-03-11 16:55:30.447715",
  "updated_at": "2022-03-13 02:17:00.447715",
  "deleted_at": "2022-03-18 11:05:30.447715"
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
    created_at timestamp default now(),
    updated_at timestamp default now(),
    deleted_at timestamp,
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
  - [] Só é possivel deletar a ultima transação.
