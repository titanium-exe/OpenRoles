import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'


const CompanyProfile = () => {
  const [input, setInput] = useState({
    name:"",
    description:"",
    website:"",
    location:"",
    file:null
  });
  
  return (
    <div>
      <Navbar/>
      <div className='max-w-xl mx-auto my-10'>
        <form action="">
          <div className='flex items-center  gap-7 padding-8'>
          <Button className="flex items-center gap-2 text-gray-500 font-semibold" variant="outline">
            <ArrowLeft/>
            <span>Back</span>
          </Button>
          <h1 className='font-bold text-xl'>Company Profile</h1>
          </div>
          <Label>Company Name</Label>
          <Input 
            type="text"
            name="name"
          />
        </form>
      </div>
    </div>
  )
}

export default CompanyProfile