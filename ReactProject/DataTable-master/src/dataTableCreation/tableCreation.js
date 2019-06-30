import React from 'react';
import { Headers, data } from '../Generics/ArrayMethods';
import { TableHeaderColumn } from './TableHeaderColumn';
import { TableDataColumn } from './TableDataColumn';
import PopUpModal from '../Generics/popUpModal';
import { Search } from './searchComponent';
import { EditPopUpModal } from './editPopUpModal';


class TableCreation extends React.Component {

	state = {
		filterData: data,
		RowIndex: '',
		deleteMethodChange: false,
		editButton: false,
		cancelButton: true,
		searchValue: '',
		email: '',
		phoneNo: '',
	};

	deleteIconPopUpModal = (i) => {
		this.setState({
			deleteMethodChange: true,
			RowIndex: i,
			cancelButton: true
		})
	}

	deleteRow = () => {
		let storeArr = [...this.state.filterData];
		let index = this.state.RowIndex;
		storeArr.splice(index, 1);
		this.setState({
			filterData: storeArr,
			deleteMethodChange: false
		},()=>console.log(this.state.filterData));
	}

	edit = (i) => {
		this.setState({
			editButton: true,
			RowIndex: i,
			email: this.state.filterData[i].email,
			phoneNo: this.state.filterData[i].phoneNo
		})
	}

	cancel = () => {
		this.setState({
			cancelButton: false,
			editButton: false
		})
	}

	search = (e) => {
		this.setState({
			searchValue: e.target.value.substr(0, 20)
		})
	}

	getEmail = (e) => {
		this.setState({
			email: e.target.value
		})
	}

	getPhoneNo = (e) => {
		this.setState({
			phoneNo: e.target.value
		})
	}

	update = () => {
		let filter = this.state.filterData;
		filter[this.state.RowIndex].email = this.state.email;
		filter[this.state.RowIndex].phoneNo = this.state.phoneNo;
		if( this.state.email === '' && this.state.email === null ) {
			return false 
		}
		else {
			this.setState({
				filterData : filter,
				editButton: false
			})
		}
	}

	render() {
		let filterData = this.state.filterData.filter(cloumnData => {
			return cloumnData.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1;
		})

		return (
			<div className="TableContainer">
				<Search search={this.search} value={this.state.searchValue} />
				<div className="TableCreation">
					<table>
						<TableHeaderColumn Headers={Headers} arrowIconChange={this.state.arrowIconChange} />
						<tbody>
							{filterData.map((data, i) => {
								return (
									<TableDataColumn data={data}
										key={i} edit={this.edit.bind(this, data.id - 1)} Delete={this.deleteIconPopUpModal.bind(this, data.id - 1)} />
								)
							})}
						</tbody>
					</table>
				</div>
				{this.state.editButton ?
					<EditPopUpModal editButton={this.state.editButton}
						update={this.update}
						cancel={this.cancel}
						Data={this.state.filterData}
						Email={this.state.email}
						PhoneNo={this.state.phoneNo}
						getEmail={this.getEmail.bind(this)}
						getPhoneNo={this.getPhoneNo.bind(this)}
						index={this.state.RowIndex}
					/> : null
				}
				{
					this.state.deleteMethodChange ?
						<PopUpModal cancelButton={this.state.cancelButton} deleteRow={this.deleteRow} cancel={this.cancel} /> : null
				}
			</div>
		);
	}
}
export default TableCreation;	