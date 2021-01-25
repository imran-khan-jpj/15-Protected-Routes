import {useGlobalContext} from './context';
import {Redirect, useHistory} from 'react-router-dom';

const Profile = () => {
	const history = useHistory();
	const {isAuthReq, isAuthenticated, setIsAuthenticated} = useGlobalContext();
	if(isAuthReq){
		if(!isAuthenticated){
			return <Redirect to="/login" />
		}
	}
	const handleLogout = () => {
		setIsAuthenticated(false);
		history.push('/login');
	}


	return <div>
		<h1>Profile Component</h1>
		<button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
		</div>
}

export default Profile;