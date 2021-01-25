import {Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import Custom from './Custom';
import {useGlobalContext} from './context';

function App() {
	
	const {isAuthenticated} = useGlobalContext();
  return (
  	<div>
    	<Link to="/" className="btn btn-outline-danger">Home</Link>
    	{isAuthenticated && <Link to="/profile" className="btn btn-outline-danger">Profile</Link>}
    	{!isAuthenticated && <Link to="/login" className="btn btn-outline-danger">Login</Link>}
    	<Link to="/custom" className="btn btn-outline-danger">Custom</Link>	
	    <div className="row">
	    	<div className="offset-3 col-6">
		    	<h1>Welcome to my app</h1>
		    	<Switch>
			    	<Route exact path="/" children={<Home />} />
			    	<Route path="/profile" children={<Profile />} />
			    	<Route path="/login" children={<Login />} />
			    	<Route path="/custom" children={<Custom />} />
		    	</Switch>
	    	</div>
	    	
	    </div>
  	</div>
	    	
    
  );
}

export default App;
