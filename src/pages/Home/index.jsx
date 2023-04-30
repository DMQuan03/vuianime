import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import classNames from 'classnames/bind'
import styles from "./home.module.scss"
import {
    GiHamburgerMenu
} from "react-icons/gi"
import LISTFILMS from './listFilms/listfilms'
import ConfigRoutes from '../../config/config.routes'
import axios from 'axios'

const test = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const cx = classNames.bind(styles)
const HOMEPAGE = () => {
    const navigate = useNavigate()
    const [updateNew , setUpdateNew ] = useState([] ?? [])
    useEffect(() => {
        axios({
            method : "get",
            url : process.env.REACT_APP_BASE_URL_API + "api/movie/tenmovie"
        })
        .then(res => {
            setUpdateNew(res.data.data)
        })
        .catch(err => {
            return 0
        })
    }, [])
  return (
    <div className={cx("wrapper_home")}>
        <div className={cx("selector_films")}>
                <div className={cx("nav_bar_home")}>
                    <div className={cx("wrapper_icon")}><GiHamburgerMenu className={cx("icon_home")} /></div>
                    <div className={cx("title_nav_home")}><p style={
                        {
                            fontSize : ".8rem"
                        }
                    } >PHIM BỘ MỚI CẬP NHẬT</p></div>
                </div>
                <div 
                className={cx("see_all")}><p
                onClick={() => {
                    navigate(ConfigRoutes.allFilms)
                }}
                style={
                        {
                            fontSize : ".7rem",
                            cursor : "pointer"
                        }
                    }>Xem tất cả</p></div>
            </div>
        <div className={cx("list_films")}>
            {updateNew && updateNew?.map(el => {
                return <LISTFILMS key={el._id} data={el} />
            })}
        </div>
        <footer className={cx("foot_web")}>
            <div className={cx("info_footer")}>
                <div 
                onClick={() => {
                    navigate(`/detail/`)
                }}
                className={cx("logo_footer")} >
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

export default HOMEPAGE