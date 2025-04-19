export default function CommentScore({ value }: { value: number }) {
	return (
		<div className="comment-score flex h-full justify-center">
			<button className="plus">+</button>
			<div className="score">{value}</div>
			<button className="minus">-</button>
		</div>
	);
}