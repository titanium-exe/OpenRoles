import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_POINT } from '@/utils/constant'
import axios from 'axios';
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const {searchedQuery} = useSelector(store=>store.job);

   useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
    
        console.log("API Response:", res.data); 
        console.log("res.data.jobs:", res.data.jobs); 
    
        if (res.data.success && Array.isArray(res.data.jobs)) {
          dispatch(setAllJobs(res.data.jobs));
        } else {
          dispatch(setAllJobs([])); 
        }
      } catch (error) {
        console.log("Fetch jobs error:", error);
      }
    };
    
    fetchAllJobs();
   },[])
}

export default useGetAllJobs;