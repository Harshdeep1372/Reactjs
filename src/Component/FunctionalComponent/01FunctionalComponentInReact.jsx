import React from 'react';

const FunctionalComponentInReact = () => {
  return (
    <>
      <div className="container">
        <h2>What is a Functional Component in React?</h2>
        <p className='alert alert-info p-3'>A functional component, also known as a stateless component, is a
          JavaScript function that returns JSX to define the structure and
          appearance of a React component. Functional components are primarily
          used for presenting UI and don't have their own internal state.</p>
        <div className="alert alert-info">
          function func_name ( ) &#123; <br />
          &nbsp;&nbsp;&nbsp;&nbsp; code.. <br />
          &#125; <br /> or <br />
          function_name =  ( ) =&gt;&#123; <br />
          &nbsp;&nbsp;&nbsp;&nbsp; code.. <br />
          &#125; <br />
        </div>
      </div>
    </>
  );
};

export default FunctionalComponentInReact;