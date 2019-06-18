import React from 'react';
import { Headers, Data } from '../Generics/ArrayMethods';
import { TableHeaderColumn } from './TableHeaderColumn';
import { TableDataColumn } from './TableDataColumn';
import PopUpModal from '../Generics/popUpModal';


class TableCreation extends React.Component {

	state = {
		slicedData: Data.slice(0, 5),
		arrowIconChange: true,
		editAndDeleteIconChange: '',
		DeleteMethodChange: false
	};

	handlePagination = (start, rowsPerPage) => {
		this.setState({ slicedData: Data.slice(start, start + rowsPerPage) });
	};

	arrow = () => {
		this.setState({
			arrowIconChange: !this.state.arrowIconChange
		})
	}

	DeleteIconPopUpModal = (e) => {
		this.setState({
			DeleteMethodChange: !this.state.DeleteMethodChange
		}, () => {
			console.log("state" + this.state.DeleteMethodChange)
		})
	}

	DeleteRow = () => {
		console.log(Data.key)
	}

	render() {
		return (
			<div className="TableContainer">
				<div className="TableCreation">
					<table>
						<TableHeaderColumn Headers={Headers} arrowIconChange={this.state.arrowIconChange} arrow={this.arrow} />
						<TableDataColumn slicedData={this.state.slicedData} Edit={this.Edit} Delete={this.DeleteIconPopUpModal} />
					</table>
				</div>
				{
				this.state.DeleteMethodChange ?
					<PopUpModal DeleteMethodChange={this.state.DeleteMethodChange} DeleteRow={this.DeleteRow} /> : null
				} 
			</div>
		);
	}
}
export default TableCreation;	