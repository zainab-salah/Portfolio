import Image from 'next/image'
import React from 'react'

const DetailsCard = () => {
  return (
    <div className="about-box dark:bg-transparent bg-[#FCF4FF]">
    <Image
      alt="icon"
      src="/images/icons/icon-1.svg"
      width="40"
      height="40"
      className="w-10 h-10 object-contain block"
    />
    <div className="space-y-2 break-all">
      <h3 className="dark:text-white text-xl font-semibold">
        Ui/Ux Design
      </h3>
      <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam euismod volutpat.
      </p>
    </div>
  </div>
  )
}

export default DetailsCard