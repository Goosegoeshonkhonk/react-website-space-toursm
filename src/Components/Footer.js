import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Planet newletter to recveive out best deals!
            </p>

            <p className='footer-subscription-text'>
                You can unsubcribe at any time
            </p>

            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email'
                    className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subcribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/sign-up'>Testimonials</Link>
                    <Link to='/sign-up'>Investors</Link>
                    <Link to='/sign-up'>Terms of Services</Link>
                </div>

                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/sign-up'>Testimonials</Link>
                    <Link to='/sign-up'>Investors</Link>
                    <Link to='/sign-up'>Terms of Services</Link>
                </div>
            
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                </div>
            </div>
        </div>

        <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              PLANET
              <i className='ti ti-rocket' />
            </Link>
          </div>
          <small className='website-rights'>PLANET © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='ti ti-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='ti ti-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='ti ti-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='ti ti-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='ti ti-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer