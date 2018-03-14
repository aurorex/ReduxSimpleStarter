import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component {
  render(){
    return(
      <header>
        <h1>Hola soy Aurora</h1>
        </header>
    )
  }
}

class Section extends Component {
 render(){
   return(
     <section>
       <h2>Gustos</h2>
       <ul>
         <li>Programar</li>
         <li>Actuar</li>
         <li>Bailar</li>
         
       </ul>
     </section>
   )
 }
}

class Footer extends Component {
 render(){
   return(
     <footer>Copirigth</footer>
   )
 }
}

const App = () => (
 <div>
   <Header/>
   <Section/>
   <Footer/>
 </div>
)

export default App

