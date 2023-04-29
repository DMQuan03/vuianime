import React from 'react'
import {useNavigate} from "react-router-dom"
import classNames from 'classnames/bind'
import styles from "./listfilms.module.scss"

const cx = classNames.bind(styles)
const LISTFILMS = ({data}) => {
    const navigate = useNavigate()
  return (
    <div className={cx("wrapper_list_films")}>
        <div className={cx("img_films")}>
            <img onClick={() => {
                navigate(`/detail/${data._id}`)
            }} src={data?.img || 'https://vuianime.pro/upload/images/71huQc7.jpg'} />
        </div>
        <div className={cx("intro_films")}>
            <div className={cx("name_films")}>
                <p style={
                    {
                        marginLeft : 10,
                        color : "yellow"
                    }
                }>{data.name.length > 25 ? data?.name.slice(0,15) + "..." : data.name  || "phim mới"}</p>
            </div>
            <div className={cx("name_films1")}>
                <span style={
                    {
                        marginLeft : 10
                    }
                }>{data.description.length > 25 ? data?.description.slice(0,15) + "..." : data.description}</span>
            </div>
        </div>
    </div>
  )
}

export default LISTFILMS