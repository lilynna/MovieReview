import React, { useState, useEffect } from 'react';
import YoutubeEmbed from "./YoutubeEmbed";

var months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

export default function Movie() {
    console.log(window.location.pathname);
    let searchname = window.location.pathname.replace('/Movie/', '');
    console.log(searchname);
    const [Movie, setMovie] = useState();
    //useEffect(() => { fetch('/movies/คนเรียกผี 2').then(res => res.json()).then(res => setMovie(res)); }, []);
    useEffect(() => { fetch('/movies/' + searchname).then(res => res.json()).then(res => setMovie(res)); }, []);
    if (Movie !== undefined) {
        console.log(Movie);
    }

    return (
        <div className="container-fluid">
            {/*<div className="row">
                <div className="header"></div>
            </div>
            <div className="row">
                <div className="navbar"></div>
    </div>*/}
            {Movie !== undefined && <>
                <div className="divrowinfo row mx-5 my-5">
                    <div className="divimg col-2"><img src={require('./movieimg/' + Movie.Name + '/' + Movie.Name + '.jpg').default} alt={Movie.Name} /></div>
                    <div className=" col-3">
                        <div className="movietitle">{Movie.Name}</div>
                        <div className="moviedate my-2">{Movie.DateMovie + " " + months[Movie.MonthMovie - 1] + " " + Movie.YearMovie}</div>
                        <div className="movieinfo my-2 mt-3">
                            <div><i className="far fa-clock me-2" aria-hidden="true"></i>{Movie.ShowTime}</div>
                            <div><i className="fas fa-tag me-2 mt-2"></i>{Movie.Type}</div>
                            <div><i className="far fa-star me-2 mt-2"></i>9.8/10</div>
                        </div>
                    </div>
                    <div className="divvideo col-7"><YoutubeEmbed embedId={Movie.YoutubeEmbedid} /></div>
                </div>
                <div className="row justify-content-center mx-5">
                    <hr className="col-12" />
                </div>
                <div className="row mx-5 my-3 mb-5">
                    <div className="lowhalf">
                        <div className="bigheadtitle">ข้อมูลภาพยนตร์ | รีวิวภาพยนตร์</div>
                        <div className="headtitle mt-3">เรื่องย่อ</div>
                        <div className="content mt-3">&emsp;&emsp;{" " + Movie.Synosis} </div>
                        {Movie.CastandCrew.length > 0 && <>
                            <div className="headtitle mt-3">นักแสดงและผู้กำกับ
                                <div className="rowactors row mt-3">
                                    {Movie.CastandCrew.map(val => {
                                        return (
                                            <div className="col-2">
                                                <img src={require('./movieimg/' + Movie.Name + '/CastandCrew/' + val.name + '.jpg').default} alt="actor" />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="rowactors row">
                                    {Movie.CastandCrew.map(val => {
                                        return (
                                            <div className="col-2">
                                                <label className="actorname">{val.name}</label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                        }
                        {/*<div className="headtitle mt-3">รูปพรีวิว</div>
                        <div className="divpreview mt-3">
                            <img src="https://cdn.majorcineplex.com/uploads/movie_gallery/2746/movie_gallery_2746_20210322140714.jpg" alt="Preview01" />
                            <img src="https://cdn.majorcineplex.com/uploads/movie_gallery/2746/movie_gallery_2746_20210322140722.jpg" alt="Preview02" />
                            <img src="https://cdn.majorcineplex.com/uploads/movie_gallery/2746/movie_gallery_2746_20210322140729.jpg" alt="Preview03" />
                            <img src="https://cdn.majorcineplex.com/uploads/movie_gallery/2746/movie_gallery_2746_20210322140737.jpg" alt="Preview04" />
                            <img src="https://cdn.majorcineplex.com/uploads/movie_gallery/2746/movie_gallery_2746_20210322140744.jpg" alt="Preview05" />
                            <img src="https://cdn.majorcineplex.com/uploads/movie_gallery/2746/movie_gallery_2746_20210322140752.jpg" alt="Preview06" />
                            <img src="https://cdn.majorcineplex.com/uploads/movie_gallery/2746/movie_gallery_2746_20210322140758.jpg" alt="Preview07" />
                            <img src="https://cdn.majorcineplex.com/uploads/movie_gallery/2746/movie_gallery_2746_20210322140804.jpg" alt="Preview08" />
                    </div>*/}
                    </div>
                </div>
            </>
            }
        </div>
    );
}