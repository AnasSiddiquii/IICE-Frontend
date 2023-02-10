import React from 'react'

const Payment = () => {
  
  const d =  new Date()
  const selected = 'Jan-2023 to Dec-2023' // enter api session date
  
  const cm = d.getMonth()+1
  let mth = selected.split('-')[0]
  
  let month = ''
  switch(mth){
    case 'Jan' :
        month = mth.replace('Jan','0')
        break
      case 'Feb' :
        month = mth.replace('Feb','1')
        break
      case 'Mar' :
        month = mth.replace('Mar','2')
        break
      case 'Apr' :
        month = mth.replace('Apr','3')
        break
      case 'May' :
        month = mth.replace('May','4')
        break
      case 'June' :
        month = mth.replace('June','5')
        break
      case 'July' :
        month = mth.replace('July','6')
        break
      case 'Aug' :
        month = mth.replace('Aug','7')
        break
      case 'Sep' :
        month = mth.replace('Sep','8')
        break
      case 'Oct' :
        month = mth.replace('Oct','9')
        break
      case 'Nov' :
        month = mth.replace('Nov','10')
        break
      case 'Dec' :
        month = mth.replace('Dec','11')
        break
      default:
        console.log('invalid')
  }
  
  const emi = 2000 // enter api emi amount
  const time = (cm-month)

  let arr = []
  let arr2 = ['January','February','March','April','May','June','July','August','Septemper','October','November','December']
  
  for(let i = Number(month); i < cm ; i++){
      arr[i] = arr2[i]
    }
  
  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Payment</h2>
      
      {
        arr.map((i)=>
        <div key={i}>
          <div className='bg-secondary mt-3 p-3 border rounded row'>
            <h4 className='col-1 text-light p-1'>{i}</h4>
            <div className='col-8 col-md-9 col-lg-10'></div>
            <button className='col-3 col-md-2 col-lg-1 btn btn-primary p-2' disabled>2000</button>
          </div>
        </div>
        )
      }

      <div className='bg-info mt-3 p-3 border rounded row'>
        <h4 className='col-1 text-light p-1'>Total</h4>
        <div className='col-8 col-md-9 col-lg-10'></div>
        <button className='col-3 col-md-2 col-lg-1 btn btn-primary p-2'>{emi*time}</button>
      </div>

      {/* <h2 className='text-primary mt-4'>{d.getDate()}-{d.getMonth()+1}-{d.getFullYear()}</h2> */}
      {/* <h2 className='text-primary mt-4'>{f1}</h2> */}
      {/* <h2 className='text-primary mt-4'>{f2}</h2> */}
      {/* <h2 className='text-primary mt-4'><pre>Day      - {d.getDay()}</pre></h2> */}
    </div>
  )
}

export default Payment
