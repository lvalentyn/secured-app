import './Hero.scss'
import CyberBg from '../../assets/cyber-bg.png'

const Hero = () => {
	return (
		<div className='hero'>
			<div className="hero__bg">
				<img src={CyberBg} alt="cyber-bg" />
			</div>
			<div className="hero__container">
				<div className="hero__content">
					<h1 className='hero__title h1'>Data</h1>
					<p className='hero__title hero__title--blue h1'>Secured</p>
					<p className='hero__title h1'>Protection</p>
					<div className="hero__btn-box">
						<button className="hero__btn">Learn More</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero