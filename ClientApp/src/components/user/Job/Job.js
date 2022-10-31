import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsFillBriefcaseFill } from "react-icons/bs"
import { BsCurrencyDollar } from 'react-icons/bs'
import { BsPinMapFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './style.css'
const Job = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    useEffect(() => {
        const getJob = async () => {
            const response = await fetch('api/Posts');
            setData(await response.json());
            setFilter(await response.json());
        };
        getJob();
    }, []);
    const filterSearchJob = (input) => {
        const updateList = data.filter((x) => {
            return x.title.toLowerCase().includes(input);
        });
        setFilter(updateList);
    };
    const [inputsearch, setInputsearch] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            filterSearchJob(inputsearch);
        }
    };
    return (
        <div className='container'>
            <Search className='row justify-content-around'>
                <div className='col-md-4'>
                    <SearchKey
                        className="search__input"
                        type="text"
                        value={inputsearch}
                        onChange={(e) => setInputsearch(e.target.value.toLowerCase())}
                        onKeyPress={handleKeyPress}
                        placeholder='Ban muon tim viec gi' />
                </div>


                <div className='col-md-1'>
                    <SearchButton onClick={() => filterSearchJob(inputsearch)}>Tìm việc</SearchButton>
                </div>

            </Search>
            <CountResult className='row justify-content-between'>
                <div className='col-sm-4'>
                    <Count>Tìm thấy 30 việc làm phù hợp</Count>
                </div>
            </CountResult>
            <div className='row justify-content-around'>
                {
                    filter.length == 0 ? (
                        <h3 className="mt-4 mg-b4">
                            {' '}
                            Sorry! We don't have the product that you were looking for ^-^
                        </h3>
                    ) : (
                        <>
                            {
                                filter.map((job) => {
                                    <ContainerJob key={job.postID} className='col-xl-5'>
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
                                                        <Link to={'/detail'} className='job-title'>{job.title}</Link>
                                                    </JobTitle>

                                                    <Day>
                                                        {job.postDate}
                                                    </Day>
                                                    <ul>
                                                        <li>
                                                            <SpanIcon_1>
                                                                <BsFillBriefcaseFill />
                                                            </SpanIcon_1>
                                                            <SpanBody>
                                                                Intel Technologies
                                                            </SpanBody>
                                                        </li>
                                                        <li>
                                                            <SpanIcon_2>
                                                                <BsCurrencyDollar />
                                                            </SpanIcon_2>
                                                            <SpanBody>
                                                                {job.salary}
                                                            </SpanBody>
                                                        </li>
                                                        <li>
                                                            <SpanIcon_3>
                                                                <BsPinMapFill />
                                                            </SpanIcon_3>
                                                            <SpanBody>
                                                               {job.address}
                                                            </SpanBody>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </ContainerJob>
                                })
                            }
                        </>
                    )
                }
            </div>
        </ div>
    )
}

export default Job

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
const Jobcate = styled.select`
    background-color: #ffffff;
    border: 2px solid #dfdfdf;
    border-radius: 8px;
    padding: 15px 20px;
    width: 110%;
`

const LocationDo = styled.select`
    background-color: #ffffff;
    border: 2px solid #dfdfdf;
    border-radius: 8px;
    padding: 15px 20px;
    width: 110%;
    
`
const SearchButton = styled.button`
    background-color: #00b6c3;
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
const Search = styled.div`

    margin: 50px auto;
`
const CountResult = styled.div`

`
const Count = styled.h4`
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    color: #333333;
`
const Sort = styled.select`
    width: 177px;
    height: 37px;
    text-align: center;
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
    cursor: pointer;
    &:hover {
        color: #50feb8;
    }
    
`
const Day = styled.p`
    text-align: start;
    margin: 0 0 10px;
    font-size: 15px;
    color: #7f7f7f;
`
const SpanIcon_1 = styled.span`
    margin-right: 20px;
    color: #237be7;
    font-size: 24px;
`
const SpanBody = styled.span`
    font-weight: 500;
    color: #595959;
    font-size: 20px;
    line-height: 26px;
`
const SpanIcon_2 = styled.span`
    margin-right: 20px;
    color: #00b6c3;
    font-size: 24px;
`
const SpanIcon_3 = styled.span`
    margin-right: 20px;
    color: blue;
    font-size: 24px;
    color: #08c478;
`
