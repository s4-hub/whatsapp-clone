import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import "./Chat.css";
// import { Avatar } from '@material-ui/core';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import db from '../Firebase';

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
          db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
              setRoomName(snapshot.data().name)
          ))  
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMassage = (e) => {
        e.preventDefault();
        console.log("You typed >>> ", input);
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />    
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Syafii</span>
                    Hey Guys...
                    <span className="chat__timestamp">
                        3:52pm
                    </span>
                </p>
                
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form type="text">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
                    <button onClick={sendMassage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
