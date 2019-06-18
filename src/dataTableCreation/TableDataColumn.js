import React from 'react';
import { Icon } from 'semantic-ui-react';
import User from './user.png';

export const TableDataColumn = (props) => {
    return (
        <tbody>
        {props.slicedData.map((col, i) => {
            return (
                <tr className="tableColumsRow">
                    <td className="tebleCol1">{col.cell1}</td>
                    <td className="tebleCol2 profile" >
                        <img src={User} alt="" width="30px" height="30px" />
                        <span className="profileName">{col.cell2}</span>
                    </td>
                    <td className="tebleCol3 ItemsColumn">{col.cell3}</td>
                    <td className="tebleCol4">{col.cell4}</td>
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
                            onClick={props.Edit} />  
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
        })}
    </tbody>
    )
}