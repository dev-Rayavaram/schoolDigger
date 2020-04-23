import React,{Component} from 'react';
class Home extends Component {
        constructor(props){
                super(props)
                this.state={
                    schoolsList:[]
                }
            }
            render(){
                    console.log("this.props",this.props)
                if(this.props.data !==null && this.props.data!==undefined){
                        return(
                                this.props.map(school=>{return(
                                        <React.Fragment>
                                        <h3>School: {school}</h3>
                                        </React.Fragment>

                                )})
                        )
                }
                else{
                        return(
                                <React.Fragment>
                                        <h3>School: </h3>
                                </React.Fragment>
                        )                        
                }
        }         
 };    
export default Home;