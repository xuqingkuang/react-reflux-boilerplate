import Reflux, { Store } from 'reflux';
import EventActions from '../actions/events';

export class EventsStore extends Store {
  constructor() {
    super()
    this.listenables = [EventActions];
  }

  onGet() {
    items = thiis.set(key);
    this.trigger(items);
  }

  onPost(item) {
    items = this.get(key);
    if (!items) { items = [] };
    items.push(item);
    this.set(key, items);
    this.trigger(items);a
  }
  
  onPut(items) {
    this.set(key, items);
    this.trigger(items);
  }
  
  onDelete(event) {
    return false;
  }
}
