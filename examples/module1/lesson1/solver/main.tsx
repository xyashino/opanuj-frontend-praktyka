import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <>
      <App />
    </>
  );
}
