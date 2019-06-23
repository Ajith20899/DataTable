import React from 'react';
import { Headers, Data } from '../Generics/ArrayMethods';
import { TableHeaderColumn } from './TableHeaderColumn';
import { TableDataColumn } from './TableDataColumn';
import PopUpModal from '../Generics/popUpModal';
import { TablePagination } from 'react-md';

class TableCreation extends React.Component {
	constructor(props) { 
		super(props); 
		this.state = { 
			slicedData: Data.slice(0,10),
			arrowIconChange: true,
			editAndDeleteIconChange: '',
			DeleteMethodChange: false,
			deleteIndex: ''
		}; 
	} 

	handlePagination = (start, rowsPerPage) => {
		this.setState({ slicedData: Data.slice(start, start + rowsPerPage) });
	}

	arrow = () => {
		this.setState({
			arrowIconChange: !this.state.arrowIconChange
		})
	}

	DeleteIconPopUpModal = (index) => {
		this.setState({
			DeleteMethodChange: true,
			deleteIndex: index
		})
		console.log(index)
	}

	DeleteRow = (index) => {
		let Delete = [...this.state.slicedData];
		console.log(index + ' ' + this.state.slicedData)
		Delete.splice(this.state.deleteIndex, 1);
		this.setState({
			slicedData: Delete,
			DeleteMethodChange: false,
		})
	}

	cancel = () => {
		this.setState({
			DeleteMethodChange: false,
		})
	}

	render() {
		return (
			<div className="TableContainer">
				<div className="TableCreation">
					<table>
						<TableHeaderColumn Headers={Headers} arrowIconChange={this.state.arrowIconChange} arrow={this.arrow} />
						{this.state.slicedData.map((Data, index) => {
							return (
								<tbody>
									<TableDataColumn Data={Data} index={index} Edit={this.Edit} Delete={this.DeleteIconPopUpModal.bind(this, index)} />
								</tbody>
							)
						})}
					</table>
					<TablePagination className="TablePagination" rows={Data.length} rowsPerPageLabel={'Rows Per Page'} onPagination={this.handlePagination} />
					{this.state.DeleteMethodChange ?<PopUpModal
							cancel={this.cancel}
							Index={this.DeleteRow}
						/>
						: null
					}
				</div>
			</div>
		);
	} 
}
export default TableCreation; 
