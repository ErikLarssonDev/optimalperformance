import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/home-hero.png'

const Hero = () => {
  return (
    <Wrapper>
   <div class="hero-image">
  <img src={heroBcg}/>
  <div class="hero-text">
        <Link to='/contact' className='btn hero-btn'>
          Contact Me
        </Link>
  </div>
</div>
        
  
    </Wrapper>
  )
}

const Wrapper = styled.section`

  display: grid;
  place-items: center;
 
  }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
.hero-image {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 70%;
  left: 10%;
  transform: translate(-50%, -50%);
  color: white;
}

 @media screen and (max-width: 750px) {
    img{
   width: 100vw;
 }
 .hero-text {
   left: 15%;
 }
  .hero-btn {
      padding: 0.5rem 0,75rem;
      font-size: 0,5rem;
    }
    .btn {
    padding: 0.375rem 0.75rem;
  
  
  font-weight: 300;

  font-size: 0.5rem;
    }
   }
   }




  
`

export default Hero
