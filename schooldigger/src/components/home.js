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
 
    componentDidMount=()=>{
     //   console.log("home componentDidMount",this.props.data)

        if(this.props.data !==null && this.props.data!==undefined){
          //  console.log("inside Home componentDidMount")
            Object.values(this.props.data).map((school,index)=>this.state.schoolsList.push(school)) 
            this.setState({isLoaded:true})           
        }
      //  console.log("schools list data",this.state.schoolsList)
    }
    render=()=>{
            if(this.state.isLoaded===true){
             //   console.log("inside schoollist render",this.state.schoolsList)
                return (
                    <div className="main">
                        <div className="sub-main-2">
                            {Object.values(this.state.schoolsList).map((item,index)=>{return(
                                <Item key={index} value={item} data={item} setSavedList={this.props.setSavedList}/>
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
const Item=(props)=>{
    const[state,addItem]=useState([]);
    const setStateHandler=(item)=>{
        console.log("inside setStateHandler: ",item)
        addItem(state => [...state, item])
        console.log("inside setStateHandler state inside function",state)
     }
    const handleAdd=(e)=>{
        e.preventDefault();
        const schoolName=e.target.value;
        setStateHandler(schoolName); 
    }
    useEffect(() => {
        console.log("inside setStateHandler state useEffect",state);
        props.setSavedList(state)

      });

  //  console.log("props inside functional ",props)
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
                <a href={props.value.url}>Link to the School website</a>

                <Button type="button" value ={props.value.schoolName}  onClick={handleAdd.bind(null)}>My Schools List</Button>

            </div>
         </React.Fragment>

    )
}