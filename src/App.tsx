import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import AddComment from './Components/AddComment';
import Attribution from './Components/Attribution'
import Comments from './Components/Comments';
import useComments from './Hooks/useComments'

function App() {
	const { comments, currentUser, loading, error } = useComments();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<Container fluid="lg">
			<h1>Interactive Comments</h1>
			{!!currentUser && (<>
				<Comments comments={comments} currentUser={currentUser}/>
				<AddComment user={currentUser} />
			</>)}
			<Attribution />
		</Container>
	)
}

export default App;
