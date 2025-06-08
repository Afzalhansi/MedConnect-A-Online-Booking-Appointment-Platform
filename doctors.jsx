return (
    <div>
        <p className >Browse through the doctors specialists.</p>
        <div className = 'flex flex-col sm:flex-row items-start gap-5 mt-5'>
            <div className = 'flex flex-col gap-4 text-sm text-gray-600'>
                <p onClick={()=> speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General Physician" ? "bg-indigo-100 text-black" : " "} '}>General Physician</p>
                <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : " "}'}>Gynecologist</p>
                <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : " "}'}>Dermatologist</p>
                <p onClick={()=> speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatrician" ? "bg-indigo-100 text-black" : " "}'}>Pediatrician</p>
                <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : " "}'}>Neurologist</p>
                <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : " "}'}>Gastroenterologist</p>
            </div>
            <div className = 'w-full grid grid-cols-auto gap-4 gap-y-6'>
                {
                    filterDoc.map(item,index)=>(
                      <div onClick={()=>navigate(`/appointment/${item._id}`)}>

                      </div>  
                    )
                }

            </div>
        </div>
    </div>
)