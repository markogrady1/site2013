import React from 'react';
import Link from 'next/link';

import buttonStyle from './panel.module.css'

const Panel = (props) => {
  return (
    <Link href={props.name} className={buttonStyle.bttn}>
      <div onClick={props.onClick} className='panel-container' style={{ cursor: 'pointer'}}>
        <div className='panel-name'>{props.niceName}</div>
        <div className='panel-desc'>{props.content}</div>
        {props.niceName && (
          <Link href={props.name} className={buttonStyle.bttn}>
          <a className={buttonStyle.bttn}>Check it out</a>
          </Link>
        )}
      </div>
    </Link>

  );
};

export default Panel;