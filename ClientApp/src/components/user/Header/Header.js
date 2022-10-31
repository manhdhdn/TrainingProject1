import React from 'react'
import styled from 'styled-components'
import Nav_Bar from './Nav_Bar'

const Header = () => {
    
    return (
        <Container>
            <Background>

            </Background>
            <Nav_Bar />
            <Content>
                <Count_Job>
                    3,000+
                </Count_Job>
                <Slogan>
                    Hãy tìm việc mà làm đi, nằm nhà hoài
                </Slogan>
            </Content>
        </Container>

    )
}

export default Header

const Container = styled.div`
 position: relative;
`
const Background = styled.div`
    background: url('images/background.jpg') no-repeat center fixed;
    height: 677px;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    z-index: -1;
    position: relative;
    ::after {
        content: "";
        position: absolute;
        background-color: #000d1f;
        opacity: 0.73;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    };
   
`
const Content = styled.div`

    position: absolute;
    top: 40%;
    left: 20%;
    right: 20%;
    bottom: 50%;
    
`
const Count_Job = styled.h1`
    font-size: 70px;
    color: #50feb8;
    font-weight: 500;
    line-height: 70px;
    text-align: center;
    :after {
        content: ' Công việc';
        color: #ffffff;
        text-align: center;
    }
`

const Slogan = styled.h2`
    color: #ffffff;
    font-size: 24px;
    line-height: 100px;
    text-align: center;

`