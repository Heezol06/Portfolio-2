import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from  "../asset/html-5 (1).png"
import css from  "../asset/css-3 (1).png"
import js from  "../asset/js (1).png"
import bootstrap from "../asset/bootstrap (1).png"
import tailwind from "../asset/tailwind-css.png"
import react from  "../asset/react.png"
import git from  "../asset/git.png"
import node from  "../asset/nodejs.png"
import mongo from  "../asset/mongodb.png"
import express from  "../asset/express.png"
import firebase from  "../asset/firebase.png"
import figma from  "../asset/figma.png"
import router from "../asset/React-Router-01.png"
import stripe from "../asset/Stripe-01.png"
import jwt from  "../asset/jwt.png"
import postman from  "../asset/postman.png"
import daisyui from  "../asset/daisy.png"
import query from  "../asset/query.png"
import rechart from  "../asset/rechart.png"
import heroku from  "../asset/Heroku-01.png"
import netlify from "../asset/Netlify-02.png"

const MultiCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <section className='lg:px-32 px-4 mt-44'>

            <div>
            

                <span className='flex'>
                    <div className='w-14 border-t-8 border-white'></div>
                    <div className='w-52 lg:w-96 mt-1 border-t-2 border-white'></div>
                </span>
            </div>

            <Carousel responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                arrows={false}
                pauseOnHover={false}
                customTransition="all 1s linear"
                className="my-20"
            >

                <img className='w-32' src={html} alt="" />
                <img className='w-32' src={css} alt="" />
                <img className='w-32' src={js} alt="" />
                <img className='w-32' src={bootstrap} alt="" />
                <img className='w-32 relative top-4' src={tailwind} alt="" />
                <img className='w-32 relative top-11' src={daisyui} alt="" />
                <img className='w-32' src={react} alt="" />
                <img className='w-32' src={git} alt="" />
                <img className='w-32' src={mongo} alt="" />
                <img className='w-32' src={node} alt="" />
                <img className='w-32' src={express} alt="" />
                <img className='w-32' src={firebase} alt="" />
                <img className='w-32 relative bottom-4' src={heroku} alt="" />
                <img className='w-32' src={netlify} alt="" />
                <img className='w-32' src={figma} alt="" />
                <img className='w-32' src={router} alt="" />
                <img className='w-32' src={query} alt="" />
                <img className='w-32 relative top-7' src={rechart} alt="" />
                <img className='w-32' src={stripe} alt="" />
                <img className='w-32 relative top-11' src={jwt} alt="" />
                <img className='w-32' src={postman} alt="" />

            </Carousel>

        </section>
    );
};

export default MultiCarousel;