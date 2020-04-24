import React,{Component} from 'react';
class SchoolsList extends Component {
    constructor(props){
        super(props)
        this.state={
            schoolsList:[],
            isLoaded:false
        }
    }
    componentDidMount=()=>{
        console.log("schools list data componentDidMount",this.props.location.state)

        if(this.props.location.state !==null && this.props.location.state!==undefined){
            console.log("inside componentDidMount")
            Object.values(this.props.location.state).map((school,index)=>this.state.schoolsList.push(school)) 
            this.setState({isLoaded:true})           
        }
        console.log("schools list data in SchoolsList Class",this.state.schoolsList)
    }
    render=()=>{
            if(this.state.isLoaded===true){
                console.log("inside schoollist render",this.state.schoolsList[0])
                return (
                    <div className="main">
                        <div className="sub-main-2">
                            <h1>Your Favorites are</h1>
                                    {Object.values(this.state.schoolsList[0]).map((item,index)=>{return(
                                    <output key={index}>School Name : {item}</output>
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
    
export default SchoolsList;
