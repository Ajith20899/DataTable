import React from 'react';
import { Icon } from 'semantic-ui-react';

class PopUpModal extends React.Component {

    state = {
        InputMethod: true,
        GetInputValue: ''
    }

    getInput = (e) => {
        this.setState({
            GetInputValue: e.target.value
        }, () => {
            if (this.state.GetInputValue === 'confirm') {
                this.setState({
                    InputMethod: false,
                })
            }
            else {
                this.setState({
                    InputMethod: true
                })
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.props.cancelButton ?
                    <div className="popUpModalCreation">
                        <div className="popUpModalInputAndButtonDivision">
                            <div className="cancelIconDivision">
                                <p>edit block public access (bucket settings)</p>
                                <span onClick={this.props.cancel} className="cancelIcon" >+</span>
                            </div>
                            <div className="inputAndTextField">
                                <div className="DeletePara">
                                    <div className="deleteEmptyPara"></div>
                                    <p>Update the block public access (bucket settings) will affect the bucket
                                        and all objects within. This may result in some objects becoming public.
                                </p>
                                </div>
                                <p className="deleteConfirmText">
                                    To confirm the settings, type <i>confirm</i> in the field.
                                </p>
                                <input type="text" onChange={this.getInput} value={this.state.GetInputValue} />

                                <div className="CancelAndDeleteButton">
                                    <button className="cancelButton" onClick={this.props.cancel}>Cancel</button>
                                    {this.state.InputMethod ?
                                        <button className="deleteButton Disabled" disabled={true}>Delete</button> :
                                        <button className="deleteButton NonDisabled" onClick={this.props.deleteRow} disabled={false}>Delete</button>}
                                </div>
                            </div>
                        </div>
                    </div> : null}
            </React.Fragment>
        )
    }
}

export default PopUpModal;
