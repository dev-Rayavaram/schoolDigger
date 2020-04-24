import React,{Component} from 'react';
/*
    create a class component
    initialize with empty state variables
    export component
*/
class SchoolsList extends Component {
    constructor(props){
        super(props)
        this.state={
            schoolsList:[],
            isLoaded:false
        }
    }
    /*
        IF state from location props is NOT null && NOT undefined
            map through location props state 
            push each element to schoolsList state
            set isLoaded to true
    */
    componentDidMount=()=>{
      //  console.log("schools list data componentDidMount",this.props.location.state)

        if(this.props.location.state !==null && this.props.location.state!==undefined){
            let items = this.props.location.state;
       //     console.log("inside componentDidMount items" ,items)
            if(items.length !==0){
                let localSchoolsList = items.schoolList;
                localSchoolsList.map((school,index)=>this.state.schoolsList.push(school)) 
                this.setState({isLoaded:true})
             //   console.log("inside componentDidMount items ",this.state.schoolsList);         
            }
         }
    //    console.log("schools list data in SchoolsList Class",this.state.schoolsList)
    }
    render=()=>{
            if(this.state.isLoaded===true && this.state.schoolsList.length !==0){
           //     console.log("inside schoollist render",this.state.schoolsList[0])
                let items = this.state.schoolsList;
           //     console.log("items inside schoolList render",items)
                return (
                    <div className="main">
                        <div className="sub-main-2">
                                <h1>Your Favorites are</h1>
                                <ul>
                                    <>
                                    {items.map((item,index)=>
                                        <li key={index}>
                                            {item}
                                        </li>
                                    )}  
  
                                     </>
                                </ul>
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
