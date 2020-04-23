import React,{Component} from 'react';
class SchoolsList extends Component {
    constructor(props){
        super(props)
        this.state={
            schoolsList:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        console.log("schools list data componentDidMount",this.props.location.state)

        if(this.props.location.state !==null && this.props.location.state!==undefined){
            console.log("inside componentDidMount")
            Object.values(this.props.location.state).map((school,index)=>this.state.schoolsList.push(school)) 
            this.setState({isLoaded:true})           
        }
        console.log("schools list data",this.state.schoolsList)
    }
    render(){
            if(this.state.isLoaded===true){
                console.log("inside schoollist render",this.state.schoolsList[0])
                return (
                    <div className="main">
                        {Object.values(this.state.schoolsList[0]).map((item,index)=>{return(
                            <Item key={index} value={item} data={item}/>
                          )})}  
                    </div>
        
                );
            }
            else{
                return (
                    <div className="main">
                            <h3 className="title">School</h3>
                    </div>
        
                );
            }
         
    }
 };
    
export default SchoolsList;

function Item(props){
    console.log("props inside functional ",props)
    let ranks = JSON.stringify(props.value.rankHistory)
    return(
        <React.Fragment>
            <div className="container">
                <h3>School:{props.value.schoolName}</h3>
                <h3>Phone:{props.value.phone}</h3>
                <a href={props.value.url}>Link</a>
                <h5 id="rank">Rank:{ranks}</h5>

            </div>
         </React.Fragment>

    )
}