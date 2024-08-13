import React from 'react'
import ManCategory from "../assets/Images/C_Image_man.png"
import WomanCategory from "../assets/Images/C_Image_woman.png"
import kidCategory from "../assets/Images/C_image_child.png"

const Categories = [
    {title: 'Man',
        imageUrl : ManCategory
    },
    {title: 'WoMan',
        imageUrl : WomanCategory
    },
    {title: 'Kids',
        imageUrl : kidCategory
    },
]

function CategorySection() {
  return (

    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 cursor-pointer'>
        {Categories.map((category , index)=>(
            <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={category.imageUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
            <div className='absolute top-20 left-12'>
                <p className='text-xl font-bold'>{category.title}</p>
                <p className='text-gray-600'>View All</p>
            </div>
            </div>
        ))}
      
    </div>
  )
}

export default CategorySection
