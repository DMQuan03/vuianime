import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from "./index.module.scss"
import {
    RiComputerLine
} from "react-icons/ri"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import movieSlice from '../../redux/slice/movieSlice'
import Comment from '../../components/comment'
import { io } from 'socket.io-client'

const socket = io.connect(process.env.REACT_APP_URL_SOCKET)
const cx = classNames.bind(styles)


const DETAIL = () => {

    const [infoMovie , setInfoMovie] = useState([])
    const [infoMovieVideo , setInfoMovieVideo] = useState([])
    const params = useParams()
    const dispatch = useDispatch()
    const page = useSelector(state => state.movie.page)
    const [checkOffLed , setCheckOffLed] = useState(false)
    useEffect(() => {
        socket.emit("join_room", { id : params._id })
        return () => {
            socket.emit("leave_room", { id : params._id})
        }
    }, [])

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
    }, [])



    useEffect(() => {
        axios({
            method : "get",
            url : process.env.REACT_APP_BASE_URL_API + "api/movie/phim/" + params._id + "/page/" + page,
        })
        .then(res => {
            if (res.data.data.length <= 0) {
                dispatch(movieSlice.actions.PageMovie(page - 1))
            }
            setInfoMovieVideo(res.data.data)
        })
        .catch(err => {
            return 0 
        })
    }, [page])



    const LIST_CHANEL = [
        {
            title : "FA#1",
            id : 1
        },
        {
            title : "FE#2",
            id : 2
        },
        {
            title : "LOT#3",
            id : 3
        },
        {
            title : "HY#4",
            id : 4
        },
        {
            title : "VF #5",
            id : 5
        },
    ]
  return (
    <div className={cx("wrapper")}>
        {/* <video src={infoMovieVideo[0]?.video} width="100%" height="240" className={cx("clip_video")} controls></video> */}
        <iframe controls className={cx("clip_video")} height="210px" width="100%" id="mainPlayer" src={infoMovieVideo[0]?.video} frameborder="0" allowfullscreen="true"></iframe>
        <div className={cx("nav_bar_detail")}>
            <div style={
                {
                    width : 90,
                    backgroundColor : "#202020",
                    display :"flex",
                    justifyContent : 'center',
                    alignItems  :"center",
                    textAlign : "center",
                    height : 20,
                    marginRight : 5
                }
            }><p 
            onClick={() => {
                dispatch(movieSlice.actions.plusPage())
            }}
            style={
                {
                    color : 'white'
                }
            }>Tập kế tiếp</p></div>
            <div style={
                {
                    width : 170,
                    display : "flex",
                    justifyContent : "center",
                    alignItems : 'center',
                    textAlign : "center"
                }
            }>
                <button style={
                    {
                        width : 80,
                        display : "flex",
                        justifyContent : "center",
                        alignItems : "center",
                        textAlign : "center",
                        height : 20,
                        backgroundColor : "#1877f2",
                        border : 'none',
                        outline :'none',
                        marginRight : 5,
                        borderRadius : 5

                    }
                }>
                    <p>thich</p>
                </button>
                <button style={
                    {
                        width : 80,
                        display : "flex",
                        justifyContent : "center",
                        alignItems : "center",
                        textAlign : "center",
                        height : 20,
                        backgroundColor : "#1877f2",
                        border : 'none',
                        outline :'none',
                        marginRight : 5,
                        borderRadius : 5
                    }
                }>
                    <p>Chia sẻ</p>
                </button>
            </div>
            <div style={
                {
                    width : 60,
                    backgroundColor : "#202020",
                    height : 20,
                    display : 'flex',
                    justifyContent : "center",
                    alignItems : "center",
                    textAlign : "center"
                }
            }><p 
            onClick={() => {
                setCheckOffLed(!checkOffLed)
            }}
            style={
                {
                    color : "white"
                }
            }>Tắt đèn</p></div>
        </div>
        {
            checkOffLed ? 
            <div className={cx("offled")}></div>
            :
            <>
            <div className={cx("channel")}>
                <div className={cx("list_chanel")}>
                    {LIST_CHANEL.map(el => {
                        return <div key={el.id} className={cx("chanel_true")}>{el.title}</div>
                    })}
                </div>
            </div>
            <div className={cx("name_films")}>
                <p style={
                    {
                        fontSize : "1.2rem",
                        fontWeight : 600,
                        marginLeft : 10,
                        color : "yellow"
                    }
                }> {infoMovie?.name} Tập {infoMovieVideo[0]?.Episode} </p>
            </div>
            <div className={cx("name_films_years")}>
                <p style={
                    {
                        marginLeft :10,
                        fontSize : "1.1rem",
                        fontWeight : 500,
                        color : "white"
                    }
                }> {infoMovie?.description} </p>
            </div>
            <div className={cx("happy")}>
                <p style={
                    {
                        marginLeft : 10,
                        color : "red"
                    }
                }>Chúc các bạn xem phim vui vẻ</p>
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
            <div className={cx("list_films")}>
                <div style={
                    {
                        width : '100%',
                        height : 25,
                        display : "flex",
                        justifyContent :"flex-start",
                        alignItems :"center",
                        textAlign :'center',
                        padding : 10,
                        boxSizing : 'border-box'
                    }
                }>
                    <RiComputerLine style={
                        {
                            marginTop : 2,
                            color : 'white',
                            marginLeft : 15
                        }
                    } />
                    <p style={
                        {
                            marginLeft : 10,
                            fontWeight : 600,
                            color : "white"
                        }
                    }>Server Auto</p>
                </div>
                <div className={cx("chanel_films_chapter")}>
                    {infoMovie?.Episode?.map(el => {
                        return <div key={el._id} className={cx("page-films")} onClick={() => {
                            dispatch(movieSlice.actions.PageMovie(el.Episode))
                        }}><p style={
                            {
                                fontSize : "1.2rem",
                                fontWeight : 600
                            }
                        }>{el.Episode}</p></div>
                    })}
                </div>
            </div>
            <Comment />
                
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
        </>}
    </div>
  )
}

export default DETAIL