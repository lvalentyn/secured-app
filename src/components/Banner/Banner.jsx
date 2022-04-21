import './Banner.scss'
import DataBg from '../../assets/data-bg.png'

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__bg">
				<img src={DataBg} alt="data-bg" />
			</div>
			<div className="container">
				<div className="banner__content">
					<h2 className="banner__title h2">
						<span>Data</span> Recovery
					</h2>
					<p className="banner__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, assumenda quibusdam. Enim optio tenetur nostrum vel voluptate, iusto saepe doloremque.</p>
					<div className="banner__btn-box">
						<a href="/" className="banner__btn btn">Sign Up</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner