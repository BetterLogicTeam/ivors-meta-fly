import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(prop) {
    const {Components}=prop
    
    const Navigate =useNavigate()
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        console.log("isAuthenticated",isAuthenticated);
        if(isAuthenticated=="false"){

        Navigate("/Login_main")
    }
 

})

  return (
    <div>
<Components/>
    </div>
  )
}
