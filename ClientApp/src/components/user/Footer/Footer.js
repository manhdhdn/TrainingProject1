import React from 'react'
import styled from 'styled-components'
import './styles.css'
const Footer = () => {
  return (
    <Container>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 footer'>
            <h3>Who we are</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed tincidunt enim lectus, in rhoncus mauris maximus id.
              Donec at porttitor arcu. Fusce a nunc facilisis, lacinia diam non, rhoncus turpis. Sed viverra</p>
          </div>
          <div className='col-lg-8'>
            <div className='row'>
              <div className='col-lg-4 footer'>
                <h3>
                  For Candidates
                </h3>
                <ul>
                  <li>
                    <a className='list-style'>
                      All Jobs
                    </a>
                  </li>
                  <li>
                    <a className='list-style'>
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a className='list-style'>
                      Companies
                    </a>
                  </li>
                  <li>
                    <a className='list-style'>
                      My Account
                    </a>
                  </li>
                </ul>

              </div>
              <div className='col-lg-4 footer'>
                <h3>
                  For Employers
                </h3>
                <ul>
                  <li>
                    <a className='list-style'>
                      All Resums
                    </a>
                  </li>
                  <li>
                    <a className='list-style'>
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a className='list-style'>
                      All Jobs
                    </a>
                  </li>
                  <li>
                    <a className='list-style'>
                      My Account
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-lg-4 footer'>
                <h3>
                  Information
                </h3>
                <ul>
                  <li>
                    <a className='list-style'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className='list-style'>
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className='list-style'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className='list-style'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <Copyright>
            Desgin by lận đận team
          </Copyright>
        </div>
      </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  background-color: #027ea2;
  padding-top:50px;
`
const Copyright = styled.p`
  color: #fff;
  line-height: 50px;
  text-align:center
`