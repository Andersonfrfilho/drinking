import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './routes';
import './config/ReactotronConfig';
import store from './store';
import {setNavigator} from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#361042" />
      <Routes ref={setNavigator} />
    </Provider>
  );
}
