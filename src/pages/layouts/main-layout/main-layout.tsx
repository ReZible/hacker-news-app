import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from '../../../components/header/header';

function MainLayout() {
	return (
		<Container maxWidth='md'>
			<Header />
			<main className='main'>
				<Outlet />
			</main>
		</Container>
	);
}

export { MainLayout };
