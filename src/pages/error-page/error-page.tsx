import { useNavigate } from 'react-router-dom';
import { RootBoundary } from '../../components/root-boundary/root-boundary';
import './error-page.sass';

function ErrorPage() {
	const navigate = useNavigate();

	function handleGoMainPageClick() {
		navigate('/');
	}
	return (
		<main className='error'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<div className='error-message'>
				<i>
					<RootBoundary />
				</i>
			</div>
			<button
				type='button'
				className='error-button'
				onClick={handleGoMainPageClick}
			>
				<span>Go back to the main page</span>
			</button>
		</main>
	);
}

export { ErrorPage };
