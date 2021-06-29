import React from 'react'
import {Programs} from '../utils/constants'
import styled from 'styled-components'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'



function FeaturedPrograms() {
  return (
    <main>
    <Wrapper className='section'>
      <section>
        <div className="title">
          <h2>Training Programs</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center">
            {Programs.map((menuItem) => {
        const { id, name, text, price, url, image } = menuItem;
        return (
          <article key={id}> 
          <Link to='/programs'>   
            <div className="item-info">
            <img src={image} alt={name} className="photo" />
                <h4>{name}</h4>
                <h4>{price}</h4>
            </div>
            </Link>
            <a className='btn' href={url} target="_blank">Download Program</a>
           
          </article>
        );
      })}    
    </div>
      </section>
     
      </Wrapper>
      
    </main>
  );
    }
    const Wrapper = styled.div`
    .menu {
        padding: 5rem 0;
      }
      .title {
        text-align: center;
        margin-bottom: 2rem;
      }
      .underline {
        width: 20rem;
        height: 0.25rem;
        background: var(--clr-primary-5);
        margin-left: auto;
        margin-right: auto;
      }
   
      .section-center {
        text-align: left;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 400px 400px 400px;
      }
      
      .photo {
        object-fit: cover;
       
        width: 350px;
        border: 0.25rem solid var(--clr-gold);
        border-radius: var(--radius);
        display: block;
        margin-bottom: 5px;
      }
      .item-info header {
        display: flex;
        justify-content: space-between;
        border-bottom: 3px solid var(--clr-grey-5);
      }
      .item-info h4 {
        margin-bottom: 0.5rem;
      }
      .price {
        color: var(--clr-gold);
      }
      .item-text {
        margin-bottom: 0;
        padding-top: 1rem;
      }

      @media screen and (max-width: 1240px) {
        .section-center {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 90vw;
          }
          .photo {
              width: 90vw;
          }
      }

`


export default FeaturedPrograms;