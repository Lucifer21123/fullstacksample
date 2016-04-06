/// <reference path="../../typings/main.d.ts" />

import * as React from 'react';
import {IDefaultProps} from "../properties/IDefaultProps";
import D3HILOChart from "../components/D3HILOChart";

interface IDashboardProps extends IDefaultProps {
    findStocksByWildCard : Function
}

interface IDashboardState {
}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

    constructor(props, context) {
        super(props, context);
    }

    public render() {
        const { findStocksByWildCard } = this.props;

        return (
            <div>
                <p>Dashboard</p>
                <input type="text" onChange={this.handleChange.bind(this, 'input')}></input>
                <D3HILOChart></D3HILOChart>
            </div>
        );
    }

    private handleChange() {
        console.log("ON CHANGE");
    }
}

export default Dashboard;