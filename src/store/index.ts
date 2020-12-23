import { types, getEnv } from 'mobx-state-tree';
import { HomeStore } from './homeStore';

const Stores = types
  .model('Stores', {
    home: types.optional(HomeStore, {})
  })
  .views((self) => {
    return {
      get fetch() {
        return getEnv(self).fetch;
      }
    };
  })
  .actions((self) => {
    return {
      afterCreate() { }
    };
  });;

export default Stores;
