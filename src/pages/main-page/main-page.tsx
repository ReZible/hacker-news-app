import { Button } from '@mui/material';
import { StoryList } from '../../components/story-list/story-list';
import { useGetNewStroriesQuery } from '../../services/api';
import { Loader } from '../../components/loader/loader';

function MainPage() {
	const { data, isLoading, isError, refetch } = useGetNewStroriesQuery(
		undefined,
		{
			pollingInterval: 60000,
		}
	);

	const handleUpdateClick = () => {
		refetch();
	};

	return (
		<>
			<Button
				variant='contained'
				onClick={handleUpdateClick}
				disabled={!data}
			>
				Update news
			</Button>
			{isLoading && <Loader />}
			{isError && <p>Couldn`t get the news :C</p>}
			{data && <StoryList storiesId={data} />}
		</>
	);
}

export { MainPage };
