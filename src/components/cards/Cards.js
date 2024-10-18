import React from 'react'
import { TfiWrite } from "react-icons/tfi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdApps } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
import '../cards/Cards.css'

const Cards = () => {
  return (
    <div className="container">
<div className="logo-card">
  <TfiWrite />
  <h3>Business Registration</h3>
</div>
<div className="logo-card">
  <FaIndianRupeeSign />
  <h3>Billing Software</h3>
</div>
<div className="logo-card">
  <MdApps />
  <h3>Websites & Applications</h3>
</div>
<div className="logo-card">
  <LuSearchCheck />
  <h3>Jobs</h3>
</div>
</div>
  )
}

export default Cards