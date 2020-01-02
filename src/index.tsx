import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {getData} from './helpers/mockedData'
import AppNavbar from './containers/appNavbar'

class App extends React.Component {
    state = {
        advisors : [
            {
                name: '',
                lastName: '',
                email: '',
                telephone: ''
            }
        ]
    }

    componentDidMount() {
        getData().then(data => {
            this.setState({advisors: data})
        })
    }

    render() {
    return (
    <div>
        { !!this.state.advisors && this.state.advisors.map((item,i) => <li key={i}>{i} {item.name}</li>)}
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
