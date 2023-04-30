import React, { memo, useEffect, useState, useMemo, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from "./index.module.scss"
import LISTCOMMENT from '../listComment'
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const socket = io.connect(process.env.REACT_APP_URL_SOCKET)
const cx = classNames.bind(styles)

const COMMENT = () => {

    const {userId , token} = sessionStorage
    const params = useParams()
    const [textComment , setTextComment] = useState("")
    const [listCommentTrue , setListCommentTrue] = useState([] ?? [])
    const [limit , setLimit] = useState(5)
    const [lengthComment , setLengthComment] = useState([])
    const [checkLogin , setCheckLogin] = useState(false)
    
    useMemo(() => {
        socket.on("user-comment-movie", (data) => {
            setListCommentTrue(prev => [data , ...prev])
            setLengthComment(prev => prev + 1)
            setTextComment("")
        })
    }, [socket])

    useEffect(() => {
        axios({
            method : "get",
            url : process.env.REACT_APP_BASE_URL_API + "api/user/currentuser",
            headers : {
                authorization : `Bearer ${token}`
            }
        })
        .then(res => {
            setCheckLogin(true)
            return 1
        })
        .catch(err => {
            setCheckLogin(false)
            return 0
        })
    }, [])

    useEffect(() => {
        axios({
            method : "get",
            url : process.env.REACT_APP_BASE_URL_API + "api/utils/comment/" + params._id + "/?limit=" + limit ,
        })
        .then(res => {
            setListCommentTrue(res.data.data)
            setLengthComment(res.data.count)
        })
        .catch(err => {
            return 0
        })
    }, [limit])

    useEffect(() => {
        socket.emit("join_room", { id : params._id })
        return () => {
            socket.emit("leave_room", { id : params._id})
        }
    }, [])


  return (
    <div className={cx("comment")}>
            <div className={cx("show_number_comment")}>
                <p style={
                    {
                        marginLeft : 5,
                        fontWeight : 600
                    }
                }>{lengthComment} bình luận</p>
                <div style={{
                    display  : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    marginRight : 5
                }}>
                    <p style={
                        {
                            marginRight : 5,
                            color : "#94979b"
                        }
                    }>Sắp xếp theo</p>
                    <select class="_3-8_ _33ki" initialvalue="reverse_time">
                        <option value="reverse_time">Mới nhất</option>
                        <option value="time">Cũ nhất</option>
                        <option value="toplevel"></option>
                    </select>
                </div>
            </div>
            <div className={cx("input_comment")}>
                <div style={
                    {
                        width : '100%',
                        minHeight : '40px',
                        position : 'relative',
                        backgroundColor : "white",
                        height : "auto",
                        border : '1px solid #666',
                        overflow : 'hidden',
                        padding : 10,
                        boxSizing : "border-box",
                    }
                }>
                    {textComment}
                </div>
                <div className={cx("btn_comment")}>
                    <input value={textComment} onChange={(e) => {
                        setTextComment(e.target.value)
                    }} />
                    {checkLogin ? textComment ? 
                    <button
                    onClick={() => {
                        const dataPayload = { idRoom : params._id , idUser : userId , text : textComment }
                        socket.emit("user-comment", dataPayload )
                    }}
                    style={
                        {
                            marginRight : 5
                        }
                    }>Đăng</button> 
                    :
                    <button
                    style={
                        {
                            marginRight : 5,
                            opacity : ".5",
                            cursor : "no-drop",
                            outline : "none",
                            border : "none",
                            color : "red",
                            fontWeight : 500
                        }
                    }>Đăng</button> 
                    : 
                    <button
                    onClick={() => {
                        alert("ban can dang nhap")
                    }}
                    style={
                        {
                            marginRight : 5
                        }
                    }>Đăng</button>
                    }
                </div>
                <div className={cx("show_comment_movie")}>
                    { listCommentTrue &&  listCommentTrue?.map(cm => {
                        return <LISTCOMMENT key={cm?._id} data={cm} />
                    })}
                    <p
                    onClick={() => {
                        setLimit(limit + 5)
                    }}
                    >Xem thêm</p>
                </div>
                <div className={cx("link_facebook")}>
                    <img src='https://www.facebook.com/images/fb_icon_325x325.png' />
                    <span style={
                        {
                            fontSize : ".8rem",
                            marginLeft : 10
                        }
                    }>Plugin bình luận trên Facebook</span>
                </div>
            </div>
            
        </div>
  )
}

export default memo(COMMENT)