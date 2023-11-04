import { Card, CardContent, Typography, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetStoryByIdQuery } from '../../services/api';
import { PATHES } from '../../router/pathes';
import { formatDateFromTimeStamp } from '../../ulits/format-date/format-date';
import './story-card.sass';

type StoryCardProps = {
	id: string;
};

function StoryCardSceleton() {
	return (
		<Card variant='outlined' sx={{ height: '150px' }}>
			<CardContent className='news-card__content'>
				<Skeleton width='50%' />
				<Skeleton width='70%' />
				<Skeleton width='70%' />
				<Skeleton width='70%' />
			</CardContent>
		</Card>
	);
}

function StoryCard({ id }: StoryCardProps) {
	const { data, isLoading, isError } = useGetStoryByIdQuery(id);

	if (isLoading) return <StoryCardSceleton />;

	if (isError || !data)
		return <p>An error occurred while getting the news :C</p>;

	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	};

	const dateInTimeStamp = data.time * 1000;
	const formattedDate = formatDateFromTimeStamp(dateInTimeStamp, options);

	return (
		<Link to={PATHES.STORY + id}>
			<Card variant='outlined' className='news-card'>
				<CardContent className='news-card__content'>
					<Typography
						className='news-card__content-title'
						gutterBottom
					>
						Title: {data.title}
					</Typography>
					<Typography variant='body2' gutterBottom>
						Raiting: {data.score}
					</Typography>
					<Typography variant='body2'>By: {data.by}</Typography>
					<Typography variant='body2'>
						Date: {formattedDate}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
}

export { StoryCard };
