import React from "react"
import Container from 'react-bootstrap/Container'
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'

const Accueil = () => (
    <Container fluid className="homepage-bgimage d-flex justify-content-center align-items-center p-0 " id="homeText">
        <div className="d-flex justify-content-center align-items-center layer">
            <div className="d-flex flex-column align-items-center">
                <h1 className="d-flex surnameTitle text-align-center" >Thibaud Lamothe</h1>
                <p className="d-flex text-align-center">French Machine Learning Engineer</p>
                 
                <TypistLoop interval={500}>
                 <Typist cursor={{blink: true, hideWhenDone:true, hideWhenDoneDelay:0}}>
                 
                    <span className="">
                        Scraping Lover 
                        <span role='img' aria-label='scraping-web'> 🕸</span>
                    </span>

                    <Typist.Delay ms={3000} />
                    <Typist.Backspace count={25} delay={100} avgTypingDelay={100}/>
                    <Typist.Delay ms={400} />
                    
                    <span className="">
                        Data Cruncher 
                        <span role='img' aria-label='computer-guy'> 🧑‍💻</span>
                    </span>
                    <Typist.Delay ms={3000} />
                    <Typist.Backspace count={25} delay={100} avgTypingDelay={100} />
                    <Typist.Delay ms={400} />
                    
                    <span className="">
                        Python Native Speaker 
                        <span role='img' aria-label='python'> 🐍</span>
                    </span>
                    <Typist.Delay ms={3000} />
                    <Typist.Backspace count={25} delay={100} avgTypingDelay={100} />
                    <Typist.Delay ms={400} />
                    
                    <span className="">
                        Coffee Drinker 
                        <span role='img' aria-label='coffee-cup'> ☕</span>
                    </span>
                    <Typist.Delay ms={3000} />
                    <Typist.Backspace count={25} delay={100} avgTypingDelay={100} />
                    <Typist.Delay ms={400} />

                    <span className="">
                        <span role='img' aria-label='cowboy-data-scientist'>🤠</span>
                    </span>
                </Typist>
                </TypistLoop>
            </div>
        </div>
        
    </Container>
)

export default Accueil