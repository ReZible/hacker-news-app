import { useState } from 'react';
import { Box, CircularProgress, IconButton, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useGetCommentByIdQuery } from '../../services/api';
import './comment-card.sass';

type CommentCardProps = {
	id: string;
};

const initialNeedLoadMore = false;

function CommentCard({ id }: CommentCardProps) {
	const { data, isError, isLoading } = useGetCommentByIdQuery(id);
	const [needLoadMore, setNeedLoadMore] = useState(initialNeedLoadMore);
	const canLoadMore = !!(data && data.kids);

	const handleLoadMore = () => {
		setNeedLoadMore(!needLoadMore);
	};

	if (data && data.deleted) return null;

	return (
		<div className='comment-card'>
			<div className='comment-card__more-comment'>
				{canLoadMore ? (
					<IconButton onClick={handleLoadMore}>
						{needLoadMore ? (
							<ExpandMoreIcon />
						) : (
							<NavigateNextIcon />
						)}
					</IconButton>
				) : (
					''
				)}
			</div>
			<div className='comment-card__body'>
				{isLoading ? <CircularProgress /> : ''}
				{isError || !data ? (
					<p>An error occurred while getting the comment :C</p>
				) : (
					''
				)}
				{data && data.by}: {data && data.text}
				{canLoadMore &&
					needLoadMore &&
					data.kids?.map((k) => (
						<Box key={k}>
							<Divider sx={{ m: '20px 0' }} />
							<CommentCard id={k} />
						</Box>
					))}
			</div>
		</div>
	);
}

export { CommentCard };
