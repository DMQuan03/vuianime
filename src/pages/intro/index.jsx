import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from "./index.module.scss"
import { useNavigate, useParams } from "react-router-dom"
import {
    AiFillLike
} from "react-icons/ai"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import movieSlice from '../../redux/slice/movieSlice'
import { io } from "socket.io-client"
import COMMENT from '../../components/comment'

const socket = io.connect(process.env.REACT_APP_URL_SOCKET)

const cx = classNames.bind(styles)


const INTROFILMS = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [infoMovie , setInfoMovie] = useState([] ?? [])


    useEffect(() => {
        axios({
            method : "get",
            url : process.env.REACT_APP_BASE_URL_API + "api/movie/intro/" + params._id ,
        })
        .then(res => {
            setInfoMovie(res.data.data)
        })
        .catch(err => {
            return 0
        })
    }, [infoMovie])

   
    
    useEffect(() => {
        socket.emit("join_room", { id : params._id })
        return () => {
            socket.emit("leave_room", { id : params._id})
        }
    }, [])

   
    
  return (
    <div className={cx("wrapper")}>
        <main className={cx("intro_films")}>
            <div className={cx("img_films")}>
                <div>
                    <div style={
                        {
                            border : "4px solid #444",
                            width : 250,
                            maxWidth : 250,
                            height : 354,
                            maxHeight : 354,
                            position : "relative"
                        }
                    }>
                        <div>
                            <img style={
                                {
                                    width : "100%",
                                    height : "100%",
                                    position : "absolute",
                                    top : 0,
                                    left : 0,
                                    right : 0,
                                    bottom : 0
                                }
                            } src={infoMovie.img || ""} />
                        </div>
                    </div>
                    <div>
                        <button 
                        onClick={() => {
                            navigate(`/phim-anime/${infoMovie._id}`)
                            dispatch(movieSlice.actions.PageMovie(1))
                            axios({
                                method : "put",
                                url : process.env.REACT_APP_BASE_URL_API + "api/movie/uploadview/" + infoMovie._id ,
                            })
                        }}
                        className={cx("btn_see")}>Xem phim</button>
                    </div>
                </div>
            </div>
            <div className={cx("name_films")}>
                <p style={
                    {
                        fontSize : '1.4rem',
                        fontWeight : 600,
                        marginLeft : 10,
                        color : "yellow"
                    }
                }>{infoMovie?.name || "phim anime"}</p>
            </div>
            <div className={cx("name_films_years")}>
                <p style={
                    {
                        marginLeft : 10,
                        fontSize : "1.1rem",
                        color : "white"
                    }
                }>{infoMovie?.description}</p>
            </div>
            <div className={cx("three_new_chapter")}>
                <div>
                    <p style={
                        {
                            color : "white",
                            fontSize : ".9rem",
                            marginLeft : 10
                        }
                    }>Tập mới:</p>
                </div>
                <button 
                onClick={() => {
                    navigate(`/phim-anime/${infoMovie._id}`)
                    dispatch(movieSlice.actions.PageMovie(infoMovie?.Episode?.length))
                    axios({
                        method : "put",
                        url : process.env.REACT_APP_BASE_URL_API + "api/movie/uploadview/" + infoMovie._id ,
                    })
                }}
                className={cx("new_chapter")}>{infoMovie?.Episode?.length}</button>
                {infoMovie?.Episode?.length >= 1 && <button 
                onClick={() => {
                    navigate(`/phim-anime/${infoMovie._id}`)
                    dispatch(movieSlice.actions.PageMovie(infoMovie?.Episode?.length - 1))
                    axios({
                        method : "put",
                        url : process.env.REACT_APP_BASE_URL_API + "api/movie/uploadview/" + infoMovie._id ,
                    })
                }}
                className={cx("new_chapter")}>{infoMovie?.Episode?.length - 1}</button>}
                {infoMovie?.Episode?.length >= 2 && <button 
                onClick={() => {
                    navigate(`/phim-anime/${infoMovie._id}`)
                    dispatch(movieSlice?.actions.PageMovie(infoMovie?.Episode?.length - 2))
                    axios({
                        method : "put",
                        url : process.env.REACT_APP_BASE_URL_API + "api/movie/uploadview/" + infoMovie._id ,
                    })
                }}
                className={cx("new_chapter")}>{infoMovie?.Episode?.length - 2}</button>}
            </div>
            <div className={cx("episode")}>
                <p style={
                    {
                        fontSize : ".9rem",
                        color : "white",
                        marginLeft : 10
                    }
                }>Đang phát : <span style={
                    {
                        color : "yellow"
                    }
                }>{infoMovie?.Episode?.length} / ?? Tập Vietsub</span></p>
            </div>
            <div className={cx("category")}>
                <p style={
                    {
                        color : "white",
                        marginLeft : 10
                    }
                }>Thể loại : <span style={
                    {
                        color : "#729dc7",
                        fontSize : ".9rem"
                    }
                }>Phiêu lưu, Hoạt hình, Trung Quốc</span></p>
            </div>
            <div className={cx("time")}>
                <p style={
                    {
                        marginLeft : 10,
                        color : "white",
                    }
                }>Thời lượng : <span style={
                    {
                        color : "#dcdcdc",
                        fontSize : ".8rem"
                    }
                }>24 phút/tập</span></p>
            </div>
            <div className={cx("views")}>
                <p style={
                    {
                        marginLeft : 10,
                        color : "white",
                    }
                }>lượt xem : <span style={
                    {
                        color : "#dcdcdc",
                        fontSize : ".8rem"
                    }
                }>{infoMovie?.view}</span></p>
            </div>
            <div className={cx("media_year")}>
                <p style={
                    {
                        marginLeft : 10,
                        color : "white",
                    }
                }>Năm xuất bản : <span style={
                    {
                        color : "#729dc7",
                        fontSize : ".9rem"
                    }
                }>{infoMovie?.year}</span></p>
            </div>
            <div className={cx("show_like")}>
                    <button style={
                        {
                            marginLeft : 10,
                            minWidth : 80,
                            display : 'flex',
                            textAlign : "center",
                            alignItems : "center",
                            justifyContent : 'center',
                            height : 21,
                            backgroundColor : "#1877f2",
                            border :"none",
                            outline : "none",
                            borderRadius : 5,
                            color : "white"
                        }
                    }>
                        <div style={
                            {
                                marginRight : 5
                            }
                        }><AiFillLike /></div>
                        <p>thích</p>
                    <span style={
                        {
                            marginLeft : 5
                        }
                    }>{infoMovie.like}</span>
                    </button>
                    <button style={
                        {
                            marginLeft : 7,
                            backgroundColor : '#1877f2',
                            border : 'none',
                            outline :"none",
                            height : 21,
                            borderRadius : 5,
                            color : "white"
                        }
                    }>
                        chia sẻ
                    </button>
            </div>
            <div className={cx("star")}>
                <div style={
                    {
                        width : 55,
                        height : 45,
                        backgroundColor :'#3e3e3e',
                        marginLeft : 10,
                        marginRight : 10,
                        borderRadius : 5,
                        display : "flex",
                        alignItems : 'center',
                        textAlign  :'center',
                        justifyContent : "center",
                        fontSize : "1.8rem",
                        fontWeight : 700,
                        color : "#ffe000",
                    }
                }>
                    7.3
                </div>
                <div>
                    <div style={
                        {
                            height : 20
                        }
                    }>
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-half.png' />
                        <img src='https://vuianime.pro/Theme/images/star-off.png' />
                        <img src='https://vuianime.pro/Theme/images/star-off.png' />
                    </div>
                    <div
                    style={
                        {
                            display : 'flex',
                            justifyContent : 'flex-start',
                            alignItems : 'center',
                            textAlign : "center",
                            height : 20
                        }
                    }
                    ><p style={
                        {
                            color : 'white'
                        }
                    }>47 lượt đánh giá</p></div>
                </div>
            </div>
        </main>
        <div className={cx("content_films")}>
            <p style={
                {
                    fontSize : "1rem",
                    fontWeight : 600,
                    marginLeft :10
                }
            }>Nội dung phim </p>
        </div>
        <div className={cx("info_content")}>
            <span style={
                {
                    fontSize : '.9rem',
                }
            }>
                {infoMovie?.contentMovie}
            </span>
        </div>
        <div className={cx("info_content2")}>
            <span style={
                {
                    fontSize : '.9rem'
                }
            }>  Xem phim {infoMovie?.name} Vietsub, Xem Phim {infoMovie?.name} thuyết minh, Xem Phim {infoMovie.name} vietsub online, {infoMovie.name} 85/?? Tập, {infoMovie.name} bản đẹp, {infoMovie.name} trọn bộ, {infoMovie.name} vietsub, Xem phim Swallowed Star Vietsub, Swallowed Star thuyết minh, Swallowed Star 85/?? Tập, Swallowed Star bản đẹp, Swallowed Star trọn bộ, Swallowed Star vietsub  </span>
        </div>
        <COMMENT />
        <footer className={cx("foot_web")}>
            <div className={cx("info_footer")}>
                <div className={cx("logo_footer")} >
                    <img style={
                        {
                            width : 140,
                            height : 30
                        }
                    } src='https://vuianime.pro/Theme/images/logo.png' />
                </div>
                <div className={cx("end_footer")}>
                    <p style={
                        {
                            fontSize : ".8rem",
                            color : "white",
                            marginTop : -5
                        }
                    }> Copyright ® 2022 VuiAnime.PRO All Rights Reserved. </p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default INTROFILMS