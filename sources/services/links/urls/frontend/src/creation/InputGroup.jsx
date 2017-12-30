import React from 'react';

export default class InputGroup extends React.Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.shouldShowError = this.shouldShowError.bind(this);
        this.state = {
            value: null,
            valid: false,
            touched: false
        };
    }

    focus() {
        this.input.focus();
    }

    showErrorAndFocus() {
        this.setState({ touched: true }, () => {
            this.input.focus();
        });
    }

    render() {
        let inputGroupErrorClassName = this.shouldShowError() ? ' has-feedback has-error' : '';
        let ariaDescribedBy = this.props.id + this.shouldShowError() ? '-invalid-description' : '-label';
        let errorIcon = this.shouldShowError() ? <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true" /> : null;
        let errorDescription = this.shouldShowError() ? <span id={this.props.id + '-invalid-description'} className="sr-only">Invalid {this.props.label}</span> : null;

        return <div className={'input-group bottom-buffer' + inputGroupErrorClassName}>
            <span className="input-group-addon" id={this.props.id + '-label'}>{this.props.label}</span>
            <input
                type="text"
                ref={(input) => { this.input = input; }}
                onChange={this.onChange}
                value={this.state.value == null ? this.props.initialValue : this.state.value}
                className="form-control"
                placeholder={this.props.placeholder}
                aria-describedby={ariaDescribedBy}
            />
            {errorIcon}
            {errorDescription}
        </div>;
    }

    shouldShowError() {
        return !this.state.valid && this.state.touched;
    }

    onChange(e) {
        this.setState({ value: e.target.value, valid: this.props.validate(e), touched: true }, () => {
            this.props.onChange(this.props.attributeName, this.state.value, this.state.valid);
        });
    }
}
