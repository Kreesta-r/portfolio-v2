import React from 'react'
import './experience.css'
import { javascript, python, css, html, nodejs, git, vue, tailwind,github,sass, mongodb,flutter, postgre,django, php, figma} from './icons.js'

export default function Experience() {
  return (
    <div className='experience' data-aos="fade-in">
      <div className="exp-text">
          <h2>Experience</h2>
          <p>The world of web development is a constant evolution, and I've been thrilled to be a part of it for the past 3 years. Ever since I began my journey in this dynamic field, I've been captivated by its potential to create innovative solutions, connect people across the globe, and push the boundaries of what's possible online. This passion for exploration and learning has fueled my dedication to mastering the ever-changing landscape of web development.</p>
      </div>
      <div className="exp-blob">
     <div className="exp-side1">
     <h2 className='blob-title'>Technolgies i've worked with</h2>
      <div className="scroller">
       <ul className='tag-list scroller_inner'>
         <li className='exp-icon'>{javascript} </li>
         <li className='exp-icon'>{python} </li>
         <li className='exp-icon'>{css}</li>
         <li className='exp-icon'>{html}</li>
         <li className='exp-icon'><img src="/icons8-linux-96.png" alt="" height={50} width={50}/></li>
         <li className='exp-icon'><img src="/logo192.png" alt="" height={45} width={45}/></li>
         <li className='exp-icon'>{tailwind}</li>
         <li className='exp-icon'>{html}</li>
         <li className='exp-icon'>{css}</li>
         <li className='exp-icon'>{javascript} </li>
         <li className='exp-icon'>{python} </li>
          <li className='exp-icon'><img src="/icons8-linux-96.png" alt="" height={50} width={50}/></li>
          <li className='exp-icon'><img src="/logo192.png" alt="" height={45} width={45}/></li>
          <li className='exp-icon'>{git}</li>
          <li className='exp-icon' >{vue}</li>
          <li className='exp-icon'>{nodejs}</li>
          <li className='exp-icon'>{html}</li>
          <li className='exp-icon'>{javascript} </li>
         <li className='exp-icon'>{python} </li>
         <li className='exp-icon'>{css}</li>
         <li className='exp-icon'><img src="/icons8-linux-96.png" alt="" height={50} width={50}/></li>
          <li className='exp-icon'><img src="/logo192.png" alt="" height={45} width={45}/></li>
          <li className='exp-icon'>{tailwind}</li>
          <li className='exp-icon'>{git}</li>
          <li className='exp-icon'>{vue}</li>
          <li className='exp-icon'>{nodejs}</li>
       </ul>
       </div>
     </div>
       <div className="blob2">
        <h2 className='blob-title'>Others</h2>
        <div className='others' >
          <ul>
            <li className='exp-icon'>{mongodb}</li>
            <li className='exp-icon'>{postgre}</li>
            <li className='exp-icon'>{django}</li>
            <li className='exp-icon'>{php}</li>
            <li className='exp-icon'>{figma}</li>
            <li className='exp-icon'>{flutter}</li>
            <li className="exp-icon">{github}</li>
            <li className="exp-icon">{sass}</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
