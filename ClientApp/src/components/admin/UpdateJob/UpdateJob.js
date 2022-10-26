import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import './style.css'
const Update = () => {
    return (
        <div className='container'>
            <Title className='text-center'>
                <h1>Tạo mới một công việc</h1>
            </Title>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <h4 style={{ float: 'left' }}>Tên công việc</h4>
                    <InputName type={'text'} placeholder='Nhập tên công việc'>
                    </InputName>
                    <h4 style={{ float: 'left' }}>Nơi làm việc </h4>
                    <InputLocation type={'email'} placeholder='Nhập nơi làm việc ' />
                    <h4 style={{ float: 'left' }}>Nhập nhập loại công việc </h4>
                    <InputCate placeholder='Nhập loại công việc' type={'text'} />
                    <h4 style={{ float: 'left' }}>Mức lương</h4>
                    <InputSalary type={'text'} placeholder='Nhap mức lương' />

                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <h4>Nhập miêu tả công việc</h4>
                    <CKEditor className='ck ck-content'
                        editor={ClassicEditor}

                    />
                </div>
            </div>
            <div className='row justify-content-center  '>
                <div className='col-8'>
                    <Submit>Save</Submit>
                </div>
            </div>

        </div>
    )
}

export default Update

const InputName = styled.input`
    width: 100%;
    margin: 15px auto;
    height: 50px;
    border: 1px solid #cbcbcb;
    &:focus {
        outline: none;
    }
`
const InputLocation = styled.input`
    width: 100%;
    margin: 15px auto;
    height: 50px;
    border: 1px solid #cbcbcb;
    &:focus {
        outline: none;
    }
`

const InputCate = styled.input`
    width: 100%;
    margin: 15px auto;
    height: 50px;
    border: 1px solid #cbcbcb;
    &:focus {
        outline: none;
    }
    
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
const InputSalary = styled.input`
     width: 100%;
    margin: 15px auto;
    height: 50px;
    border: 1px solid #cbcbcb;
    &:focus {
        outline: none;
    }
`
const Title = styled.div`
    margin: 50px auto;
`