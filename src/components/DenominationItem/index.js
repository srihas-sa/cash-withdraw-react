// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
      
    render(){
        const {denominationsList}=this.props
        return(
            <div className="roww">
                <button onClick="ondelete50" className="button"></button>
                <button onClick="ondelete100" className="button" ></button>
      
            </div>
            <div>
                 <button onClick="ondelete200" className="button"></button>
                <button onClick="ondelete500" className="button"></button>

            </div>
        )
    }
}

export default DenominationItem