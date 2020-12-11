import React from 'react'
import Navbar from './Navbar';
import Homebody from './Homebody';
import inputs from './inputs';
import Footer from './Footer';

function createBody(body){


    

    return (
    <Homebody 
    key={body.id}
        title={body.title}
        question={body.question}
        date={body.date}
    />
    );
}

function Home() {
    return (
        <div>
                <Navbar/>
                {inputs.map(createBody)}
                <Footer/>
            
            
        </div>
    )
}

export default Home
