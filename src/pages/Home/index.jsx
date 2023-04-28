import React from 'react'
import classNames from 'classnames/bind'
import styles from "./home.module.scss"
import {
    GiHamburgerMenu
} from "react-icons/gi"
import LISTFILMS from './listFilms/listfilms'

const test = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const cx = classNames.bind(styles)
const HOMEPAGE = () => {
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
                <div className={cx("see_all")}><a style={
                        {
                            fontSize : ".7rem"
                        }
                    }>Xem tất cả</a></div>
            </div>
        <div className={cx("list_films")}>
            {test.map(el => {
                return <LISTFILMS />
            })}
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

export default HOMEPAGE