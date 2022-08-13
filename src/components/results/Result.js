import React from 'react';
import './result.scss'
function Results(props) {

  return (
    <section>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 5) : null}</pre>
    </section>
  );
}

export default Results;
