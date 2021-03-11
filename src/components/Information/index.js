import React from 'react';
import jog from './Images/jogging.jpg';
import cycling from './Images/gowes.jpg';
import gym from './Images/yoga.jpg';
// import GoogleMap from "../../components/GoogleMap";
import LeafletMap from '../../components/LeafletMap';

function information() {
	return (
		<div className='information-body'>
			<div className='information'>
				<div className='information__left'>
					<div className='information__left__uppictcontainer'>
						<img className='left-up-pict' src={cycling} alt='' />
					</div>
					<div className='information__left__downpictcontainer'>
						<img className='left-down-pict' src={jog} alt='' />
					</div>
				</div>
				<div className='information__right'>
					<div className='information__right__text'>
						<h1>Various Workout Mode</h1>
						<p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text.</p>
					</div>
					<div className='information__right__pictcontainer'>
						<img className='right-pict' src={gym} alt='' />
					</div>
				</div>
			</div>
			<div className='leafletmap'>
				<LeafletMap />
			</div>
			<div className='map'>
				<div className='text__container'>
					<h1>Track Your Movement</h1>
					<p>
						In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on
						meaningful content
					</p>
				</div>
			</div>
		</div>
	);
}

export default information;
