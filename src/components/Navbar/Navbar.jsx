import { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.scss'

const Navbar = () => {
	const menuList = ['home', 'recovery', 'Cloud', 'Contact']

	const [nav, setNav] = useState(false)
	const handleNav = () => setNav(!nav)

	return (
		<div className={`navbar ${nav ? 'active' : ''}`} onClick={() => setNav(false)}>
			{nav && (
				<div className="blur"></div>
			)}
			<div className="navbar__container" onClick={(e) => e.stopPropagation()}>
				<div className="navbar__logo-box">
					<SiDatabricks className='navbar__logo' />
					<h1 className='navbar__title h1'>Secured</h1>
				</div>
				<ul className='navbar__menu'>
					{menuList.map((link, index) => (
						<li className="navbar__el" key={link + index}><a className="navbar__link" href={`/${link}`}>{link}</a></li>
					))}
					<div className="navbar__btn-box">
						<a href="/" className="navbar__btn btn">Sign in</a>
					</div>
				</ul>

				<div className="navbar__burger" onClick={handleNav}>
					{nav ? (
						<FaTimes className="navbar__icon" />
					) : (
						<FaBars className="navbar__icon" />
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar