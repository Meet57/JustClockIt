import React from 'react';
import './App.css';
// import firebase from './firebase'
import { TimeList } from './components/TimeList';
import { AddTimeEntryForm } from './components/AddTimeEntryForm';

// firebase.firestore().collection('times').add({
//   title : 'rubic cude',
//   time_seconds : 45 
// })

function App() {
  return (
    <div className="App">
      <h1>Just Clock It</h1>
      <code style={{float:'right'}}>- First app using firebase</code>
      <TimeList />
      <AddTimeEntryForm />
    </div>
  );
}

export default App;
