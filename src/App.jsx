import React from 'react'; //eslint-disable-line
import HelloWorld from './components/HelloWorld';
import RenderForm from './components/RenderForm';

import 'bootstrap/dist/css/bootstrap.min.css'; //eslint-disable-line
import './styles/styles.css';

const App = () => {
  return (
    <div>
      <HelloWorld />
      <RenderForm />
    </div>
  );
};

export default App;
