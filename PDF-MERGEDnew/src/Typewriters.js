import React from "react";
import Typewriter from 'typewriter-effect';
import './Typewriter.css'

function Typewriters(){
    return(
        <div className="container">
            <h1>
                <Typewriter
                    options={{
                        autoload: true,
                        loop:true,
                        delay:50,
                        strings:["I am a web devoloper"]
                }}
                />



            </h1>


        </div>




    )

}

export default Typewriters;