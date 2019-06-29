import React from 'react';
import { Icon } from 'semantic-ui-react';
import User from './user.png';

export const TableDataColumn = (props) => {
    return (
        <tr className="tableColumsRow">
            <td className="tebleColumn1 id">{props.data.id}</td>
            <td className="tebleCol2 profile" >
                <img src={User} alt="" width="35px" height="35px" />
                <span className="profileName">{props.data.name}</span> 
                <span className="profileRollNo">{props.data.rollNo}</span>
            </td>
            <td className="tebleCol3 ItemsColumn">{props.data.email}</td>
            <td className="tebleCol4">{props.data.phoneNo}</td>
            <td className="tebleCol4">{props.data.status}</td>
            <td className="tebleCol7 DeleteAndEditIcon" >
                <Icon name="edit outline" color="green"
                    style={{
                        width: '35px',
                        height: '32px',
                        padding: '7px 7px 7px 7px',
                        background: '#c6ffc6',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        position: 'relative',
                    }}
                    onClick={props.edit} />
                <Icon name="trash alternate"
                    color="red"
                    style={{
                        width: '35px',
                        height: '32px',
                        padding: '7px 7px 7px 7px',
                        background: 'rgb(255, 226, 226)',
                        borderRadius: '3px',
                        cursor: 'pointer'
                    }}
                    onClick={props.Delete} />
            </td>
        </tr>
    )
}