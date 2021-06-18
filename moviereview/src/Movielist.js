import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

var months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

export default function Movie() {
    const [Movielist, setMovielist] = useState([]);
    const [checkselect, setcheckselect] = useState("out");

    useEffect(() => { fetch('/movies').then(res => res.json()).then(res => setMovielist(res)); }, []);

    const select = (select) => {
        console.log(select);
        setcheckselect(select);
    }

    const list = (select) => {
        var selectlist = [];
        let selectid = ["out", "now", "soon"];
        selectid.forEach(val => {
            if (document.getElementById(val) !== null) {
                if (val === select) {
                    document.getElementById(val).className = "span mx-4 active";
                } else {
                    document.getElementById(val).className = "span mx-4";
                }
            }
        });

        if (Movielist !== []) {
            if (select === "out") {
                selectlist = Movielist.filter(val => val.MovieOut === true);
            }
            let date = new Date();
            let year = date.getFullYear() + 543;
            let month = date.getMonth() + 1;
            let day = date.getDate();
            if (select === "now") {
                selectlist = Movielist.filter(val => val.MovieOut === false && (val.YearMovie < year || val.MonthMovie < month || val.DateMovie < day));
            } else if (select === "soon") {
                selectlist = Movielist.filter(val => val.MovieOut === false && !(val.YearMovie < year || val.MonthMovie < month || val.DateMovie < day));
            }
        }
        selectlist.sort((a, b) => !(((a.YearMovie * 12) + (a.MonthMovie * 30) + a.DateMovie) > ((b.YearMovie * 12) + (b.MonthMovie * 30) + b.DateMovie)) ? 1 : ((((b.YearMovie * 12) + (b.MonthMovie * 30) + b.DateMovie) > ((a.YearMovie * 12) + (a.MonthMovie * 30) + a.DateMovie)) ? -1 : 0));

        return (
            <Router forceRefresh>
                <div className="row mx-2">
                    {selectlist.map(val => {
                        return (
                            <>
                                <Link className="col-2 mx-4 mt-3" to={{ pathname: '/Movie/' + val.Name }} >
                                    <div className="lowhalf divimg" >
                                        <img src={require('./movieimg/' + val.Name + '/' + val.Name + '.jpg').default} alt={val.Name} />
                                        <div className="mt-1">{val.Name}</div>
                                        <div>{val.DateMovie + " " + months[val.MonthMovie - 1] + " " + val.YearMovie}</div>
                                    </div>
                                </Link>
                            </>
                        );
                    })
                    }
                </div >
            </Router>
        );
    }

    return (
        <div className="container-fluid">
            <div className="htitle mx-4 my-4" >
                ภาพยนตร์
            </div>
            <div className="lowhalf bigheadtitle px-2">
                <span className="span mx-4" id="out" onClick={() => select("out")}>ออกโรงแล้ว</span>
                <span className="span mx-4" id="now" onClick={() => select("now")}>กำลังฉาย</span>
                <span className="span mx-4" id="soon" onClick={() => select("soon")}>เร็วๆนี้</span>

            </div>

            {checkselect === "out" && list("out")}
            {checkselect === "now" && list("now")}
            {checkselect === "soon" && list("soon")}
        </div>
    );

}