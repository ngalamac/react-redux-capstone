import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../features/store';
import App from '../App';

afterEach(cleanup);

describe('App', () => {
  it('App to match Snapshot', () => {
    const app = render(<Provider store={store}><App /></Provider>);
    expect(app).toMatchSnapshot();
  });
});
