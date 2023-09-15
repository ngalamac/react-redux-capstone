import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Hero from '../Components/Hero/Hero';
import store from '../Redux/configureStore';

describe('The indivial page of the app countires', () => {
  it('renders properly', async () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Hero />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
