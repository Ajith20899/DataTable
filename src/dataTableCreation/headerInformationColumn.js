import React from 'react';

export const HeaderInformationFirstColumn = (props) => {
    return (
        <section className="headerInformationTextFirstType">
            <div className="headerInformationTextFirstTypeSpan">
                <span className="headerInformationTextFirstTypeSpan">ReceiveDate:</span>
                <span className="headerInformationTextFirstTypeSpanRight">{props.ReceiveDate}</span>
            </div>
            <div className="headerInformationTextSecondTypeSpan">
                <span className="headerInformationTextSecondTypeSpan">ReceiveDate:</span>
                <span className="headerInformationTextFirstTypeSpanRight">{props.ReceiveDate}</span>
            </div>
        </section>
    )
}

const HeaderInformationSecondColumn = (props) => {
    return (
        <section className="headerInformationTextSecondType">
            <div className="headerInformationTextFirstTypeSpan">
                <span className="headerInformationTextFirstTypeSpan">ReceiveDate:</span>
                <span className="headerInformationTextFirstTypeSpanRight">{props.ReceiveDate}</span>
            </div>
            <div className="headerInformationTextSecondTypeSpan">
                <span className="headerInformationTextSecondTypeSpan">ReceiveDate:</span>
                <span className="headerInformationTextFirstTypeSpanRight">{props.ReceiveDate}</span>
            </div>
        </section>
    )
}

export const HeaderInformationThirdColumn = (props) => {
    return (
        <section className="headerInformationTextThirdType">
            <div className="headerInformationTextFirstTypeSpan">
                <span className="headerInformationTextFirstTypeSpan">ReceiveDate:</span>
                <span className="headerInformationTextFirstTypeSpanRight">{props.ReceiveDate}</span>
            </div>
            <div className="headerInformationTextSecondTypeSpan">
                <span className="headerInformationTextSecondTypeSpan">ReceiveDate:</span>
                <span className="headerInformationTextFirstTypeSpanRight">{props.ReceiveDate}</span>
            </div>
        </section>
    )
}


export default HeaderInformationSecondColumn;
