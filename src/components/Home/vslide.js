import React, { Component } from "react"
import Title from "../Globals/Title"
import Img0 from "./31.jpg"
import Img1 from "./30.jpg"
import Img2 from "./36.jpg"
import Img3 from "./35.jpg"

export default class vslide extends Component {
  state = {
    imgSrc: Img0,
    paraSrc: ["Esspresso","Short & Intense","The Espresso is where it all begins. Its rich aroma is the heartbeat of all our coffees. We craft one simple shot of our intense roast for the most elegant of drinks."],
    images: [
    {img:Img0, para:["Esspresso","Short & Intense","The Espresso is where it all begins. Its rich aroma is the heartbeat of all our coffees. We craft one simple shot of our intense roast for the most elegant of drinks."]},
    {img:Img1, para:["Lattee","Mild & Milky","The perfect combination of our aromatic Espresso and creamy milk. This duo is ideal for everyone who loves their drink hot in winter and cold in summer."]},
    {img:Img2, para:["Cortado","Rich & Velvety","It all starts with the purest essence of Espresso and textured milk. But before you can enjoy your Cortado, we sign it off with a little heart."]},
    {img:Img3, para:["Breakfast","Simple & Smooth","A delicious combination of Espresso and velvety milk, signed off with a perfect florette. And the best thing it tastes amazing hot or cold."]}],
    icons: [[Img0,"Espresso"],[Img1,"Latte"],[Img2,"Cortado"],[Img3,"Breakfast"]],

    
  }

  img0Handler = (obj) => {
    this.setState({ imgSrc: obj.img, paraSrc: obj.para })
  }
  
  render() {
    return (
      
      <div className="container mt-5">
        <Title title="Hot Beverages"/>
        <div className="row mt-5">
          <div className="col-sm-2">
              <ul className="img-look">
           
                 {this.state.images.map((som,ind) => {
                   return ( 
                   <li><button className="btn text-uppercase" onClick={()=>this.img0Handler(som)} >
                     <img src={this.state.icons[ind][0]} alt="boii" height="50em" width="50em"/>
                     {this.state.icons[ind][1]}
                     </button></li>)
                 }
                 
                   
                 )}
                  
              </ul>
           
          </div>
          <div className="col-5 mx-auto text-center px-5">
            <h1 className="hot-1">{this.state.paraSrc[0]}</h1>
            <h1 className="hot-2">{this.state.paraSrc[1]}</h1>
            <p className="hot-3">{this.state.paraSrc[2]}</p>
            
          </div>
          <div className="col-5">
          <img src={this.state.imgSrc} alt="Coffee Img" height="400em" width="600em"/>
            
          </div>
        </div>
      </div>
    )
  }
}

/*<div>
                <img src={this.state.images[0]} alt="Coffee Img"/>
                <h1>{this.state.Paragraphs[0]}</h1>
                <button onClick={this.img0Handler}>Click 0</button>
                <button onClick={this.img1Handler}>Click 1</button>
                <button onClick={this.img2Handler}>Click 2</button>
                <button onClick={this.img3Handler}>Click 3</button>
            
            </div>*/
