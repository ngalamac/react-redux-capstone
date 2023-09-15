import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../features/store';
import Card from '../components/Card';

afterEach(cleanup);

describe('Card', () => {
  it('Card to match Snapshot', () => {
    const card = render(<Provider store={store}><Card /></Provider>);
    expect(card).toMatchSnapshot();
  });
});
