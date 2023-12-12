import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Homes = () => {
    const arr=[1,2,3,4,5,6]
    return (

        <>
            {/* grey section */}
            <div className="bg-[#C4C4C4] ">
                <div className="grid grid-cols-3">
                    <div className="col-span-2 bg-[#1E1D1D] rounded-r-[40px]  py-6 container  w-full">
                        <div className='flex justify-between '>

                            <div className=''>

                                <MenuOpenIcon sx={{ color: "white" }} />
                            </div>
                            <div className='flex gap-x-4 text-white'>
                                <div>About</div>
                                <div>Projects</div>
                                <div>Skills</div>
                                <div>Contact</div>
                            </div>
                        </div>
                        <div className='pt-24'>
                            <div className='text-xl text-white'>
                                Rajesh Kumar R
                            </div>
                        </div>
                        <div className='pt-10'>
                            <div className='text-5xl text-[#94764E]'>
                                Front End Developer
                            </div>
                        </div>
                        <div className='text-white pt-10 pr-10'>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                        <div className='pt-24 text-white'>
                            Tools:
                            <div className='pt-4'>
                                fss
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="col-span-1  pt-20 pb-6 h-[200px] ">
                        <div className='flex justify-center'>
                        <img  className='border-[3px] rounded-[20px] max-h-[400px]' src="\assets\images\png\rajeshkumar-image-portfolio.png" alt="" /> 
                        </div>
                        <div className='flex justify-center pt-4'>

                        <button className=' bg-[#94764E] text-white px-6 py-2 rounded '>
                            Download Resume
                        </button>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='bg-[#C4C4C4] w-full py-6  '>
                    <div className='container w-full'>

                    <div className='text-right text-5xl '>
                        Skills
                    </div>
                    <div className='pt-6 grid grid-cols-3 gap-4 justify-center  w-full'>
                        {arr.map((prop,index)=>{
                            return(
                                <div className='h-[200px] bg-[#1E1D1D] rounded-[20px] text-white'>
                                                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                </div>
                            )
                        })}
                    
                    
                </div>
                    </div>
            </div>
            {/* dark section */}
            <div className="bg-[#1E1D1D] text-5xl h-[400px] text-white container">
                projects
            </div>
            {/* contact section */}
            <div className="bg-[#C4C4C4]">
                <div className='flex justify-end text-5xl container'>

                contact
                </div>
                <div className='h-[100px]'>

                </div>
                <div className='flex flex-row '>

                <div className='bg-[#1E1D1D] rounded-r-[40px]  py-6 container mx-auto px-4 w-full basis-2/6 h-[300px]'>
                    Keep in touch
                </div>
                <div className='basis-4/6'>
                            hi
                </div>
                </div>
                <div className='h-[100px]'>

                </div>
            </div>
        </>
    )
}
export default Homes