import React from 'react'

const Col = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='col'>{children}</div>
  )
}

export default Col