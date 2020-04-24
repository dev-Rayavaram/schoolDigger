import React from 'react';
/*
    DECLARE BrowserHistory as a function component 
    IF location param state is not null && not undefined
        map through props location state and return each element to render
*/
function BrowserHistory(props) {
    if(props.location.state !==null && props.location.state!==undefined){
        return (
            <div className="main">
                 <div className="sub-main-2">
                     <div className="container">                        
                        <ul>
                            <>
                            {Object.values(props.location.state).map((item,index)=>
                                <li key={index}>
                                   <h3>Your previous search location:</h3> {item[0]}  {item[1]}
                                </li>
                            )}  

                             </>
                        </ul>
                    </div>

                </div>
            </div> 
        );

    }
    else{
        return (
            <div className="main">
                 <div className="sub-main-2">
                     <div className="container">    
                        Search to get results  
                    </div>
                </div>                  
            </div>
        )    
    }
};
    
export default BrowserHistory;