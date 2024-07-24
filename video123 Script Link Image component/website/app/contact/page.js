import React from 'react'
import Script from 'next/script'

const page = () => {
  return (
    <div>
      <Script>
        {` alert("Welcome to contact page"); `}
      </Script>
      Contact
    </div>
  )
}

export default page
export const metadata = {
  title: "Contact us",
  description: "Contact with us",
};