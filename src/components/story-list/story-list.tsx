import { Box } from '@mui/material';
import { StoryCard } from '../story-card/story-card';

type StoryListProps = {
	storiesId: string[];
};

function StoryList({ storiesId }: StoryListProps) {
	return storiesId?.map((id) => (
		<Box key={id} sx={{ m: '20px 0' }}>
			<StoryCard id={id} />
		</Box>
	));
}

export { StoryList };
