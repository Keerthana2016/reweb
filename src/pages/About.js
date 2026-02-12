import React from 'react'
import background from '../assets/background.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className ="about">
        <div className = "aboutTop"
       style ={{backgroundImage: `url(${background})`}}> </div>
         <div className = "aboutBottom">
            <h1>About Us</h1>
            <p>
                Millets are very rich in nutrients and are considered to be 
                superfoods. They are a great source of protein, fiber, vitamins,
                 and minerals. Millets are also gluten-free, making them an 
                 excellent choice for people with gluten intolerance or celiac 
                 disease. Our mission is to promote the consumption of millets 
                 and educate people about their health benefits. We believe 
                 that by incorporating millets into our diets, we can improve 
                 our overall health and well-being.It would be cultivated using
                  traditional farming methods that are sustainable and 
                  environmentally friendly. This means avoiding the use of 
                  harmful pesticides and fertilizers and instead relying on 
                  natural methods to maintain soil health and fertility.
            </p>
         </div>
    </div>
  )
}

export default About
