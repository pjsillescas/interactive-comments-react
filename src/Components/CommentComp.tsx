import { Col, Row } from "react-bootstrap";
import CommentHeader from "./CommentHeader";
import CommentScore from "./CommentScore";
import { Comment, User } from "./types";

type Props = {
	comment: Comment
	currentUser: User
}

export default function CommentComp({ comment, currentUser }: Props) {
	const onDeleteComment = (c: Comment) => console.log(`delete comment ${c.id}`);
	const onEditComment = (c: Comment) => console.log(`edit comment ${c.id}`);
	const onReplyComment = (c: Comment) => console.log(`reply comment ${c.id}`);
	return (
		<Row>
			<Row className="comment">
				<Col lg={1} className="d-flex align-content-middle">
					<CommentScore value={comment.score}/>
				</Col>
				<Col lg={11} >
					<CommentHeader comment={comment} currentUser={currentUser}
						onDeleteComment={onDeleteComment} onEditComment={onEditComment}
						onReplyComment={onReplyComment} />
					<div className="comment-content">{comment.content}</div>
				</Col>
			</Row>
			{comment.replies && comment.replies.length > 0 && (
				comment.replies.map((reply) => (
					<Row key={`reply-${reply.id}`} className="d-flex ms-auto">
						<Col key={`margin-${reply.id}`} lg={1} >
							<div className="reply-margin"></div>
						</Col>
						<Col key={`reply-${reply.id}`} lg={11} className="d-flex align-content-right">
							<CommentComp key={reply.id} comment={reply} currentUser={currentUser} />
						</Col>
					</Row>
				))
			)}
		</Row>
	);
}