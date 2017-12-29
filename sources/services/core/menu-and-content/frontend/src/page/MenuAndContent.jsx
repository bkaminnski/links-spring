import React from 'react';
import Menu from '../menu/Menu.jsx'
import ContentContainer from '../content/ContentContainer.jsx'

export default class MenuAndContent extends React.Component {

    render() {
        return <div>
            <Menu />
            <ContentContainer />
        </div>;
    }
}

