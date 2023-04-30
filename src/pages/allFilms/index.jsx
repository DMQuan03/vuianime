import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import classNames from 'classnames/bind'
import styles from './index.module.scss'
import LISTFILMS from '../Home/listFilms/listfilms'
import axios from 'axios'

const cx = classNames.bind(styles)

const ALLFILMS = () => {

    const [page , setPage] = useState(1)
    const [listFilms , setListFilms] = useState([] ?? [])
    const [maxPage , setMaxpage] = useState(0)
    useEffect(() => {
        axios({
            method : "get",
            url : process.env.REACT_APP_BASE_URL_API + "api/movie/" + "?page=" + page,
        })
        .then(res => {
            if (res.data.data.length <= 0) {
                setPage(page - 1)
            }
            setMaxpage(res.data.maxPage)
            setListFilms(res.data.data)
        })
        .catch(err => {
            return 0
        })
    }, [page])


    const navigate = useNavigate()
  return (
    <div className={cx("wrapper")}>
        <div className={cx("navbar_allFilms")}>
            <div 
            onClick={() => {
                navigate("/")
            }}
            style={
                {
                    marginLeft : 10
                }
            }>Trang chủ</div>
            <div style={
                {
                    marginLeft : 10
                }
            }>Danh sách</div>
            <div style={
                {
                    marginLeft : 10
                }
            }>Phim bộ</div>
        </div>
        <div className={cx("selector_category_films")}>
            <div className={cx("selector_nav")}>
                <div >
                    <select  className={cx("slector-tag")} name="order" id="order" fdprocessedid="frpnxl">
                        <option value="all">-- Sắp xếp --</option>
                        <option value="publish_date">Mới cập nhật</option>
                        <option value="publish_year">Năm xuất bản</option>
                        <option value="name">Tên phim</option>
                        <option value="view">Lượt xem</option>
                    </select>
                </div>
                <div > 
                    <select  className={cx("slector-tag")} name="type" id="type" fdprocessedid="te1ml">
                        <option value="all">-- Loại --</option>
                        <option value="1">Phim lẻ</option>
                        <option value="2">Phim bộ</option>
                    </select> 
                </div>
                <div> 
                    <select  className={cx("slector-tag")} name="cat_id" id="cat_id" fdprocessedid="u9enn8">
                        <option value="all">-- Thể loại --</option> 
                        <option value="17">Âm Nhạc </option>
                        <option value="21">Blu-ray </option>
                        <option value="40">Car </option>
                        <option value="37">Coming of Age </option>
                        <option value="41">Dementia </option>
                        <option value="39">Demons </option>
                        <option value="6">Drama </option>
                        <option value="12">Ecchi </option>
                        <option value="20">Fantasy </option>
                        <option value="22">Game </option>
                        <option value="13">Hài Hước </option>
                        <option value="14">Hành Động </option>
                        <option value="2">Harem </option>
                        <option value="42">Hentai </option>
                        <option value="49">Hoạt hình Trung Quốc </option>
                        <option value="4">Học Đường </option>
                        <option value="35">Josei </option>
                        <option value="43">Kid </option>
                        <option value="8">Kinh Dị </option>
                        <option value="16">Lịch Sử </option>
                        <option value="27">Martial Arts </option>
                        <option value="9">Mecha </option>
                        <option value="44">Military </option>
                        <option value="30">Mystery </option>
                        <option value="36">Parody </option>
                        <option value="10">Phép Thuật </option>
                        <option value="11">Phiêu Lưu </option>
                        <option value="45">Police </option>
                        <option value="31">Psychological </option>
                        <option value="15">Romance </option>
                        <option value="46">Samurai </option>
                        <option value="24">Seinen </option>
                        <option value="23">Shoujo </option>
                        <option value="34">Shoujo Ai </option>
                        <option value="3">Shounen </option>
                        <option value="33">Shounen Ai </option>
                        <option value="28">Siêu Nhiên </option>
                        <option value="26">Space </option>
                        <option value="25">Super Power </option>
                        <option value="5">Thể Thao </option>
                        <option value="47">Thriller </option>
                        <option value="18">Tokusatsu </option>
                        <option value="38">Tragedy </option>
                        <option value="7">Trinh Thám </option>
                        <option value="29">Vampire </option>
                        <option value="19">Viễn Tưởng </option>
                        <option value="48">Yaoi </option>
                        <option value="32">Yuri </option>
                        <option value="1">Đời Thường </option>
                    </select> 
                </div>
                <div > 
                    <select className={cx("slector-tag")} name="city_id" id="city_id" fdprocessedid="f7ugij">
                        <option value="all">-- Quốc gia --</option> 
                        <option value="3">Ấn Độ </option>3
                        <option value="16">Anh </option>3
                        <option value="17">Canada </option>3
                        <option value="15">Châu Âu </option>3
                        <option value="5">Hàn Quốc </option>3
                        <option value="4">Hồng Kông </option>3
                        <option value="18">Malaysia </option>3
                        <option value="12">Mỹ </option>3
                        <option value="14">Nga </option>3
                        <option value="7">Nhật bản </option>3
                        <option value="2">Pháp </option>3
                        <option value="13">Philippine </option>3
                        <option value="1">Tây Ban Nha </option>3
                        <option value="6">Thái lan </option>3
                        <option value="10">Trung Quốc </option>3
                        <option value="11">Úc </option>3
                        <option value="9">Việt Nam </option>3
                        <option value="8">Đài loan </option>3
                    </select> 
                </div>
                <div > 
                    <select onChange={(e) => {
                    }} className={cx("slector-tag")} name="year" id="year" fdprocessedid="nyhl8">
                        <option value="all">-- Năm --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="before-1995">Trước 1995</option>
                    </select> 
                </div>
                <button className={cx("btn_sel")}>
                    Lọc phim
                </button>
            </div>
        </div>
        <div className={cx("list_films")}>
            {listFilms?.map(el => {
                return <LISTFILMS data={el} key={el._id} />
            })}
        </div>
        <div className={cx("page-films")}>
            <div className={cx("nav_page")}>
                <button 
                onClick={() => {
                    setPage(1)
                }}
                className={cx("btn_start_end")}>start</button>
                <button 
                onClick={() => {
                    if (page > 1) {
                        setPage(page - 1)
                    }else {
                        setPage(1)
                    }
                }}
                style={
                    {
                        marginLeft : 5,
                        border : "none",
                        outline :"none",
                        borderRadius : "50%",
                        backgroundColor : "white"
                    }
                }>-</button>
                <div className={cx("page_Now")}>{page}</div>
                <button 
                onClick={() => {
                    setPage(page + 1)
                    if (page === maxPage) {
                        setPage(page)
                    }
                }}
                style={
                    {
                        marginRight : 5,
                        border : "none",
                        outline :"none",
                        borderRadius : "50%",
                        backgroundColor : "white"
                    }
                }>+</button>
                <button 
                onClick={() => {
                    setPage(maxPage)
                }}
                className={cx("btn_start_end")}>end</button>
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

export default ALLFILMS