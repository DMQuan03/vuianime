import React, { useEffect, useState } from 'react'
import className from "classnames/bind"
import styles from "./index.module.scss"
import {
    GiHamburgerMenu
} from "react-icons/gi"
import {
    FcSearch,
    FcCustomerSupport
} from "react-icons/fc"
import {
    HiSave
} from "react-icons/hi"
import {
    BsFillBookmarkHeartFill,
    BsFillFileBarGraphFill
} from "react-icons/bs"
import {
    BiLogOut
} from "react-icons/bi"
import Tippy from '@tippyjs/react/headless'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import authSlice from '../../redux/authSlice'
import { io } from 'socket.io-client'

const cx = className.bind(styles)
const HEADERLAYOUT = () => {

    const dispatch = useDispatch()
    const {token , userId , avatar, username} = sessionStorage
    const checkLogin = useSelector(state => state.auth.checkLogin)

    useEffect(() => {
        axios({
            method : "get",
            url : process.env.REACT_APP_BASE_URL_API + "api/user/currentuser",
            headers : {
                authorization : `Bearer ${token}`
            }
        })
        .then(res => {
            dispatch(authSlice.actions.LoginSuccess())
            return 1
        })
        .catch(err => {
            dispatch(authSlice.actions.logout())
            return 0
        })
    }, [])
    const navigate = useNavigate()
    const MENU_ITEMS = [
        {
            title : "video đã lưu",
            icon : <HiSave />,
            id : 1
        },
        {
            title : "video đã thích",
            icon : <BsFillBookmarkHeartFill />,
            id : 2
        },
        {
            title : "Bảng xếp hạng",
            icon : <BsFillFileBarGraphFill />,
            id : 3
        },
        {
            title : "Trợ giúp",
            icon : <FcCustomerSupport />,
            id : 4,
        },
        {
            title : "Đăng xuất",
            icon : <BiLogOut />,
            handleClick : () => {
                sessionStorage.clear()
                dispatch(authSlice.actions.logout())
                navigate("/auth")
            },
            id : 5
        }
    ]
  return (
    <div className={cx("wrapper_header")}>
        <div className={cx("container_header")}>
            {checkLogin ? 
            <Tippy
            interactive
            render={attrs => (
                <div className={cx("menu_items")}>
                    <div className={cx("info_user")}>
                        <div
                        onClick={() => {
                            navigate(`/profile/${userId}`)
                        }}
                        ><img src={avatar || 'https://vuianime.pro/upload/images/4xgxf3x.jpg'}/></div>
                        <div className={cx("user_name")}>{username || "user"}</div>
                    </div>
                    {MENU_ITEMS.map(el => (
                        <div key={el.id} onClick={el.handleClick} className={cx("show_menu")} >
                            <div style={
                                {
                                    height : "100%",
                                    display : "flex",
                                    justifyContent : "center",
                                    alignItems :'center',
                                    marginLeft : 10,
                                    minHeight: 40
                                }
                            }>{el.icon}</div>
                            <div style={
                                {
                                    marginLeft :10
                                }
                            }>{el.title}</div>
                        </div>
                    ))}
                </div>
            )}
            >
                <div className={cx("menu_header")}>
                    <GiHamburgerMenu className={cx("icon_header")}/>
                </div>
            </Tippy>
            :
            <div>
                <button 
                onClick={() => {
                    navigate("/auth")
                }}
                className={cx("btn_login")}
                style={
                    {
                        width : "80%",
                        height : 30,
                        fontSize : 12,
                        display : "flex",
                        justifyContent : "center",
                        alignItems :"center",
                        marginLeft : 10,
                        borderRadius : 10,
                    }
                }>Đăng nhập</button>
            </div>
            }
            <div className={cx("logo_anime_web")}>
                    <img style={
                        {
                            width : 140,
                            height : 25
                        }
                    } src='https://vuianime.pro/Theme/images/logo.png' />
            </div>
            <div className={cx("search_header")}>
                <FcSearch className={cx("icon_header")} />
            </div>
        </div>
        <div className={cx("advertisement")}>
            <div className={cx("info_advertisement")}>
                <img className={cx("img_advertisement")} src='https://c4.wallpaperflare.com/wallpaper/950/756/23/avatar-anime-avatar-the-last-airbender-wallpaper-preview.jpg' />
            </div>
        </div>
    </div>
  )
}

export default HEADERLAYOUT