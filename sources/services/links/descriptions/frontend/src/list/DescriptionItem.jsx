import React from 'react';

export default class DescriptionItem extends React.Component {

    render() {
        return <p className="list-group-item-text top-buffer">{this.props.description}</p>;
    }
}