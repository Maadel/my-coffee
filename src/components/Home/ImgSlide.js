import React from "react"
import Title from "../Globals/Title"

export default function ImgSlide() {
  return (
    <div className="">
      <div className="p-5">
        <Title title="cold beverages"/>
        <p className="text-center">Relax With A Cold Beverage Of Your Choice! Enjoy our nutritious blends of fresh fruits and vegetables brimming with flavors you'll love.</p>
      </div>
      <div className="img-wraper">
        <div className="imgslide">
          <div>
            <img
              src="https://image.freepik.com/free-photo/red-alcohol-cocktail-with-mint-lime-black-background_80510-123.jpg"
              alt="1"
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-photo/ice-coffee-tall-glass-with-cream_79782-44.jpg"
              alt="2"
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-photo/freakshake-from-pink-smoothie-cream-monstershake-with-lollipops-waffles-marshmallow_71756-1619.jpg"
              alt="3"
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-photo/healthy-vegan-food-dietary-breakfast-snack_136595-8013.jpg"
              alt="4"
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-photo/strawberry-milkshake-table_140725-847.jpg"
              alt="5"
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-photo/creamy-dessert-with-strawberries-kiwi_2829-9919.jpg"
              alt="6"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
