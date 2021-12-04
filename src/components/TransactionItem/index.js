import './index.css'

const TransactionItem = props => {
  const {each, onDeleteOneImg} = props
  const {id, titleone, Amountone, TypeOne} = each

  const ondeleteImgbtn = () => {
    onDeleteOneImg(id)
  }

  return (
    <li className="list-items">
      <p className="titleparagraph">{titleone}</p>
      <p className="titleparagraph">{Amountone}</p>
      <p className="titleparagraph">{TypeOne}</p>
      <button
        type="button"
        className="deletebutton"
        onClick={ondeleteImgbtn}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteimageone"
        />
      </button>
    </li>
  )
}

export default TransactionItem
