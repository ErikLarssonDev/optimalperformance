import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    
    <Wrapper>  
      <div>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Optimal Performance Coaching Sweden AB</span>
      </h5>
      <h5>All rights reserved</h5>
      <div><p>By continuing to browse, you agree to the storing of cookies on your device to enhance your site expeerience and for analytical purposes. To learn more about how we use the cookies, please contact us.</p></div>
      </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.footer`
  height: 10rem;
  position: relative;
  display: flex;
  margin-bottom: 0px;
  margin-top:0px
  bottom: 0px;
  witdth: 100%;
  flex-direction: column;;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
