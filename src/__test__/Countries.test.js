import { act } from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import App from '../App';

describe('Body of the whole landing page', () => {
  it('checks for the name of the country', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    });
  });
  waitFor(() => {
    const chillForDOM = screen.findByText(/Peru/i);
    expect(chillForDOM).not.toBeNull();
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/Bolivia/);
      expect(chillForDOM).not.toBeNull();
    });
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/Sudan/);
      expect(chillForDOM).not.toBeNull();
    });
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/Argentina/);
      expect(chillForDOM).not.toBeNull();
    });
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/Guam/);
      expect(chillForDOM).not.toBeNull();
    });
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/Italy/);
      expect(chillForDOM).not.toBeNull();
    });
  });
});
