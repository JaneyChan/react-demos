import React from 'react'
import FooterContainers from './FooterContainers'

const Footer = () => (
  <div>
    show 
    {" : "}
    <FooterContainers filter="SHOW_ALL">All</FooterContainers>
    {" , "}
    <FooterContainers filter="SHOW_ACTIVE">Active</FooterContainers>
    {" , "}
    <FooterContainers filter="SHOW_COMPLETED">Completed</FooterContainers>
  </div>
)

export default Footer
