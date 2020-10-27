import { render } from 'react-dom';
import { Widget } from './WidgetApp';
import { store } from './dataLayer';

const getHostNode = () => {
  const hostNodes = document.querySelectorAll('#widget');

  if (hostNodes.length !== 0) {
    return hostNodes[0];
  }

  const widgetDiv = document.createElement('div');
  widgetDiv.setAttribute('id', 'widget');

  document.documentElement.appendChild(widgetDiv);

  return widgetDiv;
};

const init = () => {
  const hostNode = getHostNode();

  document.$widget = {
    setMessage: (message) => {
      if (message) {
        store.setState({
          message,
        });
      }
    }
  };
  render(<Widget />, hostNode)
}

init();
