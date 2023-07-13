import React, { useEffect, useState } from 'react'
import './display.css'
import Axios from '../../Axios/Axios'
function Display() {
    const [token, setTokcen] = useState([])
    const [calledToken,setCalledToken] = useState([])
    const [pendingToken,setpendingToken] = useState([])
    const [NowServing,setNowServing] = useState([])
    useEffect(() => {
        Axios.get('/All_Tokens').then((response)=>{
          console.log(response.data)
          setTokcen(response.data)
          setCalledToken(response.data.filter(obj=>obj.call_status == true))
          console.log(calledToken,"---")
          setpendingToken(response.data.filter(obj=>obj.call_status == false))
        })
        Axios.get('/TokenDisplay').then((res)=>{
            setNowServing(res.data)
        })
    }, [])
    
  return (
    <div className='Display'>
        <div className='calledToken'>
        <h1>Called Tockens</h1>
        <div className='inner'>
       
       {
       
       
       calledToken.map((obj)=>{
               return(
                   <>
                                   
                           <div className='displayCard'>
                           
                                   <h1>TOKEN NO <span style={{color:"red"}}>{obj.tokens}</span></h1>
                                   <h3>Generated Time <span style={{color:"green"}}>{obj.generate_time}</span> </h3>
                                   {
                                       obj.call_status ? <h3>Called at <span style={{color:"red"}}>{obj.call_time}</span>  </h3> :<h3>Not Called</h3>
                                   }
                           </div>
                           
                   </>
               )
           })
   }
</div>
        </div>

                  
                    <div>
                    <h1>Pending Tokens</h1>
                    <div className='inner'>
                    
                    {
                        
                        pendingToken.map((obj)=>{
                            return(
                                <>
                                        <div className='displayCard'>
                                                <h1>TOKEN NO <span style={{color:"red"}}>{obj.tokens}</span></h1>
                                                <h3>Generated Time <span style={{color:"green"}}>{obj.generate_time}</span> </h3>
                                                {
                                                    obj.call_status ? <h3>Called at <span style={{color:"red"}}>{obj.call_time}</span>  </h3> :<h3>Not Called</h3>
                                                }
                                        </div>
                                        
                                </>
                            )
                        })
                    }
                    </div>
                    </div>


                    <div>
                    <h1>Now serving</h1>
                    
                    {
                        
                        NowServing.map((obj)=>{
                            return(
                                <>
                                        <div className='displayCard'>
                                                <h1>TOKEN NO <span style={{color:"red"}}>{obj.tokens}</span></h1>
                                                <h3>Generated Time <span style={{color:"green"}}>{obj.generate_time}</span> </h3>
                                                {
                                                    obj.call_status ? <h3>Called at <span style={{color:"red"}}>{obj.call_time}</span>  </h3> :<h3>Not Called</h3>
                                                }
                                        </div>
                                        
                                </>
                            )
                        })
                    }
                    </div>
        
    </div>
  )
}

export default Display