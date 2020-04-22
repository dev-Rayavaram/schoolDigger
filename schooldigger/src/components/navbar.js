import React from 'react';
import { Button } from 'react-bootstrap';


function Navbar (props)
    {
        return (
          <React.Fragment>
            <input type='text' className='input' name='search'></input>
            <Button variant="primary" type="submit" onClick={props.onClick}> Search</Button>
          </React.Fragment>     
        );
        
      }
export default Navbar;