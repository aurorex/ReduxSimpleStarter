import React, { Component } from 'react';

const Header = () => {
      <header>Hola soy Aurora</header>
}

const Section = () => {
     <section>
       <h2>Gustos</h2>
       <ul>
         <li>Programar</li>
         <li>Actuar</li>
         <li>Bailar</li>
         
       </ul>
     </section>
}
const Footer = () => {
     <footer>Copirigth</footer>
}

const App = () => (
 <div>
   <Header/>
   <Section/>
   <Footer/>
 </div>
)

export default App

