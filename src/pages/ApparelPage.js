import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
const ApparelPage = () => {
    return (
        <main>
            <PageHero title='Apparel' />
            <Wrapper>
            <iframe className='spreadshop' src="https://shop.spreadshirt.co.uk/optimal-performance/"></iframe>
               
            </Wrapper>
        </main>

    )
}

const Wrapper = styled.main`
width: 100%;

.spreadshop {
    border: 0;
    width: 100%;
    height 1000px;
}

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
  color: var(--clr-primary-10);
}
.title {
  text-align: left;
}
.underline {
  margin-left: 0;
}
@media (min-width: 992px) {
  grid-template-columns: 1fr 1fr;
}
`

export default ApparelPage