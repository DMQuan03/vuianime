import React, { useState } from 'react'
import classnames from 'classnames/bind'
import styles from "./index.module.scss"
import Tippy from "@tippyjs/react/headless"
import SERIESMOVIE from '../components/Seriesmovies'
import ADDFILMS from '../components/addfilmstomovie'
const cx = classnames.bind(styles)
const CREATEFILMS = () => {

    const [checkCreateFilms , setCheckCreateFilms] = useState(false)

    const MENU_CREATE = [
        {
            title : "thêm phim bộ",
            id : 1,
            handleNav : () =>{
                setCheckCreateFilms(true)
            }
        },
        {
            title : "thêm phim lẻ",
            id : 2,
            handleNav : () => {
                setCheckCreateFilms(false)
            }
        }
    ]
  return (
    <div className={cx("wrapper")}>
        <div className={cx("title")}>
            <h2>ADMIN</h2>
        </div>
        <div className={cx("nav_bar_admin")}>
            <Tippy
            interactive
            placement='bottom-end'
            render={attrs => (
                <div {...attrs} className={cx("menu_create")}>
                    {MENU_CREATE.map(el => {
                        return <div className={cx("nav_item")} onClick={el.handleNav} key={el.id}>{el.title}</div>
                    })}
                </div>
            )}
            >
                <a>Create</a>
            </Tippy>
            <a>getAll</a>
            <a>Comment</a>
            <a>User</a>
        </div>
        {checkCreateFilms ? <SERIESMOVIE />
        :
        <ADDFILMS />
        }
    </div>
  )
}

export default CREATEFILMS