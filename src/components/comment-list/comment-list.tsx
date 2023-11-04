import { Box, Divider } from '@mui/material';
import { CommentCard } from '../comment-card/comment-card';
import './comment-list.sass';

type CommentListProps = {
	commentIds: string[];
};

function CommentList({ commentIds }: CommentListProps) {
	return commentIds.map((id) => (
		<Box key={id}>
			<div className='comment-box'>
				<CommentCard id={id} />
			</div>
			<Divider />
		</Box>
	));
}

export { CommentList };
