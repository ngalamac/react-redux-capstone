import React from 'react';
import { screen } from '@testing-library/react';
import {
  MemoryRouter, Routes, Route,
} from 'react-router-dom';
import { setupServer } from 'msw/node';
import renderWithProviders from '../Utils/test-utils';
import '@testing-library/jest-dom';
import { handlers } from '../Utils/mockHandlers';
import Pollution from '../Routes/Pollution/Pollution';

const server = setupServer(...handlers);

describe(Pollution, () => {
  beforeAll(() => {
    server.listen();
  });

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => {
    server.resetHandlers();
  });

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  test('should render region and country', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/Peru/PE/-10/-76']}>
        <Routes>
          <Route
            path="/:country/:sn/:lat/:lon"
            element={<Pollution />}
          />
        </Routes>
      </MemoryRouter>,
    );

    const country = screen.getByRole('heading', {
      name: /peru/i,
    });

    expect(country).toBeInTheDocument();
  });

  test('should render Air pollution details', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/Peru/PE/-10/-76']}>
        <Routes>
          <Route
            path="/:country/:sn/:latitude/:longitude"
            element={<Pollution />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText(/Peru/i)).toBeVisible();
  });
});
