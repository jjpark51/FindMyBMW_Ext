import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../static/navigation.scss'


function Navigation() {

    return (
        <div className='navbar'>
            <div className='leftside'>
            <Link to={'/'} className='bmw-icon'></Link>
            <Link to={'/'} className='mini-icon'> </Link>
                <div className='bmw-conf-li'><a  href="https://www.bmw.co.kr/ko/index.html"  target='_blank' style={{color: 'whitesmoke', textDecoration: 'none', fontSize: '12pt'}}>BMW</a></div>
                <div className='mini-conf-li'><a href='https://www.mini.co.kr/ko_KR/home.html'   target='_blank' style={{color: 'whitesmoke', textDecoration: 'none', fontSize: '12pt'}}>MINI</a></div>
                <div className='bmw-drive-li'><a href="https://driving-center.bmw.co.kr/" target='_blank' style={{color: 'whitesmoke', textDecoration: 'none', fontSize: '12pt'}}>BMW Driving Center</a></div>
                <Link to={'/'} style={{color: 'whitesmoke', textDecoration: 'none'}}></Link>
            </div>
            <ul className='rightside'>
                
            </ul>
        </div>
    )
}

export default Navigation