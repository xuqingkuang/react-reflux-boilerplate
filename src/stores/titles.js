import Reflux from 'reflux';
import TitleActions from '../actions/titles';

titles = [
  'React Reflux Boilerplate',
  'React',
  'Reflux',
  'Boilerplate'
];

export default Reflux.createStore({
  init() {
    this.listenTo(TitleActions.nextTitle, this.getNextTitle);
  },
  
  getInitialState() {
    return {title: titles[0]};
  },

  getNextTitle(currentTitle) {
    next = titles.indexOf(currentTitle);
    next += 1;
    if (next === titles.length) {
      next = 0;
    };
    this.trigger({title: titles[next]});
  }
})
