import { setAllAdminJobs } from '@/redux/jobSlice'
import { JOB_API_POINT } from '@/utils/constant'
import axios from 'axios';
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();

   useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_POINT}/getcreatedjobs`, { withCredentials: true });
    
        console.log("API Response:", res.data); 
        console.log("res.data.jobs:", res.data.jobs); 
    
        if (res.data.success && Array.isArray(res.data.jobs)) {
          dispatch(setAllAdminJobs(res.data.jobs));
        } else {
          dispatch(setAllAdminJobs([])); 
        }
      } catch (error) {
        console.log("Fetch jobs error:", error);
      }
    };
    
    fetchAllJobs();
   },[])
}

export default useGetAllAdminJobs;