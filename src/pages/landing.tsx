import React from 'react';
import '../styles/global.css';
import '../styles/pages/landing.css';
import LogoImg from '../images/logo.svg';

import {Link} from 'react-router-dom';

import {FiArrowRight} from 'react-icons/fi';

function Landing() {
	return (
		<div id='page-landing'>
			<div className='content-wrapper'>
				<img src={LogoImg} alt='' />

				<main>
					<h1> Lever felicidade para o mundo</h1>
					<p>Visite orfanatos e mude o dia de muitas crianças.</p>
				</main>

				<div className='location'>
					<strong>Diadema</strong>
					<span>São Paulo</span>
				</div>

				<Link to='/app' className='enter-app'>
					<FiArrowRight size={26} color='rgba(0, 0, 0, 0.6)' />
				</Link>
			</div>
		</div>
	);
}

export default Landing;
