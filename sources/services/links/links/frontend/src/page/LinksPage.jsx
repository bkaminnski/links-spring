import React from 'react';
import LinkCreationForm from '../creation/LinkCreationForm.jsx';
import LinksList from '../list/LinksList.jsx';

export default class LinksPage extends React.Component {
    render() {
        return (
            <div>
                <LinkCreationForm />
                <LinksList />
            </div>
        )
    }
}