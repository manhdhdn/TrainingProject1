import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "#fff" : "",
        backgroundColor: isActive ? "#0d6efd" : ""

    });
    return (
        <Container className='container-fluid justify-content-center align-items-center'>

            <div className='row' style={{ height: 100 }} >
                <div className='col-10'>

                    <ul className="nav justify-content-around">
                        <LinkLogo to={'/admin/list'}><Img src='https://webdevproof.com/theme-forest-demo/job/demo-1-en/assets/images/logo/logo.png' /></LinkLogo>
                        <Item className="nav-item">
                            <NavLink to="/admin/list" className="nav-link" style={navLinkStyle}>
                                Quản lí công việc
                            </NavLink>
                        </Item>
                        <Item className="nav-item " >
                            <NavLink to={"/admin/newjob"} className='nav-link' style={navLinkStyle}>Đăng tin tuyển dụng</NavLink>
                        </Item>
                        <Item className="nav-item">
                          <LinkTo href='/'>
                                Xem website tuyển dụng
                          </LinkTo>
                        </Item>
                        <Item className="nav-item">
                            <NavLink to={'/admin/applicant'} className='nav-link' style={navLinkStyle}>Quản lí hồ sơ</NavLink>
                        </Item>

                    </ul>
                </div>
                <div className='col-2'>
                    <Avatar src='https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg' />
                </div>
            </div>

        </Container>
    )
}

export default Navbar

const LinkLogo = styled(Link)`
`
const LinkTo = styled.a`
    text-decoration: none;
`

const Container = styled.div`
    height: 101px;
    border-bottom:1px solid #dee2e6;
 `
const Avatar = styled.img`
    height: 45px;
    width: 45px;
    margin-top: 25px;
   
`
const Img = styled.img`

`
const Item = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
`