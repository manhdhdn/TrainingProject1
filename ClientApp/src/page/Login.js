import React from 'react'
import styled from 'styled-components'
import "./style.css"
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='container-fluid bluebackgrounnd'>
            <div className='row justify-content-center'>
                <LoginContent className='col-md-5'>
                    <Cardbody>
                        <SignIn>Sign in</SignIn>
                        <label for='email'>Email address</label>
                       <InputForm id='email'/>
                       <label for='password'>Password</label>
                       <InputForm type={'password'} id='password'/>
                       <LinkTo to={'/rerister'}> Ban chua co tai khoan, dang ki ngay</LinkTo>
                       <SignButton>Login</SignButton>
                       <hr/>
                       <SignGG>
                        Sign in with Google
                       </SignGG>
                    </Cardbody>
                </LoginContent>
            </div>
        </div>
    )
}

export default Login

const LinkTo = styled(Link)`
    text-decoration: none;
    
`

const LoginContent = styled.div`
    background-color: #fff;
    margin: 50px;
    border-radius: 8px;

`
const SignIn = styled.h2`
    text-align: center;
    margin: 75px auto;
    font-weight: 700;
`
const Cardbody = styled.div`
    margin: 25px 25px;
`
const InputForm = styled.input`
    width: 100%;
    outline: none;
    border: 1px solid #ced4da;
    border-radius: 5px;
    margin-bottom: 25px;
`
const SignButton = styled.button`
    width: 100%;
    border-radius: 8px;
    font-size: 25px;
    background-color: #0d6efd;
    border: none;
    color: #fff;
    margin-top:25px;
    &:hover {
        background-color: #166fd4;
    }
`
const SignGG = styled.button`
    width: 100%;
    border-radius: 8px;
    font-size: 25px;
    background-color: rgb(221, 75, 57);
    border: none;
    color: #fff;
    &:hover {
        background-color: #db3700;
    }
`