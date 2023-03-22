import React from 'react'

function PageControls(props) {
  return (
    <div className="page-controls">
      <button className="prev-btn" onClick={props.prev}>Prev</button>
      <button className="next-btn" onClick={props.next}>Next</button>
    </div>
  );
}

export default PageControls