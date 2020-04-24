import React,{Component,useState} from 'react';
import { Button } from 'react-bootstrap';


class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            schoolsList:[],
            savedSchoolsList:[],
            isLoaded:false
        }
    }
 
    componentDidMount=()=>{
        console.log("home componentDidMount",this.props.data)

        if(this.props.data !==null && this.props.data!==undefined){
            console.log("inside Home componentDidMount")
            Object.values(this.props.data).map((school,index)=>this.state.schoolsList.push(school)) 
            this.setState({isLoaded:true})           
        }
        console.log("schools list data",this.state.schoolsList)
    }
    render=()=>{
            if(this.state.isLoaded===true){
                console.log("inside schoollist render",this.state.schoolsList)
                return (
                    <div className="main">
                        <div className="sub-main-2">
                            {Object.values(this.state.schoolsList).map((item,index)=>{return(
                                <Item key={index} value={item} data={item} showSavedList={this.props.showSavedList}/>
                            )})}  
                        </div>
                    </div>
        
                );
            }
            else{
                return (
                    <div className="main">
                        <div className="sub-main-2">
                            <h3 className="title">School</h3>
                        </div>
                    </div>
        
                );
            }
         
    }
 };

 
export default Home;

/*  The following function uses react HOOKs for maintaining state in stateless components that are 
    functional components using useState,useReducer. useState is similar to setState in class component
    and useReducer behaves similar to Redux reducer and here are the links for resources
    showSavedList is reducer action and addItem is uset to set new state
    https://www.youtube.com/watch?v=-MlNBTSg_Ww
    https://medium.com/javascript-in-plain-english/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
*/
const Item=(props)=>{
    const[state,addItem]=useState([]);
    const handleAdd=(e)=>{
        e.preventDefault();
        const schoolName=e.target.value;
        addItem(state => [...state, schoolName])
        console.log("state inside function",state)
        props.showSavedList(state)
    }
    console.log("props inside functional ",props)
    let ranks = JSON.stringify(props.value.rankHistory)
    return(
        <React.Fragment>
            <div className="container">
                <h3>School:{props.value.schoolName}</h3>
                <h3>Phone:{props.value.phone}</h3>
                <a href={props.value.url}>Link</a>
                <h5 id="rank">Rank:{ranks}</h5>
                <Button type="button" value ={props.value.schoolName}  onClick={handleAdd.bind(null)}>Favorites</Button>
            </div>
         </React.Fragment>

    )
}