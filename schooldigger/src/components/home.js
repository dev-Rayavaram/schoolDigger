import React,{Component,useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';

/*
    create stateful component Home
    initialize state with empty values
    export Home
*/
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            schoolsList:[],
            savedSchoolsList:[],
            isLoaded:false
        }
    }
    /*
        IF props.data is NOT null && NOT unidentified
        map through props data and add items to schoolsList array state variable
    */
    componentDidMount=()=>{
     //   console.log("home componentDidMount",this.props.data)

        if(this.props.data !==null && this.props.data!==undefined){
          //  console.log("inside Home componentDidMount")
            Object.values(this.props.data).map((school,index)=>this.state.schoolsList.push(school)) 
            this.setState({isLoaded:true})           
        }
      //  console.log("schools list data",this.state.schoolsList)
    }
    /*
        IF schoolsList state is NOT null && NOT unidentified
        then render child elements and send setSavedList method as a prop
    */
    render=()=>{
            if(this.state.isLoaded===true){
             //   console.log("inside schoollist render",this.state.schoolsList)
                return (
                    <div className="main">
                        <div className="sub-main-2">
                            {Object.values(this.state.schoolsList).map((item,index)=>{return(
                                <SchoolData key={index} value={item} data={item} setSavedList={this.props.setSavedList}/>
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
    functional components using useState,useEffect. useState is similar to setState in class component
    and useEffect waits for useState to finish job before returning data, so calling
    setSavedList inside useEffect will get the updated data from useState
    https://www.youtube.com/watch?v=-MlNBTSg_Ww
    https://medium.com/javascript-in-plain-english/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
*/
/*
    create stateless component SchoolData    
*/
const SchoolData=(props)=>{
    const[state,addItem]=useState([]);
/*
    create a method with item one parameter
    add state to current state using HOOK useState
*/
    const setStateHandler=(item)=>{
      //  console.log("inside setStateHandler: ",item)
        addItem(state => [...state, item])
       // console.log("inside setStateHandler state inside function",state)
     }
/*
create an event handler for button
get event target value
call method to handle state
to get updated state each time use REACT HOOK useEffect
*/
    const handleAdd=(e)=>{
        e.preventDefault();
        const schoolName=e.target.value;
        setStateHandler(schoolName); 
    }
    useEffect(() => {
       // console.log("inside setStateHandler state useEffect",state);
        props.setSavedList(state)

      });

  //  console.log("props inside functional ",props)
  /*
      get data from props
      IF ranks list has elemnts
        get data for latest year and rank
      return rendered elements with  props data
  */
    let ranks = props.value.rankHistory
    let latestYear='';
    let latestRank='';
        if(ranks!==null && ranks.length>0){
            latestRank=ranks[0]
            latestYear=ranks[0].year;
            latestRank=ranks[0].rank
        }
      // console.log(" latestRank is :",latestRank) 
    return(
        <React.Fragment>
            <div className="container">
                <h3>School:{props.value.schoolName}</h3>
                <h3>Phone:{props.value.phone}</h3>
                <h5 id="rank">Year:{latestYear} Rank: {latestRank} </h5>  
                <a href={props.value.url}>Link  <i className=" fa fas fa-link"></i></a>
                <Button type="button" value ={props.value.schoolName}  onClick={handleAdd.bind(null)}>My Schools List</Button>

            </div>
         </React.Fragment>

    )
}