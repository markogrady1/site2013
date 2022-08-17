import React from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

// add this next
const activeStyle = {
  color: '#000',
  paddingBottom: '4px',
  borderBottom: '4px solid #a9a9a9',
  transition: 'all 0.2s ease-out',
};

export default function Header() {
  const click = false;
  return (
    <>
      <nav className='head'>
        <div className='head-container'>
          <Link href='/' >
            <a className='head-logo'>BEEPBOP&nbsp;</a>
          </Link>
          <div className='menu-icon'>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'head-nav-menu active' : 'head-nav-menu'}>
            <li className='head-nav-item'>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li className='head-nav-item'>
            <Link href='/projects'>
                <a>Projects</a>
              </Link>
            </li>
            <li className='head-nav-item'>
            <Link href='/blog' >
                <a>Blog</a>
              </Link>
            </li>
            <li className='head-nav-item'>
            <Link href='/reactions'>
                <a>Reactions</a>
              </Link>
            </li>
            <li className='head-nav-item'>
            <Link href='/github'>
                <a>GitHub</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}