// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  // Tu configuración de Firebase
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

// App.jsx
import React from 'react';
import { database } from './firebaseConfig';

class App extends React.Component {
  componentDidMount() {
    database.ref('/path/to/data').on('value', (snapshot) => {
      const data = snapshot.val();
      // Haz algo con los datos
    });
  }

  render() {
    // Renderiza tu componente
  }
}

export default App;
