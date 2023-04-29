import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from "./index.module.scss"
import ALLFILMS from '../../../pages/allFilms'
import HEADERLAYOUT from '../../../layout/header'
import { Col } from "antd"
import axios from "axios"
const cx = classNames.bind(styles)
const SERIESMOVIE = () => {

    const [year , setYear] = useState(2023)
    const [country , setCountry] = useState("VIỆT NAM")
    const [Category , setCategory] = useState("")
    const [nameFIlms , setNameFilms] = useState("")
    const [description , setDescription] = useState("")
    const [img , setImg] = useState("")
    const [contentFilms , setContentFilms] = useState("")

    const handleCreateSeriesMovie = () => {
        axios({
            method : "post",
            url : process.env.REACT_APP_BASE_URL_API + "api/movie/",
            data : {
                name : nameFIlms,
                img,
                description,
                Category,
                year,
                contentMovie : contentFilms,
                country
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <div className={cx("wrapper")}>
        <div className={cx("title_create_odd")}>
            <h2>Create Odd Films</h2>
        </div>
        <div className={cx("show_before")}>
            <div className={cx("show_img")}>
            </div>
            <div className={cx("show_video")}>

            </div>
            <div className={cx("show_info")}>

            </div>
        </div>
        <div className={cx("input_create")}>
            <div className={cx("selectCateGory")}>
            <select 
            value={year}
            onChange={(e) => {
                    setYear(e.target.value)
                    }} className={cx("category")} name="year" id="year" fdprocessedid="nyhl8">
                        <option value="">-- Năm --</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
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
                        <option value="before-1995">Trước 1995</option>
                    </select> 

                    <select value={country} 
                    onChange={(e) => {
                        setCountry(e.target.value)
                    }}
                    className={cx("category")} name="city_id" id="city_id" fdprocessedid="f7ugij">
                        <option value="">-- Quốc gia --</option> 
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
                    <select value={Category} onChange={(e) =>{
                        setCategory(e.target.value)
                    }}  className={cx("category")} name="cat_id" id="cat_id" fdprocessedid="u9enn8">
                        <option value="">-- Thể loại --</option> 
                        <option value="17">Âm Nhạc </option>
                        <option value="21">Blu-ray </option>
                        <option value="37">Coming of Age </option>
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
                        <option value="43">Kid </option>
                        <option value="8">Kinh Dị </option>
                        <option value="16">Lịch Sử </option>
                        <option value="10">Phép Thuật </option>
                        <option value="11">Phiêu Lưu </option>
                        <option value="45">Police </option>
                        <option value="31">Psychological </option>
                        <option value="46">Samurai </option>
                        <option value="28">Siêu Nhiên </option>
                        <option value="5">Thể Thao </option>
                        <option value="7">Trinh Thám </option>
                        <option value="19">Viễn Tưởng </option>
                        <option value="1">Đời Thường </option>
                    </select>
                    <input 
                    value={img}
                    onChange={(e) => {
                        setImg(e.target.value)
                    }}
                    style={
                        {
                            width : 100,
                            height : 13
                        }
                    } type="text">

                    </input>
                    {/* <input 
                    value={Episode}
                    onChange={(e) => {
                        setEpisode(e.target.value)
                    }}
                    style={
                        {
                            width : 100,
                            height : 13
                        }
                    } type="text">

                    </input> */}
            </div>
            <div className={cx("input_create1")}>
                <Col span={24}>
                    <span>name films</span>
                    <input 
                    value={nameFIlms}
                    onChange={(e) => {
                        setNameFilms(e.target.value)
                    }}
                    style={
                        {
                            width : "80%"
                        }
                    } />
                </Col>
                <Col span={24}>
                    <span>description</span>
                    <input 
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    style={
                        {
                            width : "80%"
                        }
                    } />
                </Col>
                <Col span={24}>
                    <span>content films</span>
                    <input 
                    value={contentFilms}
                    onChange={(e) => {
                        setContentFilms(e.target.value)
                    }}
                    style={
                        {
                            width : "80%"
                        }
                    } />
                </Col>
                    {
                    img && Category
                    && contentFilms && country
                    && nameFIlms &&  description && year &&
                    <button 
                    onClick={handleCreateSeriesMovie}
                    >create</button>}
            </div>
        </div>
    </div>
  )
}

export default SERIESMOVIE