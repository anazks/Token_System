import React, { useEffect, useState } from 'react'
import './display.css'
function Display({calledToken,pendingToken,NowServing}) {
//    const Token = prop.token;
    const calledTokens = calledToken   ;
    // const pendingToken = prop.pendingToken;
    // const NowServing = prop.NowServing;
    
  return (
    <div className='Display'>
        <div className='calledToken'>
        <h1>Called Tockens</h1>
        <div className='inner'>
       
       {
       
       
       calledTokens.map((obj)=>{
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
                    <div className='inner'>
                    
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
        
    </div>
  )
}

export default Display