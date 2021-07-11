import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { testimonials } from '../utils/constants'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { FaQuoteRight } from 'react-icons/fa'
import { BsFillPersonCheckFill } from "react-icons/bs"


const TestimonialsSlider = () => {

  const [index, setIndex] = useState(0);
  const { id, img, name, text } = testimonials[index];



  const checkNumber = (number) => {
    if (number > testimonials.length - 1) {
      return 0;
    }
    if (number < 0) {
      return testimonials.length - 1;
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
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * testimonials.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  const checkImg = (i) => {
    if (!testimonials[checkNumber(i)].hasOwnProperty('img')) {
      return (<div className='icon-img'>
        <BsFillPersonCheckFill size={100} />
      </div>);
    } else { return (<img className='person-img' src={testimonials[checkNumber(i)].img} />); }
  }

  return (
    <Wrapper>
      <div className='section-center'>
        <h3 className='title'>Testimonials</h3>
        <h3 className='underline'></h3>
        <div className='testimonails'>
          <div className='testimonials-center'>
            <article className='review'>
              <div className='img-container'>
                {checkImg(index + 1)}
                <span className='quote-icon'>
                  <FaQuoteRight />
                </span>
              </div>
              <h4 className='author'>{testimonials[checkNumber(index + 1)].name}</h4>
              <p className='info'>{testimonials[checkNumber(index + 1)].text}</p>
            </article>
          </div>
          <div className='testimonials-center'>
            <article className='review'>
              <div className='img-container'>
                {checkImg(index)}
                <span className='quote-icon'>
                  <FaQuoteRight />
                </span>
              </div>
              <h4 className='author'>{testimonials[checkNumber(index)].name}</h4>
              <p className='info'>{testimonials[checkNumber(index)].text}</p>
            </article>
          </div>
          <div className='testimonials-center'>
            <article className='review'>
              <div className='img-container'>
                {checkImg(index - 1)}
                <span className='quote-icon'>
                  <FaQuoteRight />
                </span>
              </div>
              <h4 className='author'>{testimonials[checkNumber(index - 1)].name}</h4>
              <p className='info'>{testimonials[checkNumber(index - 1)].text}</p>
            </article>
          </div>
        </div>
      </div>
      <div className='buttons'>
          <div className='title'>
            <div>
              <button className='prev-btn' onClick={prevPerson}>
                <BsChevronLeft />
              </button>
              <button className='next-btn' onClick={nextPerson}>
                <BsChevronRight />
              </button>
            </div>
            <div>
              <button className='btn' onClick={randomPerson}>
                surprise me
              </button>
            </div>
          </div>
        </div>



    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  position: relative;
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
  margin-bottom: 1rem;
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
  height: 650px;
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


/*`
h3,
h4 {
  color: var(--clr-primary-1);
}
padding: 5rem 0;

background: var(--clr-primary-10);

.header h3 {
  margin-bottom: 2rem;
}
p {
  margin-bottom: 0;
  line-height: 1.8;
  color: var(--clr-primary-3);
}
.services-center {
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;
}
.service {
  background: var(--clr-primary-7);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);
  p {
    color: var(--clr-primary-2);
  }
}
.person-img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
}
.prev-btn,
.next-btn {
  color: var(--clr-primary-1);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
}
.prev-btn:hover,
.next-btn:hover {
  color: var(--clr-primary-5);
}
span {
  width: 4rem;
  height: 4rem;
  display: grid;
  margin: 0 auto;
  place-items: center;
  margin-bottom: 1rem;
  border-radius: 50%;
  background: var(--clr-primary-10);
  color: var(--clr-primary-1);
  svg {
    font-size: 2rem;
  }
}
@media (min-width: 992px) {
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 576px) {
  .services-center {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}
@media (min-width: 1280px) {
  padding: 0;
  .section-center {
    transform: translateY(5rem);
  }
}
 



`
*/
export default TestimonialsSlider
