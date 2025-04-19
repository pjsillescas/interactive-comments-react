import { Row } from "react-bootstrap";
import { User } from "./types";

type Props = {
	user : User
}
export default function AddComment({ user } : Props) {
	return (
		<Row className="add-comment">
			<img src={user.image.png} alt={user.username} />
			<textarea placeholder="Add a comment..." />
			<button type="submit">Send</button>
		</Row>
	);
}