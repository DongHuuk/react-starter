import React, {Component, useState} from "react";

const EventPrectice = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')
    
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value)
    const onClick = () => {
        alert(username + message)
        setUsername('')
        setMessage('')
    }

    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    }
    
    return (
        <div>
            <input type="text" 
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChangeUsername}/>
             
            <input type="text" 
            name="message"
            placeholder="메시지"
            value={message}
            onChange={onChangeMessage}
            onKeyPress={onKeyPress}/>

            <button type="button"
            onClick={onClick}>확인</button>
        </div>
    )

}

export default EventPrectice;