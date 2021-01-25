import {useGlobalContext} from './context';
import {useHistory} from 'react-router-dom';

const Login = () => {
	const history = useHistory();
	const {setIsAuthenticated, isAuthenticated} = useGlobalContext();
	if(isAuthenticated){
		return history.push('/');
	}
	const handleLogin = () => {
		setIsAuthenticated(true);
		history.push('/profile');

	}



	return <div>

			<button className="btn btn-primary" onClick={handleLogin}>Login</button>

	</div>
}

export default Login;