export default class MenuStore {

    constructor(component) {
        this.component = component;
        this.menuItemsMap = new Map();
        this.selectedMenuItem = null;
    }

    subscribeToEvents() {
        this.menuItemIsAvailableSubscriptionToken = PubSub.subscribe('uiEvent.menu-and-content.menuItem.available', (msg, menuItem) => {
            this.menuItemsMap.set(menuItem.code, menuItem);
            this.rebuildState();
        });
        PubSub.publish('uiEvent.menu-and-content.menuItems.requested');
    }

    unsubscribeFromEvents() {
        PubSub.unsubscribe(this.menuItemIsAvailableSubscriptionToken);
    }

    rebuildState() {
        let menuItems = [];
        this.menuItemsMap.forEach(value => menuItems.push(value));
        menuItems.sort((mi1, mi2) => mi1.priority - mi2.priority)
        this.component.setState({ menuItems: menuItems, selectedMenuItem: this.selectedMenuItem }, () => this.navigateToFirstMenuItem());
    }

    navigateToFirstMenuItem() {
        if (this.component.state.menuItems.length > 0) {
            this.navigateTo(this.component.state.menuItems[0]);
        }
    }

    navigateTo(menuItem) {
        this.selectedMenuItem = menuItem;
        PubSub.publish('uiEvent.menu-and-content.content.requested.' + this.selectedMenuItem.code);
    }
}