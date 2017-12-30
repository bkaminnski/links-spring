export default class LinksListStore {

    constructor(linksListComponent) {
        this.component = linksListComponent;
        this.component.state = { links: [] };
        this.listSlices = {};
    }

    subscribeToEvents() {
        this.linksListSliceAvailableSubscriptionToken = PubSub.subscribe('uiEvent.links.linksListSlice.available', (msg, listSlice) => {
            this.listSlices[listSlice.name] = listSlice;
            this.rebuildState();
        });
        PubSub.publish('uiEvent.links.linksListSlices.requested');
    }

    rebuildState() {
        let linkIdToLinkListItemMap = this.distinctLinkListItemsForAllListSlices();
        this.fillInItemSlicesIn(linkIdToLinkListItemMap);
        this.component.setState({ links: this.flatten(linkIdToLinkListItemMap) });
    }

    distinctLinkListItemsForAllListSlices() {
        let linkIdToLinkListItemMap = {};
        Object
            .keys(this.listSlices)
            .map(k => this.listSlices[k])
            .forEach(listSlice => listSlice.items
                .forEach(item => {
                    if (linkIdToLinkListItemMap[item.linkSharedId] == null) {
                        let linkListItem = {
                            sharedId: item.linkSharedId,
                            itemSlices: []
                        };
                        linkIdToLinkListItemMap[item.linkSharedId] = linkListItem;
                    }
                })
            );
        return linkIdToLinkListItemMap;
    }

    fillInItemSlicesIn(linkIdToLinkListItemMap) {
        Object
            .keys(this.listSlices)
            .map(k => this.listSlices[k])
            .sort((s1, s2) => s1.priority - s2.priority)
            .forEach(listSlice => listSlice.items
                .forEach(item => {
                    let itemSlice = {
                        name: listSlice.name,
                        component: item.component,
                        key: item.key
                    }
                    this.addOrReplaceItemSliceInLinkListItem(itemSlice, linkIdToLinkListItemMap[item.linkSharedId]);
                })
            );
    }

    addOrReplaceItemSliceInLinkListItem(itemSlice, linkListItem) {
        let itemSlicesMap = {};
        linkListItem.itemSlices.forEach(is => itemSlicesMap[is.name] = is);
        itemSlicesMap[itemSlice.name] = itemSlice;
        linkListItem.itemSlices = [];
        Object
            .keys(itemSlicesMap)
            .map(k => itemSlicesMap[k])
            .forEach(is => linkListItem.itemSlices.push(is));
    }

    flatten(linkIdToLinkListItemMap) {
        let linkListItems = [];
        Object
            .keys(linkIdToLinkListItemMap)
            .map(k => linkIdToLinkListItemMap[k])
            .forEach(linkListItem => linkListItems.push(linkListItem));
        return linkListItems;
    }

    unsubscribeFromEvents() {
        PubSub.unsubscribe(this.linksListSliceAvailableSubscriptionToken);
    }
}