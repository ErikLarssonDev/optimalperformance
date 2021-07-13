import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { RiCheckboxCircleLine } from "react-icons/ri"
import AllAccess from '../assets/PromotionSlidesOP/3.png'
import IndividualizedProgram from '../assets/PromotionSlidesOP/4.png'
import PromoSlides from './PromoSlides'

const CoachingServices = () => {

  return (
    <Wrapper>
      <div className='section-center'>
        <div className='title'>
          <h2>Individualized Services</h2>
          <div className='underline'></div>
        </div>
        <div className='services-center'>

          <article className='service section-center' >
          <img src={AllAccess}></img>
            <h4>All access coaching</h4>
            <p>
              We start with creating an individualized program based on an extensive anlysis of your goals, needs and training background to create the best program for YOU. Then we proceed with Week-To-Week or Month-To-Month feedback and program updates to achieve optimal performance.
</p>
            <p>
              This option is best suited for competative powerlifters who want the optimal training program.
</p>
            <p>
              Price: 699 SEK/Month (599 SEK/Month for students)
            </p>
            <ul>
              <li>
                <p>
                  <RiCheckboxCircleLine /> Fully individualized program
              </p>
              </li>
              <li>
                <p>
                  <RiCheckboxCircleLine /> Weekly/monthly program updates
              </p>
              </li>
              <li>
                <p>
                  <RiCheckboxCircleLine /> Weekly feedback and support
              </p>
              </li>
            </ul>
            <Link to='/contact' className='btn'>
              Get Started
      </Link>
          </article>
        </div>
      </div>


      <article className='section-center service'>
        <PromoSlides/>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
h2,
h3,
h4 {
  color: var(--clr-primary-1);
}

img {
  width: 100%;
  height: auto;
  max-width: 100%;
}

h3,
h4,
{
  color: var(--clr-primary-1);
}

li {
  color: var(--clr-primary-1);
padding: 1rem;
}

padding: 5rem 0;

background: var(--clr-primary-10);

.header h3 {
  margin-bottom: 2rem;
}

.image {
  width: 50%;
}

p {
  margin-bottom: 0;
  line-height: 1.8;
  color: var(--clr-primary-1);
}
.services-center {
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;
}
.service {
  background: var(--clr-primary-8);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);
  margin-bottom: 2rem;
  margin-top: 10px;
  
  p {
    padding: 1rem;
    color: var(--clr-primary-1);
  }
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
@media (min-width: 750px) {
  .services-center {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
}
@media (min-width: 1280px) {
  padding: 0;
  .section-center {
    transform: translateY(5rem);
  }
}
`

export default CoachingServices
