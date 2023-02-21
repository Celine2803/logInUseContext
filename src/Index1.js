import React from 'react'
import {userContext} from './Context';
import { useContext } from 'react';

function Index1(){
    const {user,setUser} = useContext(userContext)
    return(
        <div>
            <h1>Index123</h1>
            {user}
            <pre>{JSON.stringify(user,null,2)}</pre>
             <button onClick={()=>setUser("Kerubo")}>Change Name</button>
        </div>
        
    )
}

export default Index1;