// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from './components/DenominationItem/index.js'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
    return (
      <div className="outer">
        <div className="inner">
          <div className="name">
            <p className="para1">S</p>
            <p className="para2">Sara Willims</p>
          </div>
          <div className="balance">
            <p>Your Balance</p>
            <h1>{} Rupees</h1>
          </div>
          <h1>Withdraw</h1>
          <p className="summ">Choose sum in rupees</p>
          <DenominationItem denominationsList={denominationsList} />
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
