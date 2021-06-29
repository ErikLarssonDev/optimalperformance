import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about.JPG'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} />
        <article>
          <div className='title'>
            <h2>my story</h2>
            <div className='underline'></div>
          </div>
          <p>
          The head coach Erik Larsson started coaching a small roster of athletes in 2017.
          Through years of refining his methods and providing great results the team grew and in 2021 Optimal Performance Coaching AB was founded.
          As an athlete Erik Larsson has competed in powerlifting both raw and equipped since 2018.
          Through years of hard work and determination he has become an internatinally competetive powerlifter and a part of the swedish national team.
          </p>
          <Link to='/contact' className='btn'>
          Contact Me
        </Link>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--clr-primary-1);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .header {
    color: var(--crl-primary-1);
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
