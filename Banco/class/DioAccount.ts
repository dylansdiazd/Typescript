export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (balance: number): void => {
    if(this.validateStatus()){
      this.balance = balance
      console.log('Voce depositou ' + balance)
    }
  }

  withdraw = (saque: number): void => {
    if(this.status === true && this.balance >= saque){
      this.balance = this.balance - saque
    console.log('Voce sacou ' + saque)
  console.log('Saldo restante ' + this.balance)}
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
