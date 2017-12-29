import ApplicationLayoutEvents from './events/ApplicationLayoutEvents.jsx';

let applicationLayoutEvents = new ApplicationLayoutEvents();
applicationLayoutEvents.subscribeToRequested();
applicationLayoutEvents.publishAvailable();