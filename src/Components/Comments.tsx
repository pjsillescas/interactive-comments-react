import { Row } from 'react-bootstrap';
import CommentComp	from './CommentComp';
import type { Comment, User } from './types';
type Props = {
	comments: Comment[]
	currentUser: User
}

export default function	Comments ({ comments, currentUser }: Props) {
	return (
		<Row className="comments">
			{comments.map((comment) => (
				<CommentComp key={comment.id} comment={comment} currentUser={currentUser} />
			))}
		</Row>
	);
}