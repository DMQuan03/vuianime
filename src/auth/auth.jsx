import { Col } from 'antd'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from "./index.module.scss"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authSlice from '../redux/authSlice'

const cx = classNames.bind(styles)

const AUTH = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [register , setRegister] = useState(false)
    // login
    const [emailLogin , setEmailLogin] = useState("")
    const [passwordLogin , setPasswordLogin] = useState("")
    const handleLogin = () => {
        axios({
            method : "post",
            url : process.env.REACT_APP_BASE_URL_API + "api/user/login",
            data : {
                email : emailLogin,
                password : passwordLogin
            }
        })
        .then(res => {
            navigate("/")
            dispatch(authSlice.actions.LoginSuccess())
            sessionStorage.setItem("token", res.data.accessToken)
            sessionStorage.setItem("username", res.data.name)
            sessionStorage.setItem("avatar", res.data.avatar)
            sessionStorage.setItem("userId", res.data._id)
            return 1
        })
        .catch(err => {
            return 0
        })
    }

    // register
    const [emailRegister , setEmailRegister] = useState("")
    const [passwordRegister , setPasswordRegister] = useState("")
    const handleRegister = () => {
        axios({
            method : "post",
            url : process.env.REACT_APP_BASE_URL_API + "api/user/register",
            data : {
                email : emailRegister,
                password : passwordRegister
            }
        })
        .then(res => {
            setRegister(false)
        })
        .catch(err => {
            return 0
        })
    }
    return (
        <div className={cx("wrapper")}>
        { register ? 
            <div className={cx("register")}>
                <h2>Đăng ký</h2>
                <div className={cx("input_register")}>
                    <div style={
                        {
                            width : "100%",
                            height : "50%"
                        }
                    }>
                        <span>Tài khoản</span>
                        <input value={emailRegister} onChange={(e) => {
                            setEmailRegister(e.target.value)
                        }} />
                    </div>
                    <div style={
                        {
                            width : "100%",
                            height : "50%"
                        }
                    }>
                        <span>Mật khẩu</span>
                        <input value={passwordRegister} onChange={(e) => {
                            setPasswordRegister(e.target.value)
                        }} />
                    </div>
                </div>
                <div style={
                    {
                        marginTop : 15
                    }
                }>
                    <button
                    onClick={handleRegister}
                    className={cx("btn_register")}
                    >Đăng ký</button>
                </div>
                <div style={
                    {
                        marginTop : 10
                    }
                }>
                    <a onClick={() => {
                        setRegister(false)
                    }}>Bạn đã có tài khoản</a>
                </div>
            </div> 
        :
        <div className={cx("login")}>
            <h2>Đăng Nhập</h2>
            <div style={
                {
                    width : "100%",
                    height : 120
                }
            }>
                    <span >Tài khoản</span>
                <Col className={cx("styles_input")} span={24}>
                    <input value={emailLogin} onChange={(e) => {
                        setEmailLogin(e.target.value)
                    }} />
                </Col>
                    <span>Mật khẩu</span>
                <Col className={cx("styles_input")} span={24}>
                    <input value={passwordLogin} onChange={(e) => {
                        setPasswordLogin(e.target.value)
                    }} />
                </Col>
            </div>
            <div className={cx("for_got_password")}>
                <a style={
                    {
                        marginLeft : 25,
                    }
                }>Quên mật khẩu</a>
            </div>
                <button 
                onClick={handleLogin}
                className={cx("sty-btn")} style={
                    {
                        marginTop : 10
                    }
                }>Đăng nhập</button>
            <div style={
                {
                    marginTop : 15
                }
            }>
                <a onClick={() => {
                    setRegister(true)
                }}>Bạn chưa có tài khoản ?</a>
            </div>
               
        </div>}

    </div>
  )
}

export default AUTH