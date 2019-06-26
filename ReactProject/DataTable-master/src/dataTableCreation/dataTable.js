import React from 'react';
import '../Generics/common.css';
import 'semantic-ui-css/semantic.min.css';
import HeaderProperties from './headerProperties.js';
import TableCreation from './tableCreation';
import FooterCreation from './footerCreation';

// Data Table Main Page Container

class DataTable extends React.Component {
    render() {
        return (
            <div className="DataTableContainer">

                {/* DataTable header function call  */}
                <div>
                    <HeaderProperties />
                </div>

                {/* Data Table function call  */}
                <div>
                    <TableCreation />
                </div>

                {/* Data Table Footer function call  */}
                <div>
                    <FooterCreation />
                </div>
                
            </div>
        )
    }
}

export default DataTable;

