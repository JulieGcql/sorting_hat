import React, { Component } from 'react'
import Message from '../Components/Message'
import { connect } from 'react-redux';

const action = {
    type: 'UPDATE_CHOICE_WITH_MY_INDEX',
}


export class Result extends Component {

    componentDidMount = () => {
        setInterval(() => this.props.dispatch(action), 1000)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    {this.props.houses.map(house => <li key={house}>{house}</li>)}
                </ul>
                <Message />
            </div>
        )

    }

}
export default connect(store => store)(Result)