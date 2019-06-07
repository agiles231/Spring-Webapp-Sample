import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "./Navbar";

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = { type: props.type, params: props, data: [], isLoading: true };
    }

    componentDidMount() {
        this.setState( { isLoading: true });
        const { type, params } = this.state;
        fetch("/api/random/" + type.toLowerCase() + "?" + Object.keys(params).map((key) => key + "=" + params[key]).join("&"))
            .then(response => response.json())
            .then(d => this.setState({ data: d, isLoading: false}));
    }

    componentWillReceiveProps(nextProps) {
        this.setState( { type: nextProps.type, params: nextProps, isLoading: true }, () => {
            const { type, params } = this.state;
            fetch("/api/random/" + type.toLowerCase() + "?" + Object.keys(params).map((key) => key + "=" + params[key]).join("&"))
                .then(response => response.json())
                .then(d => this.setState({ data: d, isLoading: false}));
        });
    }

    render() {
        const { type, data, isLoading } = this.state;
        if (isLoading) {
            return (
                <div>
                    <Navbar />
                    <p>Loading...</p>
                </div>
            );
        }

        if (data.length === 0) {
            return (
                <div>
                    <Navbar />
                    <p>No data was returned!</p>
                </div>
            );
        }

        const dataList = data.map(datum => {
            return(
                <tr><td>{datum}</td></tr>
            );
        });
        return(
            <div>
                <Navbar />
                <table>
                    <thead>
                        <tr>
                            <th>{type}</th>
                        </tr>
                    </thead>
                    <tbody>{ dataList }</tbody>
                </table>
            </div>
        );
    }
}

export default DataList;