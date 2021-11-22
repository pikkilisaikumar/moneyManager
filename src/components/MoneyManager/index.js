import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// const listType = [
//   {
//     id: uuidv4(),
//     titleone: 'salary',
//     Amountone: 20000,
//     Type: 'income',
//   },
// ]

class MoneyManager extends Component {
  state = {
    listType: [],
    title: '',
    amount: '',
    Type: transactionTypeOptions[0].optionId,
  }

  onSubmitEventTriggred = event => {
    event.preventDefault()
    const {title, amount, Type} = this.state
    const listNew = {
      id: uuidv4(),
      titleone: title,
      Amountone: amount,
      TypeOne: Type,
    }
    console.log(listNew)
    this.setState(prevState => ({
      listType: [...prevState.listType, listNew],
      title: '',
      amount: '',
      Type: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event1 => {
    this.setState({amount: event1.target.value})
  }

  onChangeSelectElement = event2 => {
    this.setState({Type: event2.target.value})
  }

  getIncomeAmount = () => {
    const {listType} = this.state
    let income = 0
    listType.forEach(each => {
      if (each.TypeOne === transactionTypeOptions[0].optionId) {
        income += parseInt(each.Amountone)
      }
    })
    return income
  }

  getExpensesAmount = () => {
    const {listType} = this.state
    let expenses = 0
    listType.forEach(each => {
      if (each.TypeOne === transactionTypeOptions[1].optionId) {
        expenses += parseInt(each.Amountone)
      }
    })
    return expenses
  }

  getTotalAmount = () => {
    const {listType} = this.state
    let income = 0
    let expenses = 0
    let total = 0
    listType.forEach(each => {
      if (each.TypeOne === transactionTypeOptions[0].optionId) {
        income += parseInt(each.Amountone)
      } else {
        expenses += parseInt(each.Amountone)
      }
    })

    total = income - expenses
    return total
  }

  //   getTotalAmount = () => {
  //     const {listType} = this.state
  //     let totalAmount = 0
  //     const incomeAmount = 0
  //     const expensesAmount = 0
  //     totalAmount = incomeAmount - expensesAmount
  //     return totalAmount
  //     // for (let each of listType) {
  //     //   if (each.TypeOne === transactionTypeOptions[0].optionId) {
  //     //     incomeAmount += parseInt(each.Amountone)
  //     //   } else {
  //     //     expensesAmount += parseInt(each.Amountone)
  //     //   }
  //     // }
  //   }

  onDeleteOneImg = id => {
    const {listType} = this.state
    const dataOne = listType.filter(eachOne => eachOne.id !== id)
    this.setState({listType: dataOne})
  }

  render() {
    const {listType, Type, amount, title} = this.state

    const incomeamount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
    const totalAmount = this.getTotalAmount()
    return (
      <div className="background">
        <div className="firstcontainer">
          <h1>Hi,Richards</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <MoneyDetails
          totalAmount={totalAmount}
          incomeamount={incomeamount}
          expensesAmount={expensesAmount}
        />
        <div className="lastcontainerone">
          <div className="addtransactioncontainer">
            <h1 className="addtransactionheading">Add Transaction</h1>
            <form onSubmit={this.onSubmitEventTriggred}>
              <div>
                <label htmlFor="titleinput">TITLE</label>
                <br />
                <input
                  type="text"
                  id="titleinput"
                  onChange={this.onChangeTitleInput}
                  value={title}
                />
              </div>
              <div className="amountcontainer">
                <label htmlFor="amountinput">AMOUNT</label>
                <br />
                <input
                  type="text"
                  id="amountinput"
                  onChange={this.onChangeAmountInput}
                  value={amount}
                />
              </div>
              <div className="amountcontainer">
                <label htmlFor="type">TYPE</label>
                <br />
                <select id="type" onChange={this.onChangeSelectElement}>
                  {transactionTypeOptions.map(each => (
                    <option value={each.optionId} key={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="addbuttonone">
                Add
              </button>
            </form>
          </div>
          <div className="addtransactioncontainer">
            <h1>History</h1>
            <div className="titleamounttypecontainer">
              <p className="titleparagraph">Title</p>
              <p className="titleparagraph">Amount</p>
              <p className="titleparagraph">Type</p>
            </div>
            <ul>
              {listType.map(each => (
                <TransactionItem
                  each={each}
                  key={each.id}
                  onDeleteOneImg={this.onDeleteOneImg}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
