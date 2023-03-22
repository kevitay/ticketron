import React from 'react'

function PageControls(props) {
  return (
    <div className="page-controls">
      <button className="pagebutton" onClick={props.prev}>Prev</button>
      <button className="pagebutton" onClick={props.next}>Next</button>
    </div>
  );
}

export default PageControls