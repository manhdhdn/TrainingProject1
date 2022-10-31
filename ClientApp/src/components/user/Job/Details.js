import React from 'react'
import styled from 'styled-components'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { BsPinMapFill } from 'react-icons/bs'
import { BsCurrencyDollar } from 'react-icons/bs'
import { BsGridFill } from 'react-icons/bs'
import { BsBookmarkFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Details = () => {
  return (
    <div className='container'>
      <div className='row justify-content-around'>
        <div className='col-lg-8 col-md -12'>
          <div className='row'>
            < ContainerJob className='col-12'>
              <div className='container'>
                <div className='row justify-content-around'>
                  <div className='col-md-3'>
                    <Img src='https://webdevproof.com/theme-forest-demo/job/demo-1-en/assets/images/icons/12.png' />
                    <Jobtype>
                      Full time
                    </Jobtype>
                  </div>
                  <div className='col-md-7'>
                    <JobTitle>
                     Lam gai
                    </JobTitle>
                    <Day>
                      April 3, 2018
                    </Day>

                  </div>
                </div>

              </div>
            </ContainerJob>
            <Description>
              <p>
                JOB DESCRIPTION
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar placerat mattis. Fusce et elit ornare, finibus sapien at, porttitor eros. Pellentesque eget ornare lacus. Sed pharetra dolor suscipit ultricies porta. Pellentesque posuere ante leo, id tincidunt tortor scelerisque et. Mauris placerat imperdiet metus quis luctus. Curabitur dictum mattis ligula ultrices dapibus. Sed vitae neque vitae risus viverra feugiat. Cras euismod ultricies mi eu blandit. Nam id maximus arcu. Sed molestie porta tellus, quis vehicula nunc. Nullam pharetra risus in lorem iaculis finibus a id magna. Donec eu eros eu sapien faucibus porttitor.

                WHAT YOU WILL DO
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar placerat mattis. Fusce et elit ornare, finibus sapien at, porttitor eros. Pellentesque eget ornare lacus. Sed pharetra dolor suscipit ultricies porta. Pellentesque posuere ante leo, id tincidunt tortor scelerisque et. Mauris placerat imperdiet metus quis luctus. Curabitur dictum mattis ligula ultrices dapibus. Sed vitae neque vitae risus viverra feugiat. Cras euismod ultricies mi eu blandit. Nam id maximus arcu. Sed molestie porta tellus, quis vehicula nunc. Nullam pharetra risus in lorem iaculis finibus a id magna. Donec eu eros eu sapien faucibus porttitor.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque augue dignissim venenatis, turpis vestibulum.
                Mus arcu euismod ad hac dui, vivamus platea netus.
                Neque per nisl posuere sagittis, id platea dui.
                A enim magnis dapibus, nullam odio porta, nisl class.
                Turpis leo pellentesque per nam, nostra fringilla id.
                WHAT WE CAN OFFER YOU
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar placerat mattis. Fusce et elit ornare, finibus sapien at, porttitor eros. Pellentesque eget ornare lacus. Sed pharetra dolor suscipit ultricies porta. Pellentesque posuere ante leo, id tincidunt tortor scelerisque et. Mauris placerat imperdiet metus quis luctus. Curabitur dictum mattis ligula ultrices dapibus. Sed vitae neque vitae risus viverra feugiat. Cras euismod ultricies mi eu blandit. Nam id maximus arcu. Sed molestie porta tellus, quis vehicula nunc. Nullam pharetra risus in lorem iaculis finibus a id magna. Donec eu eros eu sapien faucibus porttitor.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque augue dignissim venenatis, turpis vestibulum.
                Mus arcu euismod ad hac dui, vivamus platea netus.
                Neque per nisl posuere sagittis, id platea dui.
                A enim magnis dapibus, nullam odio porta, nisl class.
                Turpis leo pellentesque per nam, nostra fringilla id.
              </p>
            </Description>
          </div>
        </div>
        <div className='col-xl-4 col-md-12' style={{ marginTop: 30 }}>
          <ContainerApply className='container'>
            <div className='row'>
              <div className='col-12'>
                <Icon_1><BsFillCalendarCheckFill /></Icon_1>
                <div style={{ marginLeft: 30 }}>
                  <TitLe>
                    Dated Posted:
                  </TitLe>
                  <Content>Posted 3 months ago</Content>
                </div>
              </div>
              <div className='col-12'>
                <Icon_2><BsPinMapFill /></Icon_2>
                <div style={{ marginLeft: 30 }}>
                  <TitLe>Location:</TitLe>
                  <Content>United States, South Dakota, Pennington County</Content>
                </div>
              </div>
              <div className='col-12'>
                <Icon_3><BsCurrencyDollar /></Icon_3>
                <div style={{ marginLeft: 30 }}>
                  <TitLe>Salary:</TitLe>
                  <Content>$ 2500 - $ 3000</Content>
                </div>
              </div>
              <div className='col-12'>
                <Icon_4><BsGridFill /></Icon_4>
                <div style={{ marginLeft: 30 }}>
                  <TitLe>Category:</TitLe>
                  <Content>Marketing</Content>
                </div>
              </div>
              <div className='col-12'>
                <Icon_5>< BsBookmarkFill /></Icon_5>
                <div style={{ marginLeft: 30 }}>
                  <TitLe>Experience:</TitLe>
                  <Content>1 - 2 Yrs Exp</Content>
                </div>
              </div>
              <div className='col-12'>
                  <ApplyButton>
                   <LinkApply to={'/apply'}>Apply</LinkApply>
                  </ApplyButton>
              </div>
            </div>
          </ContainerApply>
        </div>
      </div>
    </div>
  )
}

export default Details

const LinkApply = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`

const Jobtype = styled.span`
    font-size: 20px;
    font-weight: 600;
    color: #0071c5;
    text-transform: uppercase;
   
`
const ContainerJob = styled.div`
    background-color: #ffffff;
    border-color: #cfcfcf;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    margin: 30px auto;
    padding-top: 33px;
    padding-bottom: 43px;
    &:hover {
       box-shadow: 20px 5px 10px rgb(0 0 0 / 10%);
    }
    
`
const JobTitle = styled.h3`
    text-align: start;
    color: #3c3c3c;
    font-size: 25px;
    text-decoration: none;
    text-transform: uppercase;
`
const Day = styled.p`
    text-align: start;
    margin: 0 0 10px;
    font-size: 15px;
    color: #7f7f7f;
`

const Img = styled.img`
    display: block;
    height: 120px;
    width: 120px;
    border: 1px solid #cfcfcf;
    line-height: 120px;
    margin: 0 auto 10px;
    padding: 0 10px;
    border-radius:5px;
`
const TitLe = styled.h4`
    color: #3c3c3c;
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
    margin: 0 0 5px;
    text-align: start;
`
const Content = styled.p`
  font-size: 15px;
  line-height: 26px;
  color: #848484;
  float: left;
  text-align: start;

 `

const Icon_1 = styled.span`
    float: left;
    font-size: 18px;
    line-height: 26px;
    color: #237be7;
 `
const Icon_2 = styled.span`
    float: left;
    font-size: 18px;
    line-height: 26px;
    color:#08c478 ;

`
const Icon_3 = styled.span`
    float: left;
    font-size: 18px;
    line-height: 26px;
    color: #00b6c3;
 `
const Icon_4 = styled.span`
    float: left;
    font-size: 18px;
    line-height: 26px;
    color: #f9a718;
`
const Icon_5 = styled.span`
    float: left;
    font-size: 18px;
    line-height: 26px;
    color: #6dd8ad;
 `
const ContainerApply = styled.div`
    border: 1px solid #cbcbcb;
    padding: 30px;
 `
const Description = styled.div`

`

const ApplyButton = styled.button`
    width: 100%;
    height: 46px;
    color: #ffffff;
    background-color: #00b6c3;
    border: none;
    border-radius: 8px;
    &:hover {
      opacity: 0.8;
    }
`