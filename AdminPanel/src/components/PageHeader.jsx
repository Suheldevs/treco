import React from 'react'

function PageHeader({title = 'Title'}) {
  return (
    <div>
         <div className="w-full border-l-4 border-l-blue-700 mb-6 rounded-lg shadow-md bg-white p-2 hover:shadow-lg transition duration-300">
        <div className="flex items-center justify-between bg-blue-50 p-1 border border-blue-200 rounded-md">
          <h2 className="text-xl text-black/80 px-4 font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default PageHeader