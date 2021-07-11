import React from 'react'
import {Programs} from '../utils/constants'
import styled from 'styled-components'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'



function ProgramsPage() {
  return (
    <main>
    <PageHero title='Programs' />
    <Wrapper className='page section'>
      <section className="">
        <div className="title">
          <h2>Training Programs</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center">
            {Programs.map((menuItem) => {
        const { id, name, text, price, url, image } = menuItem;
        return (
          <article key={id}>        
            <div className="item-info">
            <img src={image} alt={name} className="photo" />
                <h4>{name}</h4>
                <h4>{price}</h4> 
              <p className="item-text">{text}</p>
            </div>
            <a className='btn' href={url} target="_blank">Get Program</a>
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
       
        width: 400px;
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

      .btn {
        display: block;
        width: 148px;
        margin-top: 10px;
        margin-bottom: 15px;
        text-align: center;
      }


      @media screen and (max-width: 1400px) {
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


export default ProgramsPage;