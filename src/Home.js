import React from 'react'
import {useContext}   from 'react';
import {userContext} from './Context';
import { Login } from './Login';

function Home(){

    const {user,setUser}=useContext(userContext)
    return(
        <div>
            <h1>Home</h1>
            <pre>{JSON.stringify(user,null,2)}</pre>
            {user ?(
                <button onClick={()=>{setUser(null)}}>Logout</button>
                
            ):
            (
                <button onClick={ async()=>{
                    const user=await Login()
                    setUser(user)
                }}>Login</button>  
            )
            }
        </div>
        
    )
}

export default Home;