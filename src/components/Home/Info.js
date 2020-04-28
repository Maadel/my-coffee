import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              fugit culpa? Perferendis inventore dolores ratione officia
              explicabo id? Debitis dignissimos nesciunt recusandae, tenetur
              beatae quos facere dolores veniam, error magni cupiditate cum
              sequi deserunt! Itaque sequi repudiandae temporibus obcaecati non,
              odit nam debitis nulla voluptates id eligendi hic. Quo, sed?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
