import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import dunuLogo from '../../images/dunuLogo.png'
import { companylinks, legallinks, productlinks, sociallinks } from '../../data'
import './footer.css'

function Footer() {
  return (
    <div className="footer__container">
        <div className="footer__wrapper">
            <div className="footer__news-wrapper">
                <div className="footer__news-content">
                    <div className="footer__news-left">Join our newsletter</div>
                    <div className="footer__news-right">
                        <div className="email__input-wrapper">
                            <input type="email" name="" id="" className='email__input' />
                            <div className="btn-wrapper">
                                <input type="button" value="Subscribe" className='email__submit-btn'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__main-wrapper">
                    <div className="footer__main-content">
                        <div className="footer__main-company">
                            <div className="footer__logo">
                                <img src={dunuLogo} alt="company logo" />
                            </div>
                            <p className="company__summary">
                                We are recognized for producing the most durable blocks,
                                we are proud to say our blocks built and paved 60 percent of the Abuja buildings and the roads.
                            </p>
                        </div>
                        <div className="footer__main-products">
                            <div className="footer__main-title">Product</div>
                            <div className="product__link">
                                {
                                    productlinks.map(({name, path}, index) => {
                                        return(
                                            <li key={index}>
                                                <NavLink to={path} className="product__navlink">{name}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="footer__main-links">
                            <div className="footer__main-title">Company</div>
                            <div className="company__link">
                                {
                                    companylinks.map(({name, path}, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink to={path} className="company__navlink">{name}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="footer__main-social">
                            <div className="footer__main-title">Social</div>
                            <div className="social__link">
                                {
                                    sociallinks.map(({name, path}, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink to={path} className="social__navlink">{name}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="footer__main-legal">
                            <div className="footer__main-title">Legal</div>
                            <div className="legal__link">
                                {
                                    legallinks.map(({name, path}, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink to={path} className="legal__navlink">{name}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom-wrapper">
                    <div className="footer__bottom-content">
                        <div className="footer__bottom-left">
                            <p className="rights__btm">&copy; 2023 Dunu Nigeria Limited. All Rights Reserved</p>
                        </div>
                        <div className="footer__bottom-right">Developed by <a href='#'>Inspireme Media Networks</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer