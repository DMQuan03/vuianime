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

const cx = classNames.bind(styles)

const test = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,123,124,125
]

const DETAIL = () => {

    const [infoMovie , setInfoMovie] = useState([])
    const [infoMovieVideo , setInfoMovieVideo] = useState([])
    const params = useParams()
    const dispatch = useDispatch()
    const page = useSelector(state => state.movie.page)

    useEffect(() => {
        axios({
            method : "get",
            url : process.env.REACT_APP_BASE_URL_API + "api/movie/intro/" + params._id ,
        })
        .then(res => {
            setInfoMovie(res.data.data)
        })
        .catch(err => {
            console.log(err);
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
            console.log(err);
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
        <video src={infoMovieVideo[0]?.video || 'https://scontent.cdninstagram.com/v/t39.25447-2/10000000_264934085878583_3029675912856370387_n.mp4?_nc_cat=100&amp;vs=e7845740b9f7de6a&amp;_nc_vs=HBksFQAYJEdJQ1dtQUEzNHhQRzlQQUFBTk44WE5vd2tnc3FibWRqQUFBRhUAAsgBABUAGCRHTzVEYXhRaW1IQmNKaVlDQUVBT185ZDNCT2dHYnJGcUFBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHAAAJojj6pzouJ0CFQIoAkMzGAt2dHNfcHJldmlldxwXQJJUAAAAAAAYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkEDI0NDY1MzM2NTg4NTA5MjISb2VtX3ZpZGVvX2Fzc2V0X2lkDzIwOTgxOTA3MTc2NTU5MBVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPNjI3Njk3Njg5Mzg1MTU2HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQQMTE5MTY1Nzg2MTUzODI3MA52dHNfcmVxdWVzdF9pZAAlAhwAJY4CGwiIAXMEMTczOAJjZAoyMDIzLTA0LTI2A3JjYgEwA2FwcAZ1cGxvYWQCY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zBDExNzMBZgJhZAJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&amp;ccb=1-7&amp;_nc_sid=41a7d5&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&amp;_nc_ohc=1bbmVP5fP0oAX_KDTVt&amp;_nc_ht=scontent-sin6-4.xx&amp;edm=APRAPSkEAAAA&amp;oh=00_AfCnAySZv3Mb4uOTx4Ufp8Dn7_VCK-Q7vfSqkrjttuyO2w&amp;oe=64508168&amp;_nc_rid=246314180434936'} width="100%" height="240" className={cx("clip_video")} controls></video>
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
            }><p style={
                {
                    color : "white"
                }
            }>Tắt đèn</p></div>
        </div>
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
        <div className={cx("comment")}>
            <div className={cx("show_number_comment")}>
                <p style={
                    {
                        marginLeft : 5,
                        fontWeight : 600
                    }
                }>0 bình luận</p>
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
                    <span>hello anh em nhe</span>
                </div>
                <div className={cx("btn_comment")}>
                    <input></input>
                    <button style={
                        {
                            marginRight : 5
                        }
                    }>Đăng</button>
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

export default DETAIL