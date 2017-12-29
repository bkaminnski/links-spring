import React from 'react';
import MenuStore from './MenuStore.js'
import MenuItem from './MenuItem.jsx'
import UserInfoPlaceholder from './placeholders/UserInfoPlaceholder.jsx'

export default class Menu extends React.Component {

    constructor() {
        super();
        this.menuStore = new MenuStore(this);
        this.state = { menuItems: [] };
        this.navigateToFirstMenuItem = this.navigateToFirstMenuItem.bind(this);
        this.navigateTo = this.navigateTo.bind(this);
    }

    componentDidMount() {
        this.menuStore.subscribeToEvents();
    }

    componentWillUnmount() {
        this.menuStore.unsubscribeFromEvents();
    }

    navigateToFirstMenuItem() {
        this.menuStore.navigateToFirstMenuItem();
    }

    navigateTo(menuItem) {
        this.menuStore.navigateTo(menuItem);
    }

    render() {
        return <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#" onClick={this.navigateToFirstMenuItem}><span className="glyphicon glyphicon-link" aria-hidden="true"></span></a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        {
                            this.state.menuItems.map(menuItem => <MenuItem key={'menuItem' + menuItem.code} menuItem={menuItem} navigateTo={this.navigateTo} />)
                        }
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <UserInfoPlaceholder />
                    </ul>
                </div>
            </div>
        </nav>;
    }
}