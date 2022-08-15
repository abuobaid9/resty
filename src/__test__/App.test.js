import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';


test('load and display app', async () => {
  render(<App />);
  const methodName = await waitFor(() => screen.getByTestId('method'));
  expect(methodName).toBeInTheDocument();
});
test('can change the method to get', () => {
  render(<App />);
  const getMethod = screen.getByTestId('get');
  const go = screen.getByTestId('go');
  const method = screen.getByTestId('method');
  fireEvent.click(getMethod);
  fireEvent.click(go);
  expect(method).toHaveTextContent("GET");
});
test('can change the method to post', () => {
  render(<App />);
  const postMethod = screen.getByTestId('post');
  const go = screen.getByTestId('go');
  const method = screen.getByTestId('method');
  fireEvent.click(postMethod);
  fireEvent.click(go);
  expect(method).toHaveTextContent("POST");
});
test('can change the method to put', () => {
  render(<App />);
  const putMethod = screen.getByTestId('put');
  const go = screen.getByTestId('go');
  const method = screen.getByTestId('method');
  fireEvent.click(putMethod);
  fireEvent.click(go);
  expect(method).toHaveTextContent("PUT");
});
test('can change the method to delete', () => {
  render(<App />);
  const deleteMethod = screen.getByTestId('delete');
  const go = screen.getByTestId('go');
  const method = screen.getByTestId('method');
  fireEvent.click(deleteMethod);
  fireEvent.click(go);
  expect(method).toHaveTextContent("DELETE");
});
test('URL change depend on text of the input tag', async () => {
  render(<App />);
  const url = screen.getByTestId('url');
  const getMethod = screen.getByTestId('get');
  const go = screen.getByTestId('go');
  fireEvent.input(url, "")
  fireEvent.click(getMethod);
  fireEvent.click(go);
  expect(url).toHaveTextContent(" https://pokeapi.co/api/v2/pokemon");
});