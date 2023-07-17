import React, { useEffect,useState} from 'react'
import Nav from '../NavBar/Nav'
import ActionDiv from '../ActionDiv/ActionDiv'
import Buttons from '../Row/Buttons'
import Display from '../displayDiv/Display'
import Axios from '../../Axios/Axios'
function Home() {
    const [token, setTokcen] = useState([])
    const [calledToken,setCalledToken] = useState([])
    const [pendingToken,setpendingToken] = useState([])
    const [NowServing,setNowServing] = useState([])
    useEffect(() => {
        getAllToken();
        nowServing()
    }, [])
    function getAllToken(){
        Axios.get('/All_Tokens').then((response)=>{
            console.log(response.data)
            setTokcen(response.data)
            setCalledToken(response.data.filter(obj=>obj.call_status == true))
            console.log(calledToken,"---")
            setpendingToken(response.data.filter(obj=>obj.call_status == false))
          })
    }
    function nowServing(){
        Axios.get('/TokenDisplay').then((res)=>{
            setNowServing(res.data)
        })
    }
  return (
    <div>
        <Nav/>
        <Buttons getAllToken={getAllToken} nowServing={nowServing} />
        <ActionDiv/>
        <Display  calledToken={calledToken} pendingToken={pendingToken} NowServing={NowServing}/>
    </div>
  )
}

export default Home