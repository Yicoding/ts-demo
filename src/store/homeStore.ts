import { types } from 'mobx-state-tree';

export const HomeStore = types
  .model('HomeStore', {
    home: types.maybeNull(types.number)
  })
  .views(() => {
    return {
      get fetch() {
        return 1;
      },
      get add() {
        return () => {
          console.log('add')
        }
      }
    };
  })
  .volatile(() => {
    return {
      searchData: {},
      timee: null,
      activeKey: null,
      auto: false,
      load: false
    };
  });
