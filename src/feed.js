import React, {useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import "./feed.css"
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user=useSelector(selectUser);
    const [input, setInput]= useState('')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => (
                {
                    id:doc.id,
                    data:doc.data(),
                }

            )))
        })
      
    }, []);

    const sendPost = (e) =>{
        e.preventDefault();
        
        db.collection("posts").add({
            name:user.displayName,
            description:user.email,
            message: input,
            photoUrl:user.photoUrl||"",
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a Post" />
                        <button onClick={sendPost} type="submit">Submit</button>

                    </form>
                   
                </div>
                <div className="feed_inputOptions">
                    <InputOption 
                        Icon={ImageIcon}
                        title='Photo'
                        color='#70B5F9'
                    />
                     <InputOption 
                        Icon={YouTubeIcon}
                        title='Video'
                        color='#E7A33E'
                    />
                     <InputOption 
                        Icon={EventAvailableIcon}
                        title='Event'
                        color='#C0CBCD'
                    />
                    <InputOption 
                        Icon={CalendarViewDayIcon}
                        title='Write article'
                        color='#7FC15E'
                    />
                </div>
            </div>
            <FlipMove>

            
            {posts.map(({id,data:{name, description, message,photoUrl}}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed
