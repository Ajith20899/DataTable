import React from 'react';

export const TableHeaderColumn = (props) => {
    return (
        <tbody className="header">
            {props.Headers.map((Headers, i) => {
                return (
                    <tr>
                        <th className="tableHead1">{Headers.head1}</th>
                        <th className="tableHead2" >{Headers.head2}</th>
                        <th className="tableHead3">{Headers.head3}</th>
                        <th className="tableHead4">{Headers.head4}</th>
                        <th className="tableHead5">{Headers.head5}</th>
                        <th className="tableHead6">{Headers.head6}</th>
                    </tr>
                )
            })}
        </tbody>
    )
}
