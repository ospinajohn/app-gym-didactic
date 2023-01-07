import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

import HorizontalScrollball from './HorizontalScrollbar';

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
	const [search, setSearch] = useState('');
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				exerciseOptions
			);
			setBodyParts(['all', ...bodyPartsData]);
		};
		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises',
				exerciseOptions
			);

			const searchedExercises = exercisesData.filter(
				item =>
					item.name.toLowerCase().includes(search) ||
					item.target.toLowerCase().includes(search) ||
					item.equipment.toLowerCase().includes(search) ||
					item.bodyPart.toLowerCase().includes(search)
			);

			// window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

			setSearch('');
			setExercises(searchedExercises);
		}
	};
	return (
		<Stack alignItems='center' mt='150px' justifyContent='center' p='20px'>
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: '44px', xs: '30px' } }}
				mb='49px'
				textAlign='center'>
				Ejercicios impresionantes <br />
				que debes conocer.
			</Typography>
			<Box position='relative' mb='72px'>
				<TextField
					height='76px'
					sx={{
						input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
						width: { lg: '800px', xs: '350px' },
						backgroundColor: '#fff',
						borderRadius: '40px',
						// paddingLeft: '40px',
					}}
					value={search}
					onChange={e => setSearch(e.target.value.toLocaleLowerCase())}
					placeholder='Buscar ejercicios'
					type='text'
				/>
				<Button
					className='search-btn'
					sx={{
						bgcolor: '#FF2625',
						color: '#fff',
						textTransform: 'none',
						width: {
							lg: '175px',
							xs: '80px',
						},
						fontSize: {
							lg: '20px',
							xs: '14px',
						},
						height: '56px',
						position: 'absolute',
						right: '0',
					}}
					onClick={handleSearch}>
					Buscar
				</Button>
			</Box>
			<Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
				{/* Original */}
				<HorizontalScrollball
					data={bodyParts}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
				/>

				{/* Prueba */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
						gap: '20px',
					}}>
					{bodyParts.map((item, index) => (
						<Button
							key={index}
							sx={{
								bgcolor: bodyPart === item ? '#FF2625' : '#fff',
								color: bodyPart === item ? '#fff' : '#000',
								textTransform: 'none',
								width: {
									lg: '175px',
									xs: '80px',
								},
								fontSize: {
									lg: '20px',
									xs: '14px',
								},
								height: '56px',
							}}
							onClick={() => setBodyPart(item)}>
							{item}
						</Button>
					))}
				</Box>
			</Box>
		</Stack>
	);
}

export default SearchExercises;
