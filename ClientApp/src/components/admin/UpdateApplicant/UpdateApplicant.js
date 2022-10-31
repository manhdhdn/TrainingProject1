import React from 'react'
import styled from 'styled-components'

const UpdateApplicant = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-8 text-center'>
                    <NameJob>Update hồ sơ ứng viên</NameJob>
                </div>
                <div className='col-8'>
                    <h4 style={{ float: 'left' }}>Tên ứng viên</h4>
                    <InputName type={'text'} placeholder='Họ tên mới ứng viên'>
                    </InputName>
                    <h4 style={{ float: 'left' }}>Email ứng viên</h4>
                    <InputEmail type={'email'} placeholder='Email mới ứng viên' />
                    <h4 style={{ float: 'left' }}>Sô điện thoại ứng viên </h4>
                    <InputPhone placeholder='Nhập số điện thoại mới ứng viên' type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                    <Submit>SAVE</Submit>
                </div>
            </div>
        </div>
    )
}

export default UpdateApplicant

const NameJob = styled.h3`

    margin: 50px auto;
    text-transform: uppercase;
`

const InputName = styled.input`
    width: 100%;
    margin: 15px auto;
    height: 50px;
    border: 1px solid #cbcbcb;
    &:focus {
        outline: none;
    }
`
const InputEmail = styled.input`
    width: 100%;
    margin: 15px auto;
    height: 50px;
    border: 1px solid #cbcbcb;
    &:focus {
        outline: none;
    }
`

const InputPhone = styled.input`
    width: 100%;
    margin: 15px auto;
    height: 50px;
    border: 1px solid #cbcbcb;
    &:focus {
        outline: none;
    }
    
`
const InputFile = styled.input`
    display: none;

`
const LabelForCV = styled.label`
    border: 1px dashed #00b6c3;
    height: 50px;
    width: 100%;
    font-size: 25px;
    cursor: pointer;
    margin: 15px auto;
`
const Submit = styled.button`
    margin: 15px auto;
    margin-bottom: 100px;
    font-size: 25px;
    color: #ffffff;
    background-color: #00b6c3;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 8px;
    &:hover {
        opacity: 0.8;
    }
`
