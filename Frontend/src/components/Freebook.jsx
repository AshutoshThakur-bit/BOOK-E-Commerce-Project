import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";

const Freebook = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:5001/book");
                console.log(res.data); // Corrected log
                setBook(res.data);
            } catch (error) {
                console.error("Error fetching book data:", error);
            }
        };

        getBook();
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
                <h1 className="text-xl font-bold pb-2">Free offered courses</h1>
                <p>Explore a wide range of books available absolutely FREE. Start reading without spending a single rupee and discover knowledge that matters.</p>
            </div>

            <div>
                {book.length > 0 ? (
                    <Slider {...settings}>
                    {book.map((item, index) => (
                        <Cards item={item} key={item.id || index} />
                    ))}
                </Slider>
                ) : (
                    <p>Loading courses...</p>
                )}
            </div>
        </div>
    );
};

export default Freebook;
