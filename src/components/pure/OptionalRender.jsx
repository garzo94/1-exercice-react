import React, {useState} from 'react'



 function LoginButton({loginActions}) {
  return (
    <button onClick={loginActions}>Login</button>
  )
}

 function LogoutButton({logoutActions}) {
    return (
      <button onClick={logoutActions}>Logout</button>
    )
  }
  



export default function OptionalRender() {
  
    const [acces, setacces] = useState(true)
    const [messages, setmessages] = useState(0)

    const updateAcces = ()=>{
        setacces(!acces)
    }
    const logoutActions = ()=>{
    setacces(false)
    }
    const loginActions = ()=>{
        setacces(false)
        }

    


    
    let addMessages = () =>{
        setmessages(messages+1)
    }

    let Optionalbutton;

    if(acces){
        Optionalbutton = <LoginButton loginActions={loginActions}></LoginButton>
    }else{
        Optionalbutton = <LogoutButton logoutActions={logoutActions}></LogoutButton>
    }

    

  return (
    <div>

        {Optionalbutton}
        {/* {messages > 0 &&  messages === 1 &&<p>You have {messages} unread message..</p>}
        {messages > 1 && <p>You have {messages} unread messages..</p>}
        {messages ==0 && <p>There ar no new messages</p>} */}
        {/* Ternary */}
        {messages > 0 && messages ===1 ? <p>You have {messages} unread message..</p> : <p>You have {messages} unread messages..</p>}
        <button onClick={addMessages}>Add</button>
        
    </div>
  )
}
