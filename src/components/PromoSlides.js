import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { promoSlides } from '../utils/constants'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const PromoSlides = () => {

  const [index, setIndex] = useState(0);
  const { id, image } = promoSlides[index];



  const checkNumber = (number) => {
    if (number > promoSlides.length - 1) {
      return 0;
    }
    if (number < 0) {
      return promoSlides.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const checkImg = (i) => {
    if (promoSlides[checkNumber(i)].hasOwnProperty('image')) {
     return (<img src={promoSlides[checkNumber(i)].image} />); }
  }

  return (
    <Wrapper>
    {checkImg(index)}
     
          <div className='title'>
          <button className='prev-btn' onClick={prevPerson}>
                <BsChevronLeft />
              </button>
              <button className='next-btn' onClick={nextPerson}>
                <BsChevronRight />
              </button>
          </div>
     
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
 
  place-items: center;
}

h4 {
  color: var(--clr-primary-10);
}

p {
  margin-bottom: 0;
  line-height: 1.8;
  color: var(--clr-primary-10);
}

.buttons {
  margin-top: 0px;
  margin-bottom: 0px;
  
}

.title {
  text-align: center;
  margin-bottom: 0rem;
}
.underline {
  height: 0.25rem;
  width: 10rem;
  background: var(--clr-primary-5);
  margin-top: 0px;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
}
.container {
  width: 80vw;
  max-width: var(--fixed-width);
}
.review {
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  text-align: center;
  margin-bottom: 0px;
  height: 500px;
}
.review:hover {
  box-shadow: var(--dark-shadow);
}
.img-container {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}
.person-img {
  width: 150px;
  height: 150px
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 75px;
  position: relative;
}

.icon-img {
    width: 150px;
    display: block;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
  }

.quote-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transform: translateY(25%);
  background: var(--clr-primary-7);
  color: var(--clr-white);
}
.img-container::before {
  content: '';
  width: 100%;
  height: 100%;
  background: var(--clr-primary-7);
  position: absolute;
  top: -0.25rem;
  right: -0.5rem;
  border-radius: 50%;
}
.author {
  margin-bottom: 0.25rem;
}
.info {
  margin-bottom: 0rem;
}
.prev-btn,
.next-btn {
  color: var(--clr-primary-5);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0rem;
  transition: var(--transition);
  cursor: pointer;
  margin-top:0px;
}
.prev-btn:hover,
.next-btn:hover {
  color: var(--clr-primary-5);
}
.random-btn {
  margin-top: 0 px;
  margin-bottom: 0px;
  background: var(--clr-primary-10);
  color: var(--clr-primary-5);
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: var(--radius);
  transition: var(--transition);
  border-color: transparent;
  cursor: pointer;
}
.random-btn:hover {
  background: var(--clr-primary-5);
  color: var(--clr-primary-1);
}

.testimonials-center {
    float: left;
    width: 33%;
    padding: 0 10px;
    margin-bottom: 0px;
    flex 1;
  }
  
  .testimonials {
   margin: 0 0;
   margin-bottom: 0px;
   display: flex;
   width: 100%;
  } 

  @media screen and (max-width: 750px) {
    .testimonials-center {
        width: 100%;
        display: block;
        margin-bottom: 0px;
        margin-top: 10px;
      }

.prev-btn,
.next-btn {
  margin-top: 0px;
  margin-bottom: 0px;
}

.random-btn {
  margin-top: 5px;
  marigin-bottom: 20px;
  }  
  `
export default PromoSlides
