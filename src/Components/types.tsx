export type Image = {
	png: string
	webp: string
}

export type Comment = {
	id: number
	content: string
	createdAt: string
	score: number
	user: User
	replies: Comment[]
	replyingTo?: string
}

export type User = {
	image: Image
	username: string
}

export type Data = {
	currentUser: User
	comments: Comment[]
}