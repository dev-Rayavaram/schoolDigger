import React,{Component} from 'react';
import { Button } from 'react-bootstrap';


class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            schoolsList:[],
            isLoaded:false
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd(e){
            alert(e)
    }
    componentDidMount(){
        console.log("home componentDidMount",this.props.data)

        if(this.props.data !==null && this.props.data!==undefined){
            console.log("inside Home componentDidMount")
            Object.values(this.props.data).map((school,index)=>this.state.schoolsList.push(school)) 
            this.setState({isLoaded:true})           
        }
        console.log("schools list data",this.state.schoolsList)
    }
    render(){
            if(this.state.isLoaded===true){
                console.log("inside schoollist render",this.state.schoolsList)
                return (
                    <div className="main">
                        {Object.values(this.state.schoolsList).map((item,index)=>{return(
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
    
export default Home;

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
                <Button type="button" value ={props.value.schoolid}  >Favorites</Button>

            </div>
         </React.Fragment>

    )
}