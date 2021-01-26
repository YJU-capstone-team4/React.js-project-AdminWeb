import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="headerBox">
            <span　className='title'><Link to='/bigGurume'> Big Gurume </Link></span>
            <ul>
                <li ><Link to='/bigGurume'> 유튜버 </Link></li>
                <li ><Link to='/bigGurume/hashtag'> 해시태그 </Link></li>
                <li ><Link to='/bigGurume/flow'> 동선 </Link></li>
                <li ><Link to='/bigGurume/user'> 유저 </Link></li>
                <li ><Link to='/bigGurume/collectData'> 데이터 수집 </Link></li>
            </ul>

            <span className='login'><Link to='/'>로그인페이지</Link></span>
        </div>
    )
}

export default Header
