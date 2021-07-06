import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import "./Post.css"
import InputOption from './InputOption'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'


const Post=forwardRef(({name, description, message, photoUrl},ref) => {
    return (
        <div className="post">
            <div ref={ref} className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>      
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOption 
                    Icon={ ThumbUpAltOutlined} 
                    title="Like" 
                    color="gray"
                />
                 <InputOption 
                    Icon={ ChatOutlined} 
                    title="Comment" 
                    color="gray"
                />
                 <InputOption 
                    Icon={ ShareOutlined} 
                    title="Share" 
                    color="gray"
                />
                 <InputOption 
                    Icon={ SendOutlined} 
                    title="Send" 
                    color="gray"
                />
            </div>
        </div>
    )
})

export default Post
