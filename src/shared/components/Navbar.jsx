import React from 'react'
import logo from '../../assets/icons/logo-full.svg'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return <>
    <div className='py-5'>
      <Link to={'/'}><img src={logo} alt="Full Logo" /></Link>
    </div>
  </>
}
