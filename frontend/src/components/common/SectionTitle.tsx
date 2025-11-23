import React from 'react'

const SectionTitle = ({children} : {children :React.ReactNode}) => {
  return (
    <h2 className="text-3xl font-semibold mb-6">{children}</h2>
  )
}

export default SectionTitle