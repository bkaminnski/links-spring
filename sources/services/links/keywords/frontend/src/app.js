import LinksListSlicesEvents from './events/LinksListSlicesEvents.jsx';
import LinkCreationSlicesEvents from './events/LinkCreationSlicesEvents.jsx';

let linksListSlicesEvents = new LinksListSlicesEvents();
linksListSlicesEvents.subscribeToRequested();

let linkCreationSlicesEvents = new LinkCreationSlicesEvents();
linkCreationSlicesEvents.subscribeToRequested();