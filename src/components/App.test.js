import React from 'react';
import App from './App';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from '@testing-library/react';
import configureStore from '../store';
import { Provider } from 'react-redux';
import 'jest-dom/extend-expect';

beforeEach(() => {
  fetch.resetMocks();
});

afterEach(cleanup);

it('renders photos', async () => {
  debugger;
  fetch
    .once(
      JSON.stringify({
        results: [{ geometry: { location: { lat: '1', long: '1' } } }]
      })
    )
    .once(
      JSON.stringify({
        photos: {
          photo: [
            { id: '1', farm: 'f', secret: 'sec', server: 's', title: 'title1' },
            { id: '2', farm: 'f', secret: 'sec', server: 's', title: 'title2' },
            { id: '3', farm: 'f', secret: 'sec', server: 's', title: 'title3' }
          ]
        }
      })
    );

  const { container, getByText, getByPlaceholderText, getByAltText } = render(
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );

  const inputNode = getByPlaceholderText('Example: Seattle, WA');
  fireEvent.change(inputNode, {
    target: { value: 'seattle' }
  });
  const buttonNode = getByText('Get Photos');
  fireEvent.click(buttonNode);

  const prevElement = await waitForElement(() => getByText('Previous'));
  expect(prevElement.attributes['disabled']).toBeDefined();

  const nextElement = await waitForElement(() => getByText('Next'));
  expect(nextElement.attributes['disabled']).toBeUndefined();

  const imgElement1 = await waitForElement(() => getByAltText('title1'));
  expect(imgElement1.src).toBe('https://farmf.staticflickr.com/s/1_sec.jpg');

  fireEvent.click(nextElement);

  let imgElement2 = await waitForElement(() => getByAltText('title2'));
  expect(imgElement2.src).toBe('https://farmf.staticflickr.com/s/2_sec.jpg');

  fireEvent.click(nextElement);

  const imgElement3 = await waitForElement(() => getByAltText('title3'));
  expect(imgElement3.src).toBe('https://farmf.staticflickr.com/s/3_sec.jpg');
  expect(nextElement.attributes['disabled']).toBeDefined();

  fireEvent.click(prevElement);

  imgElement2 = await waitForElement(() => getByAltText('title2'));
  expect(imgElement2.src).toBe('https://farmf.staticflickr.com/s/2_sec.jpg');

  expect(container).toMatchSnapshot();
});
