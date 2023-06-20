import React from 'react'
import Slider from '../../components/slider/Slider'
import { productContent } from '../../data'
import homeIntroimg from '../../images/home-intro-img.jpg'
import './home.css'

export default function Home() {
  return (
   <>
    <Slider />
    <div className="home-intro-container">
      <div className="home__intro-content">
        <h3 className="home__intro">
          Innovation, Consistency, Quality Delivery and Integrity for more than a decade.
        </h3>
        <div className="intro__detail">
        <div className="home__intro-content-left">
          <div className="left__image"><img src={homeIntroimg} alt="" /></div>
        </div>
        <div className="home__intro-content-right">
          <h2 className="subtitle">We are <span>DUNU </span>Nigeria</h2>
          <p className="intro__summary">
            Greenfly engages media personalities in brand promotion, inviting various companies to create partnerships with famous people to advertise their products. 
            This way, the platform connects brands with media personalities and brings visionary insights that guide and inspire global customers and employees.
            Our team made a website for the company entirely from scratch. In addition, we also prepared a set of icons, layouts for the web, and images for the site pages. 
            Laconic icons made it easier to navigate the website, as the user visually
          </p>
        </div>
        </div>
      </div>
    </div>
    <div className="home__products">
          <div className="home__products-content">
            <h3 className="products__title">Our Products</h3>
            <div className="home__products-wrapper">
              {
                productContent.map(({title, summary, image, cta}, index)  => {
                  return (
                    
                    <div key={index} className="h__product">
                      <img src={image} alt="" className="product__img" />
                      <div className="h__product-title">{title}</div>
                      <div className="h__product-summary">{summary}</div>
                      <div className="h__product-cta">{cta}</div>
                    </div>
                  )
                })
              }
              
            </div>
          </div>
        </div> 
   </>   
  )
}
