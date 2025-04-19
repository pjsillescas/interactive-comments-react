import { Col, Row } from "react-bootstrap";
import type { User, Comment } from "./types";

type Props = {
	comment: Comment;
	currentUser: User;
	onDeleteComment: (comment: Comment) => void
	onEditComment: (comment: Comment) => void
	onReplyComment: (comment: Comment) => void
}
export default function CommentHeader({ comment, currentUser,
	onDeleteComment, onEditComment, onReplyComment }: Props) {
	const isCurrentUser = comment.user.username === currentUser.username;

	return (
		<Row className="comment-header d-flex align-items-center">
			<Col lg={1}>
				<img src={comment.user.image.png} alt={comment.user.username} />
			</Col>
			<Col lg={1}>{comment.user.username}</Col>

			<Col lg={10}>
				{!isCurrentUser && (<a href="#reply" className="reply" onClick={() => onReplyComment(comment)}>Reply</a>)}
				{!!isCurrentUser && (<>
					<a href="#delete" className="delete me-2" onClick={() => onDeleteComment(comment)}>Delete</a>
					<a href="#edit" className="edit" onClick={() => onEditComment(comment)}>Edit</a>
				</>)}
			</Col>
		</Row>
	);
}