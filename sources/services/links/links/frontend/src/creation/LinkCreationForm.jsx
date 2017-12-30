import React from 'react';
import LinkCreationFormStore from './LinkCreationFormStore.js';
import LinkCreationFormItem from './LinkCreationFormItem.jsx';

export default class LinkCreationForm extends React.Component {

    constructor() {
        super();
        this.store = new LinkCreationFormStore(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.store.subscribeToEvents();
    }

    componentWillUnmount() {
        this.store.unsubscribeFromEvents();
    }

    render() {
        return <div className="bottom-buffer-double">
            <form onSubmit={this.onSubmit}>
                {this.state.slices.map(slice => <LinkCreationFormItem key={slice.name} slice={slice} />)}
                <div className="text-right" role="group" aria-label="Add">
                    <button type="submit" className="btn btn-default">Add</button>
                </div>
            </form>
        </div>
    }

    onSubmit(e) {
        e.preventDefault();
        this.store.onSubmit();
    }
}