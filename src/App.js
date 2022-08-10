import React, { useState } from 'react';
import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';

function App() {
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});

  function callApi(requestParams) {
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setdata(data);
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
