import MenuItemsEvents from './events/MenuItemsEvents.jsx';
import ContentEvents from './events/ContentEvents.jsx';

let contentEvents = new ContentEvents();
contentEvents.subscribeToRequested();

let menuItemsEvents = new MenuItemsEvents();
menuItemsEvents.subscribeToRequested();
menuItemsEvents.publishAvailable();