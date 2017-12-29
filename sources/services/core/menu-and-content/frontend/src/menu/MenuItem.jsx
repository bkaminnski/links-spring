import React from 'react';

export default class MenuItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.navigateTo(this.props.menuItem);
    }

    render() {
        return <li><a href="#" onClick={this.onClick}>{this.props.menuItem.label}</a></li>;
    }
}