import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Dylan', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
peopleAccount.withdraw(5)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
companyAccount.withdraw(5)
companyAccount.getLoan(5000)
console.log(companyAccount)