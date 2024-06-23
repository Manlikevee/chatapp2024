import React from 'react'
import Texttype from './Texttype'
import Imagetype from './Imagetype'

const Messagegenerator = ({messagedata}) => {
  return (
    <>


{messagedata?.length > 0 && (
        <>
          {messagedata?.map((info, index) => (
            <div key={index}> 
             {info.type === 'text' ? (
  <Texttype messagedata={info} />
) : info.type === 'image' ? (
  <Imagetype messagedata={info} />
) : (
  ''
)}
            </div>
          ))}
        </>
      )}


    </>
  )
}

export default Messagegenerator