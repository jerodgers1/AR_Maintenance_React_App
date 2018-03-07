import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import Home from './src/screens/Home/Home';
import CallExpertButton from './src/Components/HomeScreen/CallExpertButton';
import StartJobButton from './src/Components/HomeScreen/StartJobButton';
import JobList from './src/Components/HomeScreen/JobList';

import configureStore from './src/store/configureStore';
const store = configureStore();

test('Home', () => {
  const component = renderer.create(
      <Provider store={store}>
            <Home />
      </Provider>
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Expert Button', () => {
    const component = renderer.create(
        <Provider store={store}>
            <CallExpertButton/>
        </Provider>
    ).toJSON();
    expect(component).toMatchSnapshot();
});

test('start Button', () => {
    const component = renderer.create(
        <StartJobButton onJobStarted={console.log('test')}/>
    ).toJSON();
    expect(component).toMatchSnapshot();
});

test('Job List', () => {
    const component = renderer.create(
        <Provider store={store}>
            <JobList jobList={"test"}/>
        </Provider>
    ).toJSON();
    expect(component).toMatchSnapshot();
});
