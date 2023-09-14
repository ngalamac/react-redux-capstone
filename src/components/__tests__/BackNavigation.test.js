import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import BackNavigation from '../BackNavigation';

describe('BackNavigation', () => {
  test('renders without errors', () => {
    render(
      <Router>
        <BackNavigation />
      </Router>,
    );

    expect(screen.getByTestId('back-navigation')).toBeInTheDocument();
  });
});
