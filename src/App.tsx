import React from 'react';
import { View, App } from '@wonder-ui/core';
import { Provider } from 'mobx-react';
import Store from './store';
import routing from "./routing";
import routes from './routes';
import { fetch } from 'src/service';

const store = Store.create({}, { fetch });

function MyApp() {
  return (
    <Provider store={store}>
      <App routes={routes} routerStore={routing}>
        <View />
      </App>
    </Provider>
  );
}

export default MyApp;
