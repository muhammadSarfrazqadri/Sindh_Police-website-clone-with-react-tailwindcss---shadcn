import React from 'react'
import CardLink from './CardLink'

const QuickLink = () => {
    return (
        <div className="flex flex-col gap-7 justify-center items-center py-20 text-center">

            <h2 className="text-3xl font-bold w-2xl pb-2 relative after:content-[''] after:absolute after:left-1/2 after:-ml-[25px] after:bottom-0 after:w-[50px] after:h-[5px] after:bg-red-600">- Quick Links -</h2>
            <CardLink/>
        </div>
    )
}

export default QuickLink