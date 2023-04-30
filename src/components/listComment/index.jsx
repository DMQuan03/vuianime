import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from "./index.module.scss"
import {format} from "timeago.js"

const cx = classNames.bind(styles)
const LISTCOMMENT = ({data}) => {
  return (
    <div className={cx("wrapper")}>
        <div className={cx("img_user")}>
            <img style={
                {
                    width : 40,
                    height : 40,
                    borderRadius : "50%"
                }
            } src={data?.userId?.avatar} />
        </div>
        <div className={cx("comment_content")}>
            <div style={
                {
                    width : "auto",
                    backgroundColor : "white",
                    height : 40,
                    display : 'flex',
                    justifyContent  : "flex-start",
                    alignItems : 'center',
                    textAlign : "start",
                    borderTopLeftRadius : 10,
                    borderTopRightRadius : 10,
                    borderTop : "1px solid #333",
                    borderLeft : "1px solid #333",
                    borderRight : "1px solid #333",
                    paddingRight : 5
                }
            }>
                <p style={
                    {
                        marginLeft : 10
                    }
                }>{data?.userId?.name || "user"}</p>
            </div>
            <div className={cx("text_comment")}>
                <span style={
                    {
                        marginLeft : 5
                    }
                }>{data.text}</span>
            </div>
            <div className={cx("time_comment")}>
                <p>{format(data.createdAt)}</p>
            </div>
        </div>
    </div>
  )
}

export default LISTCOMMENT