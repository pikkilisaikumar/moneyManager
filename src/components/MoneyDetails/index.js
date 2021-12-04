import './index.css'

const MoneyDetails = props => {
  const {Balance, Income, Expenses} = props

  return (
    <div className="overallmoneydetailscontainer">
      <div className="Yourbalancecontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balanceimage"
        />
        <div className="yourbalanceandrs">
          <p>Your Balance</p>
          <p testId="balanceAmount">RS {Balance} </p>
        </div>
      </div>
      <div className="Yourbalancecontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balanceimage"
        />
        <div className="yourbalanceandrs">
          <p>Your Income</p>
          <p testId="incomeAmount">RS {Income}</p>
        </div>
      </div>
      <div className="Yourbalancecontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balanceimage"
        />
        <div className="yourbalanceandrs">
          <p>Your Expenses</p>
          <p testId="expensesAmount">RS {Expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
