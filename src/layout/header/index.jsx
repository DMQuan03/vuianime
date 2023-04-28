import React from 'react'
import className from "classnames/bind"
import styles from "./index.module.scss"
import {
    GiHamburgerMenu
} from "react-icons/gi"
import {
    FcSearch
} from "react-icons/fc"
const cx = className.bind(styles)
const HEADERLAYOUT = () => {
  return (
    <div className={cx("wrapper_header")}>
        <div className={cx("container_header")}>
            <div className={cx("menu_header")}>
                <GiHamburgerMenu className={cx("icon_header")}/>
            </div>
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