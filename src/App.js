import './App.css';

import {useEffect} from 'react';

const App = () => {
  const myFunction = () => {
    // Your logic here
    console.log('pressed Enter ✅');
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        // 👇️ Your logic here
        myFunction();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
};

export default App;
