import React, { useState } from 'react';
import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';
import axios from 'axios';


function App() {
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});



  function callApi(requestParams) {
    if (requestParams.method==='GET'){
      axios.get(requestParams.url)
      .then((d)=> {
      console.log(d);
      setdata(d);
      // setrequestParams(requestParams);
      
    })
    }
    if (requestParams.method==='POST'){
      axios.post(requestParams.url, requestParams.body)
      .then((d)=> {
      console.log(d.data);
      setdata(d.data);
      // setrequestParams(requestParams);
      
    })
    }
    if (requestParams.method==='PUT'){
      axios.put(requestParams.url,)
      .then((d)=> {
      console.log(d.data);
      setdata(d.data);
      // setrequestParams(requestParams);
      
    })
    }
    if (requestParams.method==='DELETE'){
      axios.delete(requestParams.url)
      .then((d)=> {
      console.log(d.data);
      setdata(d.data);
      // setrequestParams(requestParams);
      
    })
    }
    setrequestParams(requestParams);

  }
  
  
  return (
    <>
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;
