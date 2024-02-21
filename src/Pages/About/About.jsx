import React from 'react'
import "./About.css";

function About() {
  return (
    <>
      <div className="container-fluid mt-3">
      <div className="row bg-light">
        <div className="col-lg-3"><text>Mobile Phones</text>
      
          <div class="row">
              <div class="col-sm">
                <img src="about-images\samsung.png" alt="samsung" width="60px" />
              </div>
             
              <div class="col-sm">
                <img src="about-images\vivo.png"  width="60px" alt="vivo"/>
              </div>
              <div class="col-sm">
                <img src="about-images\apple.png"  width="60px" alt="apple"/>
              </div>
              <div class="col-sm">
                <img src="about-images\mi.png"  width="60px" alt="mi"/>
              </div>
          </div>  
          <a href="void(0)" >view more</a>
        </div>
      
        <div class="col-lg-3"><text>Jeans</text> 
        <div class="row">
            <div class="col-sm">
              <img src="about-images\levis.jpg" alt="levis" width="75px" />
            </div>
            <div class="col-sm">
              <img src="about-images\wrangler.png"  width="75px" alt="wrangler"/>
            </div>
            <div class="col-sm">
              <img src="about-images\spykar-logo.png"  width="75px" alt="spyker"/>
            </div>
            <div class="col-sm">
              <img src="about-images\ck.png"  width="75px" alt="ck"/>
            </div>
        </div> 
        <a href="void(0)" >view more</a> 
      </div>


      
      <div class="col-lg-3"><text>Grosary</text>
        
        <div class="row">
            <div class="col-sm">
              <img src="about-images\atta.png" alt="atta" width="60px" />
            </div>
           
            <div class="col-sm">
              <img src="about-images\chashew.jpg"  width="60px" alt="cashew"/>
            </div>
            <div class="col-sm">
              <img src="about-images\oil.png"  width="40px" alt="oil"/>
            </div>
            <div class="col-sm">
              <img src="about-images\dairy.jpg"  width="60px" alt="dairy"/>
            </div>
        </div>  
        <a href="void(0)" >view more</a>
      </div>
      <div class="col-lg-3"><text>Home Appliances</text>
        
        <div class="row">
           <div class="col-sm">
              <img src="about-images\tv.jpg"  width="50px" alt="tv"/>
            </div>
            <div class="col-sm">
              <img src="about-images\washing.png"  width="40px" alt="washing"/>
            </div>
            <div class="col-sm">
              <img src="about-images\ac.jpg" alt="ac" width="70px" />
            </div>
            <div class="col-sm">
              <img src="about-images\speakers.jpg"  width="60px" alt="speakers"/>
            </div>
           
        </div>  
        <a href="void(0)">view more</a>
      </div>
</div>
      </div>
    </>
  )
}

export default About