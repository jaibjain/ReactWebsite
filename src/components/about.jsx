import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta"></span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm a freshman majoring in computer science at the University of Illinois at Urbana-Champaign.</p>
                    <p>These are the classes I'm taking this semester: </p>
                    <p>CS 173</p>
                    <p>CS 128</p>
                    <p>MATH 257</p>
                    <p>INFO 407</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        </section>
      </div>
    )
  }
}