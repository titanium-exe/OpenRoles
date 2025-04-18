export const applyJob = async (req, res) => {
  try {

    const userId = req.id;
    const {id: jobId} = req.params;
    if(!jobId){
      return res.status(400).json({
        message:"jobId is required",
        success:false
      })
    };


    
  } catch (error) {
    console.log(error);
  }
}