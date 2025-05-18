import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setFilterCompany } from '@/redux/companySlice'

const Companies = () => {
  useGetAllCompanies();
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setFilterCompany(input));
  },[input]);

  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-10'>
        <div className=' flex item-center justify-between my-5'>
        <Input className='w-fit' placeholder="filter by name" onChange={(e) => setInput(e.target.value)} />
        <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>
        </div>
        <CompaniesTable/>
      </div>

    </div>
  )
}

export default Companies