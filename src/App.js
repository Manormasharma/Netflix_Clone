import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <div className="App">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
    </ErrorBoundary>
  );
}

export default App;
