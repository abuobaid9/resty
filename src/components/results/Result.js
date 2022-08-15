import React from 'react';
import JSONPretty  from 'react-json-pretty';
import './result.scss'
import 'react-json-pretty/themes/acai.css';
function Results(props) {

  return (
    <section> 
          {!props.data?<div className='loader'></div>:
          <JSONPretty id="json-pretty"   style={{fontSize: "1.1em"}} valueStyle="font-size:1.2em" data={props.data} >
          </JSONPretty>}
      {/* <pre>{props.data ? JSON.stringify(props.data, null, "\t") : null}</pre> */}
    </section>
  );
}

export default Results;
