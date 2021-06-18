import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function importAll(r) {
    return r.keys().map(r);
}

var slideIndex = 1;
var months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

export default function Home() {
    const MovieMajor = [
        {
            "Name": "มอร์ทัล คอมแบท",
            "DateMovie": 8,
            "MonthMovie": 4,
            "YearMovie": 2564
        },
        {
            "Name": "ซอบก มนุษย์อมตะ",
            "DateMovie": 15,
            "MonthMovie": 4,
            "YearMovie": 2564,

        },
        {
            "Name": "คนธรรมดานรกเรียกพี่",
            "DateMovie": 13,
            "MonthMovie": 4,
            "YearMovie": 2564,
        },
        {
            "Name": "ก็อดซิลล่า ปะทะ คอง",
            "DateMovie": 25,
            "MonthMovie": 3,
            "YearMovie": 2564,
        },
        {
            "Name": "โดราเอมอน เพื่อนกันตลอดไป 2",
            "DateMovie": 6,
            "MonthMovie": 4,
            "YearMovie": 2564,
        }
    ]
    useEffect(() => {
        if (document.getElementsByClassName("mySlides").length !== 0) {
            showSlides(slideIndex);
        }
    }, []);
    let images = importAll(require.context('./movieimg/hilight', false, /\.(png|jpe?g|svg)$/));
    images = Object.entries(images).map(module => module[1].default);
    //console.log(images);
    let imgsilder = [];
    let silderspan = [];
    images.map((image, index) => {
        imgsilder.push(
            <div className="mySlides fade">
                <img src={image} width="100%" height="300px" alt="animehilight" />
            </div>
        );
        silderspan.push(
            <span className="dot" onClick={() => currentSlide(index + 1)}></span>
        );
        return null
    })

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    const showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" spanactive", "");
        }
        //console.log(slides);
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " spanactive";
    }
    return (
        <>
            <div className="slideshow-container">
                {imgsilder}
                <a id="silde" href={() => false} className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a id="silde" href={() => false} className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                <div className="silderspan">{silderspan}</div>
            </div>
            <div className="lowhalf bigheadtitle px-5">หนังทำเงินประจำสัปดาห์ของ Major</div>
            <div className="TopicLine mx-5 my-2" />

            <Router forceRefresh>
                <div className="row mx-2">
                    {MovieMajor.map(val => {
                        return (
                            <>
                                <Link className="col-2 mx-4 mt-3" to={{ pathname: '/Movie/' + val.Name }} >
                                    <div className="lowhalf divimg" >
                                        <img src={require('./movieimg/' + val.Name + '/' + val.Name + '.jpg').default} alt={val.Name} />
                                        <div className="mt-2">{val.Name}</div>
                                        <div>{val.DateMovie + " " + months[val.MonthMovie - 1] + " " + val.YearMovie}</div>
                                    </div>
                                </Link>
                            </>
                        );
                    })
                    }
                </div >
            </Router>
        </>

    );

}