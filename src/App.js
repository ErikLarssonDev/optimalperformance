import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import ContactPage from './pages/ContactPage'
import ContactSubmitPage from './pages/ContactSubmitPage'
import ApparelPage from './pages/ApparelPage'
import ServicesPage from './pages/ServicesPage'
import ProgramsPage from './pages/ProgramsPage'
import BlogPage from './pages/BlogPage'
import CreatePost from './components/CreatePost'
import PostDetail from './components/PostDetail'
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
  
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/contact'>
            <ContactPage />
          </Route>
          <Route exact path='/contactsubmit'>
            <ContactSubmitPage />
          </Route>
          <Route exact path='/apparel'>
            <ApparelPage />
          </Route>
          <Route exact path='/services'>
            <ServicesPage />
          </Route>
          <Route exact path='/programs'>
            <ProgramsPage />
          </Route>
          <Route exact path='/products/:id' children={<SingleProduct />} />
          <Route exact path='/blog'>
            <BlogPage />
          </Route>
          <Route exact path="/post/:postid" component={PostDetail} />
          <Route exact path="/create-post" component={CreatePost} />
          


          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
