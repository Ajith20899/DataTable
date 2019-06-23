import React from 'react';
import { Icon } from 'semantic-ui-react';

class PopUpModal extends React.Component {

    state = {
        InputMethod: true,
        cancelButton: true,
        GetInputValue: '',
    }

    getInput = (e) => {
        this.setState({
            GetInputValue: e.target.value
        }, () => {
            if (this.state.GetInputValue === 'CONFIRM') {
                this.setState({
                    InputMethod: false,
                })
                console.log(this.state.GetInputValue)
            }
            else {
                this.setState({
                    InputMethod: true,
                })
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.cancelButton ?
                    <div className="popUpModalCreation">
                        <div className="popUpModalInputAndButtonDivision">
                            <div className="cancelIconDivision">
                                <Icon name="cancel" size="large" className="cancelIcon" onClick={this.props.cancel} />
                            </div>
                            <div className="inputAndTextField">
                                <p>Please Type 'CONFIRM'...</p>
                                <input type="text" onChange={this.getInput} value={this.state.GetInputValue} />
                            </div>
                            <div className="CancelAndDeleteButton">
                                <button className="cancelButton" onClick={this.props.cancel}>Cancel</button>
                                {this.state.InputMethod ?
                                    <button className="deleteButton Disabled" disabled={this.props.disabled}>Delete</button> :
                                    <button className="deleteButton NonDisabled" onClick={this.props.Index} disabled={this.props.disabled}>Delete</button>}
                            </div>
                        </div>
                    </div> : null}
            </React.Fragment>
        )
    }
}

export default PopUpModal;