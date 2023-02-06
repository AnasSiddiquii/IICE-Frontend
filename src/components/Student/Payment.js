import React from 'react'

const Payment = () => {

  const d =  new Date()

  const f1 = `${d.getMonth()}-${d.getFullYear()}`
  const f2 = `${d.getMonth()+1}-${d.getFullYear()}`

  console.log(f1<f2)

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Payment</h2>
      <h2 className='text-primary mt-4'>{d.getDate()}-{d.getMonth()+1}-{d.getFullYear()}</h2>
      <h2 className='text-primary mt-4'>{f1}</h2>
      <h2 className='text-primary mt-4'>{f2}</h2>
      {/* <h2 className='text-primary mt-4'><pre>Day      - {d.getDay()}</pre></h2> */}
    </div>
  )
}

export default Payment
