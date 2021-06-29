import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'

const ProductsPage = () => {
  return (
    <main>
      <PageHero title='Training Programs' />
      <Wrapper>
        <div className='products'>
       {/*<Filters />*/}   
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`

  .products {
    gap: 3rem 1.5rem;
    margin: 2rem;
    text-align: center;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage