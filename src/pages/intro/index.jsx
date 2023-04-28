import React from 'react'
import classNames from 'classnames/bind'
import styles from "./index.module.scss"
import { useNavigate } from "react-router-dom"
import {
    AiFillLike
} from "react-icons/ai"
import ConfigRoutes from '../../config/config.routes'

const cx = classNames.bind(styles)

const INTROFILMS = () => {

    const navigate = useNavigate()
  return (
    <div className={cx("wrapper")}>
        <main className={cx("intro_films")}>
            <div className={cx("img_films")}>
                <div>
                    <div style={
                        {
                            border : "4px solid #444"
                        }
                    }>
                        <div>
                            <img src='https://vuianime.pro/upload/images/71huQc7.jpg' />
                        </div>
                    </div>
                    <div>
                        <button 
                        onClick={() => {
                            navigate("/phim-anime/abc")
                        }}
                        className={cx("btn_see")}>Xem phim</button>
                    </div>
                </div>
            </div>
            <div className={cx("name_films")}>
                <p style={
                    {
                        fontSize : '1.4rem',
                        fontWeight : 600,
                        marginLeft : 10,
                        color : "yellow"
                    }
                }>Thôn Phệ Tinh Không</p>
            </div>
            <div className={cx("name_films_years")}>
                <p style={
                    {
                        marginLeft : 10,
                        fontSize : "1.1rem",
                        color : "white"
                    }
                }>Swallowed Star (2020) </p>
            </div>
            <div className={cx("three_new_chapter")}>
                <div>
                    <p style={
                        {
                            color : "white",
                            fontSize : ".9rem",
                            marginLeft : 10
                        }
                    }>Tập mới:</p>
                </div>
                <button className={cx("new_chapter")}>85</button>
                <button className={cx("new_chapter")}>84</button>
                <button className={cx("new_chapter")}>83</button>
            </div>
            <div className={cx("episode")}>
                <p style={
                    {
                        fontSize : ".9rem",
                        color : "white",
                        marginLeft : 10
                    }
                }>Đang phát : <span style={
                    {
                        color : "yellow"
                    }
                }>85 / ?? Tập Vietsub</span></p>
            </div>
            <div className={cx("category")}>
                <p style={
                    {
                        color : "white",
                        marginLeft : 10
                    }
                }>Thể loại : <span style={
                    {
                        color : "#729dc7",
                        fontSize : ".9rem"
                    }
                }>Phiêu lưu, Hoạt hình, Trung Quốc</span></p>
            </div>
            <div className={cx("time")}>
                <p style={
                    {
                        marginLeft : 10,
                        color : "white",
                    }
                }>Thời lượng : <span style={
                    {
                        color : "#dcdcdc",
                        fontSize : ".8rem"
                    }
                }>24 phút/tập</span></p>
            </div>
            <div className={cx("views")}>
                <p style={
                    {
                        marginLeft : 10,
                        color : "white",
                    }
                }>lượt xem : <span style={
                    {
                        color : "#dcdcdc",
                        fontSize : ".8rem"
                    }
                }>100,345</span></p>
            </div>
            <div className={cx("media_year")}>
                <p style={
                    {
                        marginLeft : 10,
                        color : "white",
                    }
                }>Năm xuất bản : <span style={
                    {
                        color : "#729dc7",
                        fontSize : ".9rem"
                    }
                }>2020</span></p>
            </div>
            <div className={cx("show_like")}>
                    <button style={
                        {
                            marginLeft : 10,
                            minWidth : 80,
                            display : 'flex',
                            textAlign : "center",
                            alignItems : "center",
                            justifyContent : 'center',
                            height : 21,
                            backgroundColor : "#1877f2",
                            border :"none",
                            outline : "none",
                            borderRadius : 5,
                            color : "white"
                        }
                    }>
                        <div style={
                            {
                                marginRight : 5
                            }
                        }><AiFillLike /></div>
                        <p>thích</p>
                    <span style={
                        {
                            marginLeft : 5
                        }
                    }>17</span>
                    </button>
                    <button style={
                        {
                            marginLeft : 7,
                            backgroundColor : '#1877f2',
                            border : 'none',
                            outline :"none",
                            height : 21,
                            borderRadius : 5,
                            color : "white"
                        }
                    }>
                        chia sẻ
                    </button>
            </div>
            <div className={cx("star")}>
                <div style={
                    {
                        width : 55,
                        height : 45,
                        backgroundColor :'#3e3e3e',
                        marginLeft : 10,
                        marginRight : 10,
                        borderRadius : 5,
                        display : "flex",
                        alignItems : 'center',
                        textAlign  :'center',
                        justifyContent : "center",
                        fontSize : "1.8rem",
                        fontWeight : 700,
                        color : "#ffe000",
                    }
                }>
                    7.3
                </div>
                <div>
                    <div style={
                        {
                            height : 20
                        }
                    }>
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-on.png' />
                        <img src='https://vuianime.pro/Theme/images/star-half.png' />
                        <img src='https://vuianime.pro/Theme/images/star-off.png' />
                        <img src='https://vuianime.pro/Theme/images/star-off.png' />
                    </div>
                    <div
                    style={
                        {
                            display : 'flex',
                            justifyContent : 'flex-start',
                            alignItems : 'center',
                            textAlign : "center",
                            height : 20
                        }
                    }
                    ><p style={
                        {
                            color : 'white'
                        }
                    }>47 lượt đánh giá</p></div>
                </div>
            </div>
        </main>
        <div className={cx("content_films")}>
            <p style={
                {
                    fontSize : "1rem",
                    fontWeight : 600,
                    marginLeft :10
                }
            }>Nội dung phim </p>
        </div>
        <div className={cx("info_content")}>
            <span style={
                {
                    fontSize : '.9rem',
                }
            }> Nhân vật chính của truyện là La Phong, sinh ra sau thời kì Đại Niết Bàn (là thời kỳ diễn ra vào đầu thế kỷ thứ 21 tại Trái Đất khi nhân loại bị dịch bệnh diệt vong hơn 1 tỷ người, đồng thời bệnh dịch cũng khiến tất cả giống loài trên Trái Đất bị biến dị, trở nên mạnh mẽ và hung tàn hơn). Cha mẹ La Phong đều rất nghèo, em trai La Hoa bị liệt, cả gia đình có cuộc sống rất khó khăn nên La Phong từ nhỏ đã mang trong mình một nghị lực và quyết tâm rất lớn, đó là thay đổi vận mệnh gia đình mình. </span>
        </div>
        <div className={cx("info_content2")}>
            <span style={
                {
                    fontSize : '.9rem'
                }
            }>  Xem phim Thôn Phệ Tinh Không Vietsub, Xem Phim Thôn Phệ Tinh Không thuyết minh, Xem Phim Thôn Phệ Tinh Không vietsub online, Thôn Phệ Tinh Không 85/?? Tập, Thôn Phệ Tinh Không bản đẹp, Thôn Phệ Tinh Không trọn bộ, Thôn Phệ Tinh Không vietsub, Xem phim Swallowed Star Vietsub, Swallowed Star thuyết minh, Swallowed Star 85/?? Tập, Swallowed Star bản đẹp, Swallowed Star trọn bộ, Swallowed Star vietsub  </span>
        </div>
        <div className={cx("comment")}>
            <div className={cx("show_number_comment")}>
                <p style={
                    {
                        marginLeft : 5,
                        fontWeight : 600
                    }
                }>0 bình luận</p>
                <div style={{
                    display  : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    marginRight : 5
                }}>
                    <p style={
                        {
                            marginRight : 5,
                            color : "#94979b"
                        }
                    }>Sắp xếp theo</p>
                    <select class="_3-8_ _33ki" initialvalue="reverse_time">
                        <option value="reverse_time">Mới nhất</option>
                        <option value="time">Cũ nhất</option>
                        <option value="toplevel"></option>
                    </select>
                </div>
            </div>
            <div className={cx("input_comment")}>
                <div style={
                    {
                        width : '100%',
                        minHeight : '40px',
                        position : 'relative',
                        backgroundColor : "white",
                        height : "auto",
                        border : '1px solid #666',
                        overflow : 'hidden',
                        padding : 10,
                        boxSizing : "border-box",
                    }
                }>
                    <span>hello anh em nhe</span>
                </div>
                <div className={cx("btn_comment")}>
                    <input></input>
                    <button style={
                        {
                            marginRight : 5
                        }
                    }>Đăng</button>
                </div>
                <div className={cx("link_facebook")}>
                    <img src='https://www.facebook.com/images/fb_icon_325x325.png' />
                    <span style={
                        {
                            fontSize : ".8rem",
                            marginLeft : 10
                        }
                    }>Plugin bình luận trên Facebook</span>
                </div>
            </div>
            
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

export default INTROFILMS