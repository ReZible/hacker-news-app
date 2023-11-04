import { CircularProgress } from '@mui/material';
import './loader.sass';

function Loader() {
	return (
		<div className='loader__container'>
			<CircularProgress />
		</div>
	);
}

export { Loader };
