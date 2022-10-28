import React from 'react'
import styled from 'styled-components'
import "./style.css"
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const Rerister = () => {
    const initialValues = {
        username: '',
        fullname: '',
        dob: '',
        phone: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
        Cv: null,
    };
    const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    const dateReg = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
        fullname: Yup.string()
            .required('Fullname is required')
            .min(3, 'Full name must be at least 3 characters'),
        dob: Yup.string()
            .required('Day of birth is required')
            .matches(dateReg, 'Date is not valid'),
        phone: Yup.string().required()
            .matches(phoneReg, 'Phone number is not valid'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        address: Yup.string()
            .required('Address is required'),
        Cv: Yup.mixed()
            .required('File is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    });
    return (
        <div className='container-fluid bluebackgrounnd'>
            <div className='row justify-content-center'>
                <LoginContent className='col-md-5'>
                    <Cardbody>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            {({ resetForm }) => (
                                <Form>
                                    <div className="form-group">
                                        <label>User name</label>
                                        <Field name="username" type="text" className="form-control" />
                                        <ErrorMessage
                                            name="username"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="fullname"> Full name </label>
                                        <Field name="fullname" type="text" className="form-control" />
                                        <ErrorMessage
                                            name="fullname"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dob"> Day of birth </label>
                                        <Field name="dob" type="text" className="form-control" />
                                        <ErrorMessage
                                            name="dob"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone"> Phone </label>
                                        <Field
                                            name="phone"
                                            type="text"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email"> Email </label>
                                        <Field name="email" type="email" className="form-control" />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address"> Address </label>
                                        <Field name="address" type="text" className="form-control" />
                                        <ErrorMessage
                                            name="addres"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"> Password </label>
                                        <Field
                                            name="password"
                                            type="password"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="confirmPassword"> Confirm Password </label>
                                        <Field
                                            name="confirmPassword"
                                            type="password"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="confirmPassword"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="Cv"> Upload Cv </label>
                                        <LabelForCV>
                                            <InputFile type="file" name="Cv" accept="application/pdf" />
                                            Chọn file
                                        </LabelForCV>
                                        <ErrorMessage
                                            name="Cv"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <RegisterButon type="submit" className="btn btn-primary">
                                            Register
                                        </RegisterButon>
                                        <ResetButton
                                            type="button"
                                            onClick={resetForm}
                                            className="btn btn-warning float-right"
                                        >
                                            Reset
                                        </ResetButton>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Cardbody>
                </LoginContent>
            </div>
        </div>
    )
}

export default Rerister

const InputFile = styled(Field)`
    display: none;

`
const LabelForCV = styled.label`
    border: 1px dashed #00b6c3;
    height: 50px;
    width: 100%;
    font-size: 25px;
    cursor: pointer;
    margin: 15px auto;
    text-align: center;
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
    &:hover {
        background-color: #166fd4;
    }
`
const RegisterButon = styled.button`
  margin: 25px 25px;
`

const ResetButton = styled.button`
   margin: 25px 25px;
`