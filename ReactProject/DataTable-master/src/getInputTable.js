import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
// import { Icon } from 'semantic-ui-react';

class GetInputTable extends React.Component {

    state = {
        userName: '',
        emailValue: '',
        passwordValue: '',
        mobileNumber : '',
        city : ''
    }

    render() {
        return (
            <div className="getInputTableCreation">
                <form>
                    <div>
                    <p className="heading"> username </p>
                    <input className="input" type="text" value={this.state.userName} />
                    </div>
                    <div>
                    <p className="heading"> Email </p>
                    <input className="input" type="email" value={this.state.emailValue} />
                    </div>
                    <div>
                    <p className="heading"> Password </p>
                    <input className="input" type="Password" value={this.state.passwordValue} />
                    </div>
                    <div>
                    <p className="heading"> mobile no </p>
                    <input className="input" type="text" value={this.state.mobileNumber} />
                    </div>
                    <div>
                    <p className="heading"> city </p>
                    <input className="input" type="text" value={this.state.city} />
                    </div>
                    <button type="submit"> submit </button>
                </form>
            </div>
        )
    }
}

export default GetInputTable;