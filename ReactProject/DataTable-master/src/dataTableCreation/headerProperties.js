import React from 'react';
import {HeaderInformationFirstColumn,HeaderInformationThirdColumn} from './headerInformationColumn';
import HeaderInformationSecondColumn from './headerInformationColumn';
import { Icon } from 'semantic-ui-react';

export default class HeaderCreation extends React.Component {

    state = {
        ReceiveDate: '11/06/2019',
        DataEntry: '',
        editButton: true
    }

    handlePagination = (e) => {
        this.setState({
            DataEntry: e.target.value
        });
    };

    Edit = () => {
        this.setState({
            editButton: false
        })
    }

    render() {
        return (
            <div className="headerCreation">

                {/* popUpModal Functional Component call */}

                {/* {this.state.editButton ? <PopUpModal/> : null} */}
                
                <div className="headerIconAndButtonCreation">
                    <span className="headingSpan">Data Table List</span>
                    <Icon className="EditIcon" name="edit outline" color="green" size='large'></Icon>
                    <button className="editButton" onClick={this.Edit} >Edit</button>
                </div>
                <div className="headerInformationText">
                    <HeaderInformationFirstColumn ReceiveDate={this.state.ReceiveDate}  />
                    <HeaderInformationSecondColumn ReceiveDate={this.state.ReceiveDate} />
                    <HeaderInformationThirdColumn ReceiveDate={this.state.ReceiveDate}  />
                </div>
                <hr />
            </div>
        )
    }
}
