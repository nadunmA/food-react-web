import React from 'react'
import Banner from "../../assets/birab.png"

const Abanner = () => {

  return (

    <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>

        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {/*Image section*/}
                <div>
                    <img src={Banner} alt="About logo" />
                </div>

                {/*Text section*/}

                <div>
                    <p>About</p>
                    <h1>Fresh Food</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae aliquid minima quo distinctio, iste culpa doloribus, laboriosam soluta cum nulla eos dignissimos atque quisquam? Nesciunt quae modi perspiciatis quo!</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Abanner