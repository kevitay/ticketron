import React from 'react'

function PageControls(props) {
  // console.log(props.pagenum);
  // console.log(props.lastpage);

      return (
        <div className="page-controls">
          {props.pagenum !== 1 && (
            <button className="prev-btn" onClick={props.prev}>
              Prev
            </button>
          )}
          {props.pagenum !== props.lastpage && (
            <button className="next-btn" onClick={props.next}>
              Next
            </button>
          )}
          <br />
          {props.pagenum} of {props.lastpage}
        </div>
      );
  }


export default PageControls