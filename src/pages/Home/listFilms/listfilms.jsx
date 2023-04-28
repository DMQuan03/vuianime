import React from 'react'
import classNames from 'classnames/bind'
import styles from "./listfilms.module.scss"

const cx = classNames.bind(styles)
const LISTFILMS = () => {
  return (
    <div className={cx("wrapper_list_films")}>
        <div className={cx("img_films")}>
            <img src='https://vuianime.pro/upload/images/71huQc7.jpg' />
        </div>
        <div className={cx("intro_films")}>
            <div className={cx("name_films")}>
                <p style={
                    {
                        marginLeft : 10,
                        color : "yellow"
                    }
                }>Thôn Phệ Tinh Không</p>
            </div>
            <div className={cx("name_films")}>
                <p style={
                    {
                        marginLeft : 10
                    }
                }>Swallowed Star (2020)</p>
            </div>
        </div>
    </div>
  )
}

export default LISTFILMS