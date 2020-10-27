import { screen, getByText } from '@testing-library/dom';
import { act } from '@testing-library/react';

it('should inject #widget node', async () => {
  const container = window.document;

  // simulate a lazy loading of Widget
  // eslint-disable-next-line
  require('../Widget');

  screen.debug(container);

  expect(getByText(container, 'message')).toBeDefined();

  // run useEffect
  act(() => {
  });

  act(() => {
    document.$widget.setMessage('newMessage');
  });

  screen.debug(container);

  expect(getByText(container, 'newMessage')).toBeDefined();
});
