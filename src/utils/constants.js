import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import { BsFillPersonCheckFill } from "react-icons/bs"
import filipImg from '../assets/Filip_Flink.JPG'
import BeginnerProgramImg from '../assets/BeginnerProgram.png'
import Promo1 from '../assets/PromotionSlidesOP/5.png'
import Promo2 from '../assets/PromotionSlidesOP/6.png'
import Promo3 from '../assets/PromotionSlidesOP/7.png'
import Promo4 from '../assets/PromotionSlidesOP/8.png'


export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'programs',
    url: '/programs',
  },
  {
    id: 4,
    text: 'services',
    url: '/services',
  },
  {
    id: 5,
    text: 'Apparel',
    url: '/apparel',
  },
  {
  id: 6,
  text: 'Contact',
  url: '/contact',
},

]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'My mission is to help you reach your true potential by providing high quality programming, knowledge and guidance through the whole process.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'My vision is to build a team of exeptional athletes with a passion for the sport who can lift extraordinaty numbers on the platform. I also want to inspire and help as many as possible in their pursuit of their full potiential.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'The head coach Erik Larsson started coaching a small roster of athletes in 2017. Through years of refining his methods and popular demand the team grew and in 2021 Optimal Performance Coaching AB was founded.',
  },
]

export const testimonials = [
  {
    id: 1,
   
    name: 'Hanna Wikingsson',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
 
    name: 'Amanda Fors',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    
    name: 'Viktor Larsson',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 4,
    img: filipImg,
    name: 'Filip Flink',
    text:
    '"Erik is very meticulous and precise in his coaching, from training planning to the everyday. He listens and can discuss one thing and another to optimize and individualize the training approach. If you are looking for someone who has 100% control of all possible training and coaching variables, Erik is the right person you are looking for! ”'
  },
]

export const Programs = [
  {
    id: 1,
    name: '6 Week Beginner Program',
    text: 'This is a 6-week training approach designed for beginner lifters to peak effectively into actual competitions (or a mock meet) with high performance. The first weeks represent higher overall work and lower overall loading, designed to build training adaptions and muscle hypertrophy. We’ll do a step taper on Week 5, shedding some fatigue and preparing for the next phase. Finally, on Week 6 you have the option to either deload and run the program again or do a peak to test your 1RM.',
    price: 'Free',
    url: 'https://docs.google.com/spreadsheets/d/19Qx8Qh4RJ3MD_Ee8R0Sj7s22GhxrSQAvUE-yxaZMA8o/edit?usp=sharing',
    image: BeginnerProgramImg,
  },
  
]

export const promoSlides = [
  {
    id:1,
    image: Promo1
  },
  {
    id:2,
    image: Promo2
  },
  {
    id:3,
    image: Promo3
  },
  {
    id:4,
    image: Promo4
  },
]

