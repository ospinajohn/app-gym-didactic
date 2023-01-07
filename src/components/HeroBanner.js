import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

function HeroBanner() {
	return (
		<Box
			sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
			position='relative'
			p='20px'>
			<Typography color='#FF2625' fontWeight='600' fontSize='26px'>
				Fitness Club
			</Typography>
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: '44px', xs: '40px' } }}
				mb='5px'
				mt='3px'>
				Suda, sonríe y repite
			</Typography>
			<Typography fontSize='22px' lineHeight='35px'>
				Consulta los ejercicios más eficaces <br /> personalizados para ti
			</Typography>
			<Stack>
				<a
					href='#exercises'
					style={{
						marginTop: '10px',
						textDecoration: 'none',
						width: '200px',
						textAlign: 'center',
						background: '#FF2625',
						padding: '14px',
						fontSize: '22px',
						textTransform: 'none',
						color: 'white',
						borderRadius: '4px',
						fontFamily: 'Roboto',
					}}>
					Ver Ejercicios
				</a>
			</Stack>
			<Typography
				fontWeight={600}
				color='#FF2625'
				sx={{
					opacity: '0.1',
					display: { lg: 'block', xs: 'none' },
					fontSize: '100px',
				}}>
				Fitness
			</Typography>
			<img
				src={HeroBannerImage}
				alt='hero-banner'
				className='hero-banner-img'
			/>
		</Box>
	);
}

export default HeroBanner;