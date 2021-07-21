import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import { BsFillPersonCheckFill } from "react-icons/bs"
import filipImg from '../assets/Filip_Flink.JPG'
import amandaImg from '../assets/Amanda.JPG'
import BeginnerProgramImg from '../assets/BeginnerProgram.png'
import IndividualizedProgramImg from '../assets/Individualizedprogram.png'
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
    img: amandaImg,
    name: 'Amanda Fors',
    text:
      '"Erik is an extremely knowledgeable coach with plenty of his own experience in the sport at an elite level. He takes the time to analyze and set up a program tailored to your specific needs. At the same time, he always takes into account your wishes to ensure that the approach is not only developing, but also fun on the way to the common goal. The programming is advanced and takes into account external factors for training and everyday life to work together. With Erik as a coach, anyone can go from beginner to athlete at the elite level as long as you have the will."',
  },
  {
    id: 2,
    
    name: 'Viktor Larsson',
    text:
      '"With Erik as a coach, you will already within a couple of months notice a big difference in your performance, and that the development continues upwards without stagnating. In my opinion, it is at least one of the absolute best and safest ways to increase both strength and improve technique for the long term."',
  },
  {
    id: 3,
    img: filipImg,
    name: 'Filip Flink',
    text:
    '"Erik is very meticulous and precise in his coaching, from training planning to the everyday. He listens and can discuss one thing and another to optimize and individualize the training approach. If you are looking for someone who has 100% control of all possible training and coaching variables, Erik is the right person you are looking for! ”'
  },
  {
    id: 4,
    name: 'Astrid Edvardsson',
    text:
      '"Erik is someone who cares about you as an athlete. enjoys coaching and seeing progress! Adapts the schedule well to how you want it, both in the long and short term!!"',
  },
  {
    id: 5,
    name: 'Tom Lingestad',
    text:
      '"As a coach Erik is very responsive and addresses the needs of the individual."',
  },
  {
    id: 6,
    name: 'Markus Renström',
    text:
      '"I always recommend Erik as a coach, he is competent and knowledgeable and does it at a fair price."',
  },
  {
    id: 7,
    name: 'Emil Johansson Findahl',
    text:
      '"Erik is very good and is very comfortable to have as a coach. He writes good programs and is very open to discussing ideas. He is also easily accessible, gives quick response, and is very nice."',
  },
  {
    id: 8,
    name: 'Greta Jonsson',
    text:
      '"Erik has helped me a lot with my technique and made me increase in all lifts. He comes up with his own ideas as he listens to my wishes!"',
  },
  {
    id: 9,
    name: 'Klara Söderberg',
    text:
      '"Erik is serious and thorough as a coach, it is noticeable that he prioritizes his work with training programs, feedback, technical work, and more. He is motivating genuinely and very easy to get along with. I really recommend Erik if you are interested in getting help with your training!"',
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
  {
    id: 2,
    name: 'Individualized Program',
    text: 'Individualized programs are built based on an extensive anlysis of your goals, needs and training background to create the best program for YOU. We start by analyzing your technique and needs before writing the program, we will also have a check-in when the program is finished to evaluate the program.',
    price: '(49 SEK, 6 USD, 5 EUR)/Week',
    url: 'https://forms.gle/XE5NFZNg9GNiZBFN6',
    image: IndividualizedProgramImg,
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

