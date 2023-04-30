import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from "./index.module.scss"
import {
    BsThreeDots
} from "react-icons/bs"
import {
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
import {
    AiOutlineEdit
} from "react-icons/ai"
import Tippy from '@tippyjs/react/headless'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authSlice from '../../redux/authSlice'
import axios from 'axios'

const cx = classNames.bind(styles)

const PROFILE = () => {
    const {token} = sessionStorage
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showEdit , setShowEdit] = useState(false)
    const [avatarUser , setAvatarUser] = useState([])
    const [nameUser , setNameUser] = useState([])
    const [usernameText , setUsernameText] = useState("")
    const [imgText , setImgText] = useState("")

    const handleEditUser = () => {
        axios({
            method : "put",
            url : process.env.REACT_APP_BASE_URL_API + "api/user/",
            data : {
                name : usernameText,
                avatar  : imgText
            },
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        .then(res => {
            setAvatarUser(res.data.data.avatar)
            setNameUser(res.data.data.name)
            setShowEdit(false)
        })
        .catch(err => {
            return 0
        })
    }

    useEffect(() => {
        axios({
            method : "get",
            url : process.env.REACT_APP_BASE_URL_API + "api/user/currentuser",
            headers : {
                authorization : `Bearer ${token}`
            }
        })
        .then(res => {
           setAvatarUser(res.data.data.avatar)
           setNameUser(res.data.data.name)
           sessionStorage.setItem("username",res.data.data.name )
           sessionStorage.setItem("avatar",res.data.data.avatar )
        })
        .catch(err => {
            navigate("/")
            dispatch(authSlice.actions.logout())
            return 0
        })
    }, [])

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
            title : "Sửa thông tin",
            icon : <AiOutlineEdit />,
            handleClick : () => {
                setShowEdit(true)
            },
            id : 5,
        },
        {
            title : "Đăng xuất",
            icon : <BiLogOut />,
            handleClick : () => {
                sessionStorage.clear()
                dispatch(authSlice.actions.logout())
                navigate("/auth")
            },
            id : 6
        }
    ]

  return (
    <div className={cx("wrapper")}>
        <div className={cx("intro")}>
            <Tippy
            interactive
            render={attrs => (
                <div className={cx("menu_items")}>
                    <div className={cx("info_user")}>
                        <div><img src={ avatarUser ||'https://vuianime.pro/upload/images/4xgxf3x.jpg'}/></div>
                        <div className={cx("user_name")}>{nameUser || "user"}</div>
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
                <div className={cx("icon_nav")}> 
                    <BsThreeDots style={
                        {
                            width : 25,
                            height : 25
                        }
                    } />
                </div>
            </Tippy>
        </div>
        <div className={cx("img_user")}>
            <div style={
                {
                    width : 80,
                    height : 80,
                    position : "relative",
                    display : "flex",
                    justifyContent  :"center"
                }
            }>
                <img style={
                    {
                        width : "100%",
                        height : "100%",
                        position : "absolute",
                        marginTop : -25,
                        borderRadius : "50%"
                    }
                } src={avatarUser} />
            </div>
        </div>
        <div className={cx("name_user")}>
            <h3>{nameUser}</h3>
        </div>
        {showEdit && <div className={cx("edit_profile")}>
            <div className={cx("edit")}>
                <h2>Sửa thông tin</h2>
                <div className={cx("edit_user")}>
                    <div style={
                        {
                            width : "100%",
                            height : "50%",
                            display  :"flex",
                            justifyContent : "flex-start",
                            alignItems : "center",
                            textAlign : "center"
                        }
                    }>
                        <span style={
                            {
                                marginLeft : 10
                            }
                        }>Họ và tên</span>
                        <input 
                        value={usernameText}
                        onChange={(e) => {
                            setUsernameText(e.target.value)
                        }}
                        style={
                            {
                                marginLeft : 10
                            }
                        } />
                    </div>
                    <div style={
                        {
                            width : "100%",
                            height : "50%",
                            display  :"flex",
                            justifyContent : "flex-start",
                            alignItems : "center",
                            textAlign : "center"
                        }
                    }>
                        <span style={
                            {
                                marginLeft : 10
                            }
                        }>Ảnh</span>
                        <input 
                        value={imgText}
                        onChange={(e) => {
                            setImgText(e.target.value)
                        }}
                        style={
                            {
                                marginLeft : 50
                            }
                        } />
                    </div>
                </div>
                <div style={
                    {
                        display : "flex",
                        justifyContent : "space-around",
                        alignItems : "center",
                        textAlign : "center"
                    }
                }>
                    <button
                    onClick={handleEditUser}
                    >Sửa</button>
                    <button
                    onClick={() => {
                        setShowEdit(false)
                    }}
                    >Hủy</button>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default PROFILE