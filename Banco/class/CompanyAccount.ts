import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (emprestimo: number): void => {
    console.log('Voce pegou um empréstimo de ' + emprestimo)
  }
}
