import React from 'react'

import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios";

import { useState, useEffect } from 'react';


const Course = () => {

  const [book, setBook] = useState({})
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

  return (<>


    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 item-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you <span className="text-pink-500">here! :) </span> </h1>
        <p className="mt-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ipsum rerum blanditiis? Error, illum. Debitis similique quia ratione quisquam expedita voluptatem rerum voluptatum! Et
          architecto natus minima nostrum reprehenderit pariatur asperiores similique molestiae repellat, quo id saepe quasi quae quis.</p>

        <Link to={"/"}>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 ">Back</button>
        </Link>
      </div>

      <div className="mt-12 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 hover:scale-105 duration-300">
        {book.length > 0 ? (
          book.map((item, index) => (
            <Cards item={item} key={item.id || index} />
          ))
        ) : (
          <p>Loading courses...</p>
        )}

      </div>
    </div>
  </>

  )
}

export default Course