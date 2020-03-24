import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from "uuid";


const teamMembers = [
  { id: uuid(), fname: 'John', lname: 'Smith' },
  { id: uuid(), fname: 'Jane', lname: 'Doe' },
]


function App() {
  const [friends, setFriends] = useState({ teamMembers: '' });
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
  })

  const onInputChange = event => {
    // use the event object
    // to fish out the current value
    // and replace the WHOLE formValues object
    // with a new one that's a copy of the old one
    // BUT with a little override
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }
  // onFormSubmit = event => {
  //   event.preventDefualt()

  //   const newFriend = id; uuid(),
  //     fname; formValues.fname,
  //       lname; formValues.lname,

  //         setFriends([...friends, newFriend])//We NEED TO PASS AN ENTIRE ARRAY
  // }

  return (
    <div className="App">
      <form>
        <label for="title">Title</label> first name
          <input id="title" type="text" name="title" />
        {/* onChange={onInputChange}
        value={formValues.fname}
        name='fname'

        type='text' */}
        {/* onChange={onInputChange} // callback takes an event object
        value={formValues.fname}
        name='fname'

        type='text' */}


      </form>


      <form>
        <label for="title"></label> Last name
  <input id="title" type="text" name="title" />
        {/* onChange={onInputChange} // callback takes an event object
value={formValues.fname}
name='fname'

type='text' */}


      </form>
      {/* <h3>List of Friends</h3>
      {
        friends.map(fr => <div key={fr.id}>{fr.fname} {fr.lname}</div>)
      } */}
      <br>
      </br>

      <form>
        <label for="title"></label> Role
          <input id="title" type="text" name="title" />

      </form>

      <br>
      </br>

      <form>
        <label for="title"></label> Email
          <input id="title" type="text" name="title" />

      </form>
      <input type='submit' />
    </div >

  );

}



export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
{/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
{/* </header> */ }
