import React from 'react';
import Link from 'next/link';

const Panel = (props) => {
  return (
    <div onClick={props.onClick} className='panel-container' style={{ cursor: 'pointer'}}>
      <div className='panel-name'>{props.niceName}</div>
      <div className='panel-desc'>{props.content}</div>
      {props.content && (
        <Link href={props.name} className='bttn bttn-grey'>
          <a className='bttn bttn-grey'>Check it out</a>
        </Link>
      )}
    </div>
  );
};

export default Panel;