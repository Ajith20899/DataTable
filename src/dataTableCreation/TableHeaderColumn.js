import React from 'react';
import { Icon } from 'semantic-ui-react'

export const TableHeaderColumn = (props) => {
    return (
        <tbody className="header">
            {props.Headers.map((Headers, i) => {
                return (
                    <tr>
                        <th className="tableHead1">{Headers.head1}
                            {props.arrowIconChange ?
                                <Icon name="arrow down" className="arrowIcon" onClick={props.arrow} /> :
                                <Icon name="arrow up" className="arrowIcon" onClick={props.arrow} />
                            }
                        </th>
                        <th className="tableHead2" >{Headers.head2}</th>
                        <th className="tableHead3">{Headers.head3}</th>
                        <th className="tableHead4">{Headers.head4}</th>
                        <th className="tableHead7">{Headers.head7}</th>
                    </tr>
                )
            })}
        </tbody>
    )
}