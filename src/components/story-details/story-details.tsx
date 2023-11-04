import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { IStory } from '../../models/stories';
import { formatDateFromTimeStamp } from '../../ulits/format-date/format-date';
import { useLazyGetStoryByIdQuery } from '../../services/api';

import { CommentList } from '../comment-list/comment-list';
import './story-details.sass';

type StoryDetailsProps = {
	story: IStory;
};

function StoryDetails({ story }: StoryDetailsProps) {
	const { by, time, title, kids, id } = story;
	const [currentCommentIds, setCurrentCommentIds] = useState(kids);
	const [getStoryById] = useLazyGetStoryByIdQuery();

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const handleUpdateComments = () => {
		getStoryById(id)
			.unwrap()
			.then((data) => {
				if (data.kids) setCurrentCommentIds(data.kids);
			})
			.catch((err) => alert(err.message));
	};

	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	};

	const dateInTimeStamp = time * 1000;
	const formattedDate = formatDateFromTimeStamp(dateInTimeStamp, options);

	return (
		<div className='story-details__content'>
			<Typography className='story-details__content-title' gutterBottom>
				Title: {title}
			</Typography>
			<div className='story-details__content-body'>
				<Typography
					className='story-details__content-body__item'
					variant='body2'
				>
					Read More
				</Typography>
				<Typography
					className='story-details__content-body__item'
					variant='body2'
				>
					Date: {formattedDate}
				</Typography>
				<Typography
					className='story-details__content-body__item'
					variant='body2'
				>
					Author: {by}
				</Typography>
				<Typography
					className='story-details__content-body__item'
					variant='body2'
				>
					Comments: {currentCommentIds?.length || 0}
				</Typography>
			</div>
			<div className='story-details__content-comments'>
				<div className='story-details__content-comments__wrapper'>
					{currentCommentIds && currentCommentIds.length > 0 ? (
						<CommentList commentIds={currentCommentIds} />
					) : (
						'There are no comments yet'
					)}
				</div>
			</div>
			<div className='story-details__content-actions'>
				<Button
					className=''
					variant='contained'
					color='primary'
					onClick={handleUpdateComments}
				>
					Update comments
				</Button>
				<Button
					className=''
					variant='contained'
					color='primary'
					onClick={handleGoBack}
				>
					Back to all news
				</Button>
			</div>
		</div>
	);
}

export { StoryDetails };
