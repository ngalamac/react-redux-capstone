import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Teams from '../Teams';

const mockStore = configureMockStore([]);

describe('Teams component works okay', () => {
  test('Teams renders correctly', () => {
    const store = mockStore({
      teams: {
        teams: [],
      },
    });

    const tree = render(
      <Provider store={store}>
        <Teams />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
