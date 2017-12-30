import React from 'react';

export default class KeywordsItem extends React.Component {

    render() {
        return <p className="list-group-item-text top-buffer"><kbd>{this.props.keywords}</kbd></p>;
    }
}