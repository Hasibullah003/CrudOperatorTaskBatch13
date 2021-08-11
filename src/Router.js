import { BrowserRouter as Router,Link,Switch,Route} from "react-router-dom"
// import Home from "./Components/Home"
import Accounts from "./Components/Accounts"
import Register from "./Components/Register"
import AddCircleIcon from '@material-ui/icons/AddCircle';

export const routing=(
<Router>
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light me-2">
{/* <Link className="navbar-brand" to="/home">HOME</Link> */}
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ">
    <li className="nav-item">
      <Link className="nav-link active" to="/accounts">Achievements & Certification</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link active" to="/register"><AddCircleIcon/></Link>
  </li>
   
  </ul>
</div>
</nav>
</div>
<Switch>

<Route exact path="/" component={Accounts} />
<Route exact path="/accounts" component={Accounts} />
<Route path="/register" component={Register} />

</Switch>
</Router>
)