import React from 'react';
import { Headers, data } from '../Generics/ArrayMethods';
import { TableHeaderColumn } from './TableHeaderColumn';
import { TableDataColumn } from './TableDataColumn';
import PopUpModal from '../Generics/popUpModal';
import { Search } from './searchComponent';


class TableCreation extends React.Component {

	state = {
		slicedData: data.slice(0, 5),
		deleteRowIndex: '',
		arrowIconChange: true,
		editAndDeleteIconChange: '',
		deleteMethodChange: false,
		cancelButton: true,
		searchValue: ''
	};

	handlePagination = (start, rowsPerPage) => {
		this.setState({ slicedData: data.slice(start, start + rowsPerPage) });
	};

	arrow = () => {
		this.setState({
			arrowIconChange: !this.state.arrowIconChange
		})
	}

	deleteIconPopUpModal = (i) => {
		this.setState({
			deleteMethodChange: true,
			deleteRowIndex: i,
			cancelButton: true
		})
	}

	deleteRow = () => {
		let storeArr = [...this.state.slicedData];
		let index = this.state.deleteRowIndex;
		storeArr.splice(index, 1);
		this.setState({
			slicedData: storeArr,
			deleteMethodChange: false
		});
	}

	cancel = () => {
		this.setState({
			cancelButton: false
		})
	}

	search = (e) => {
		this.setState({
			searchValue: e.target.value.substr(0, 20)
		})
	}

	render() {

		let filterData = data.filter(cloumnData => {
			return cloumnData.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1;
		})

		return (
			<div className="TableContainer">
				<Search search={this.search} value={this.state.searchValue} />
				<div className="TableCreation">
					<table> 
						<TableHeaderColumn Headers={Headers} arrowIconChange={this.state.arrowIconChange} arrow={this.arrow} />
						<tbody>
							{filterData.slice(0,5).map((data, i) => {
								return (
									<TableDataColumn data={data} key={i} Edit={this.Edit} Delete={this.deleteIconPopUpModal.bind(this, i)} />
								)
							})}
						</tbody> 
					</table>
				</div>
				{
					this.state.deleteMethodChange ?
						<PopUpModal cancelButton={this.state.cancelButton} deleteRow={this.deleteRow} cancel={this.cancel} /> : null
				}
			</div>
		);
	}
}
export default TableCreation;	