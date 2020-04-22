import React,{Component} from 'react';
import './App.scss';
import Header from './components/header'
import Footer from './components/footer'
import BrowserHistory from './components/browserHistory'
import QuickLinks from './components/quickLinks'
import SchoolsList from './components/schoolsList'
import Navbar from './components/navbar'
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom'



class  App extends Component {
  constructor(props){
    super(props);
    this.OnSearch = this.OnSearch.bind(this);
  }
  OnSearch(e){
    alert("Search clicked");
    e.preventDefault();

  }
  render(){
    return (
      <div className="App">
        <div className="header">
          <Header/>
          <Navbar onClick={this.OnSearch}/>
        </div>
        <div className="body">
                <Router>  
                <div className="main">
                  <nav> 
                      <ul className="menu">
                      <li>
                        <Link to="/" ></Link>
                      </li>
                      <li>
                        <Link to="/" >My Schools List</Link>
                      </li>
                      <li>
                        <Link to="/QuickLinks" >Resources</Link>
                      </li>
                     
                      <li>
                        <Link to="/SearchHistory">Search History</Link>
                      </li>
                    </ul>
                  </nav>
                  <Switch>
                       <Route exact path="/SearchHistory" component={BrowserHistory}>          
                      </Route> 
                      <Route exact path="/SchoolsList" component={SchoolsList}>          
                      </Route> 
                      <Route exact path="/QuickLinks" component={QuickLinks}>          
                      </Route>             
            
                   </Switch>
                </div>
                </Router>            
       </div>
      <div className="footer">
          <Footer/>
        </div>
      </div>

    );
  }
 
}

export default App;