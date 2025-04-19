import { useState, useEffect } from "react";
import { Data, User, Comment } from "../Components/types";

const useComments = () => {
	const [comments, setComments] = useState<Comment[]>([]);
	const [currentUser, setCurrentUser] = useState<User| undefined>(undefined);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchComments = async () => {
			try {
				//const jsonFilePath = new URL("../../public/data/data.json", import.meta.url).href;
				const jsonFilePath = new URL("/data/data.json", import.meta.url).href;
				const response = await fetch(jsonFilePath);
				if (!response.ok) {
					throw new Error(`Failed to fetch JSON: ${response.statusText}`);
				}

				const data = await response.json() as Data;
				console.log(data);
				setComments(data.comments);
				setCurrentUser(data.currentUser);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchComments();
	}, []);

	return { comments, currentUser, loading, error };
};

export default useComments;