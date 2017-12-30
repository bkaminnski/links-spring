import React from 'react';
import InputGroup from './InputGroup.jsx'

export default class Url extends React.Component {
    
    constructor() {
        super();
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        this.inputGroup.focus();
    }

    showErrorAndFocus() {
        this.inputGroup.showErrorAndFocus();
    }

    render() {
        return <InputGroup
            id={this.props.id}
            ref={(inputGroup) => { this.inputGroup = inputGroup; }}
            attributeName={this.props.attributeName}
            initialValue={this.props.initialValue}
            onChange={this.props.onChange}
            validate={this.validate}
            label="URL"
            placeholder="http://paste-a-link-here.com"
        />
    }

    validate(e) {
        let url = e.target.value;
        return url != '' && /^.+((\.\w{2,})|(localhost)).*$/.test(url);
    }
}
