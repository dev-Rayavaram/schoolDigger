
import React,{Component} from 'react';
import './styles/App.scss';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import BrowserHistory from './components/browserHistory'
import QuickLinks from './components/quickLinks'
import SchoolsList from './components/schoolsList'
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap';


const apiKey=process.env.REACT_APP_API_KEY
const appId=process.env.REACT_APP_ID
class  App extends Component {
  constructor(props){
    super(props);
    this.state={
        city:'',
        state:'',
        schools:[],
        browserHistory:[],
        isLoaded:false,
        savedList:[]
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.showSavedList=this.showSavedList.bind(this);

  }
  handleCityChange=(e)=>{
      this.setState({city:e.target.value})
  }
  handleStateChange=(e)=>{
    this.setState({state:e.target.value})
}
showSavedList=(e)=>{
  //console.log("showSavedList in APP.js ",e)
  if(e !==null && e.length !==0 ){
      e.map(item => this.state.savedList.push(item))
  }
 // console.log("showSavedList in App.js this.state.savedList",this.state.savedList);
}
async handleSearch(e){
      e.preventDefault();
      const city = this.state.city;
      const state = this.state.state;
      this.state.browserHistory.push([city,state])
      const url = `https://api.schooldigger.com/v1.2/schools?st=${state}&city=${city}&sortBy=rank&appID=${appId}&appKey=${apiKey}`;
      axios.headers={
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json', 
      }
      try{
        const res = await axios.get(url);
        const results = res.data;
        const schoolList = results.schoolList;        
        this.state.schools.push(...schoolList);
        this.setState({isLoaded:true})  
        console.log(" async await this.setState.school",this.state.schools)

       }
      catch (e){
        console.log(e);
      }
   }
 
  render(){
    console.log(this.state.isLoaded)
      if(this.state.isLoaded===true){  
      //  console.log("INSIDE APP.js ",BrowserHistory)
        return(
      <div className="App">
          <div className="header">
              <Header/>
              <>
                <input type='text' className='input' name='city' placeholder='Plano' value={this.setState.city} onChange={this.handleCityChange}></input>
                <input type='text' className='input' name='state' placeholder='TX' value={this.setState.state} onChange={this.handleStateChange}></input>
                <Button variant="primary" type="submit" onClick={this.handleSearch}> Search</Button>
               <Router>  
                <nav> 
                <ul className="menu">
                  <li>
                  <Link  to={{ pathname: '/SchoolsList', state: {schoolList: this.state.savedList } }} >My Schools List</Link>
                </li>
                <li>
                  <Link to={{ pathname: '/SearchHistory', state: {searchHistory: this.state.browserHistory } }} >Search History</Link>
                </li>
                <li>
                  <Link to="/QuickLinks" >Resources</Link>
                </li>
                <li>
                  <Link to='/' >Search Results</Link>
                </li>
                </ul>
                </nav>
                <Switch>
                  <Route exact path="/SearchHistory" component={BrowserHistory}>  
                  {this.props.children}

                </Route> 
                <Route exact path="/SchoolsList" component={SchoolsList}>  
                {this.props.children}

                </Route> 
                <Route exact path="/QuickLinks" component={QuickLinks}>          
                </Route>  
                <Home data={this.state.schools}  showSavedList={this.showSavedList}/>

                </Switch>
                </Router>            
              </>
          </div>
          <div className="body">
          </div>
          <div className="footer">
              <Footer/>
          </div>
        </div>
          )
          }
          else return (
              <div className="App">
                    <div className="header">
                       <Header/>
                          <>
                            <input type='text' className='input' name='city' placeholder='Plano' value={this.setState.city} onChange={this.handleCityChange}></input>
                            <input type='text' className='input' name='state' placeholder='TX' value={this.setState.state} onChange={this.handleStateChange}></input>
                            <Button variant="primary" type="submit" onClick={this.handleSearch}> Search</Button>
                            <Router>  
                              <nav> 
                                <ul className="menu">
                                  <li>
                                    <Link  to={{ pathname: '/SchoolsList', state:{schoolList: this.state.savedList } }} >My Schools List</Link>
                                </li>
                                <li>
                                    <Link to="/SearchHistory">Search History</Link>
                                </li>
                                <li>
                                    <Link to="/QuickLinks" >Resources</Link>
                                </li>
                                </ul>
                              </nav>
                            <Switch>
                                <Route exact path="/SearchHistory" component={BrowserHistory}>  
                                  {this.props.children}
                               </Route> 
                              <Route exact path="/SchoolsList" component={SchoolsList}>  
                                  {this.props.children}
                              </Route> 
                              <Route exact path="/QuickLinks" component={QuickLinks}>          
                            </Route>             
                          </Switch>
                      </Router> 
                  </>           
          </div>
          <div className="body">
          </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>

    );
  }
  
}

export default App;