import logo from './logo.svg';
import './App.css';

const IOT_RULE_API_URL = "https://zj3phaj6dg.execute-api.us-east-1.amazonaws.com/Prod/publish";

function publishMessage() {
  let xhr; //Will hold an XMLHTTPRequest object

  //Send Request Over HTTP
  xhr = new XMLHttpRequest();
  xhr.open("POST", IOT_RULE_API_URL, true); //Initialize SYNCHRONOUS HTTP Request
  //xhr.send('{"message":"Hello world!"}');
  xhr.send("");
  //Check if the Request is Done
  switch (xhr.status) {
    case 200: //Upon success, call the processResponse function above
      console.log("XML HTTP Response Text: " + xhr.responseText);
      break;
    case 400: //Upon failure, alert user unable to process request
      alert("Unable to process request");
      console.log("XML HTTP Response Text: " + xhr.responseText);
      break;
    default:
      alert("An unknown error has occurred");
      break;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={e => publishMessage()}>
          Donate here!
        </button>
      </header>
    </div>
  );
}

export default App;
