import React from 'react'
import styled from 'styled-components'
import { AiOutlineEdit } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Applicant = () => {
    return (
        <div className='container'>
            <Filter className='row justify-content-between'>
                <div className='col-3'>
                    <Jobcate id="jobcate">
                        <option value="Nhóm đứng đường"></option>
                        <option value="Nhóm văn phòng">Nhom dung duong</option>
                        <option value="Nhóm phòng kĩ thuật">Nhom kieu nu</option>
                        <option value="Tất cả" selected>Tat ca nganh nghe</option>
                    </Jobcate>

                </div>
                <div className='col-3'>
                    <Day id="jobcate">
                        <option value="Nhom khach san">Cũ nhất</option>
                        <option value="Nhom kieu nu">Mới nhất</option>
                        <option value="Lọc theo ngày" selected> Lọc theo ngày</option>
                    </Day>
                </div>
                <div className='col-4'>
                    <SearchKey type={'text'} placeholder='Nhập tên công việc muốn tìm kiếm' />

                </div>
                <div className='col-1'><SearchButton>Tìm kiếm</SearchButton></div>
            </Filter>
            <div className='row'>
                <div className='col-12'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Tên ứng viên</th>
                                <th>Số điện thoại </th>
                                <th>Email</th>
                                <th>Công việc ứng tuyển</th>
                                <th>CV</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Duy Nguyễn</td>
                                <td>0394167409</td>
                                <td><p>	duyisdenhat@gmail.com</p></td>
                                <td><p>Java </p></td>
                                <td>TP HCM</td>
                                <td>
                                    <Edit data-tip data-for="registerTip_1">
                                       <Link to={'/admin/updateapplicant'}><AiOutlineEdit/></Link>
                                        <ReactTooltip id="registerTip_1" place="top" effect="solid">
                                            Edit
                                        </ReactTooltip>
                                    </Edit>

                                    <Delete data-tip data-for="registerTip_2" >
                                        <AiFillDelete />
                                    </Delete>
                                    <ReactTooltip id="registerTip_2" place="top" effect="solid">
                                        Delete
                                    </ReactTooltip>
                                </td>
                            </tr>
                            <tr>

                            </tr>
                            <tr>
                               
                            </tr>
                            <tr>
                               
                            </tr>
                            <tr>
                               
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Applicant


const Jobcate = styled.select`
    background-color: #ffffff;
    border: 2px solid #dfdfdf;
    border-radius: 8px;
    padding: 15px 20px;
    width: 110%;
`
const Day = styled.select`
    background-color: #ffffff;
    border: 2px solid #dfdfdf;
    border-radius: 8px;
    padding: 15px 20px;
    width: 110%;
`
const SearchKey = styled.input`
        background-color: #ffffff;
        border: 2px solid #dfdfdf;
        border-radius: 8px;
        padding: 15px 20px;
        width: 100%;
        &:focus {
            outline: none;
        }
       
`
const SearchButton = styled.button`
    background-color: #007bff;
    width: 120%;
    align-items: center;
    height: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    &:hover {
        transition: all 0,5s ease-in;
        background-color: #0275d8;
    }
`
const Filter = styled.div`
    margin: 50px auto;
`

const Delete = styled.button`
    border: none;
    font-size: 20px;
    color: #007BFF;
`
const Edit = styled(Delete)`
    &:nth-child(1) {
        font-size: 20px;
        color: #007BFF;
    }
`
