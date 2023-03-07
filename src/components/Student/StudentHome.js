import React,{useEffect, useState} from "react"

const StudentHome = () => {

  useEffect(()=>{
    getDetail()
    // eslint-disable-next-line 
  },[])
  
  const authstd = localStorage.getItem('student')
  const [detail, setDetail] = useState([])


  const [clear0,  setClear0]  = useState()  
  const [clear1,  setClear1]  = useState()  
  const [clear2,  setClear2]  = useState()  
  const [clear3,  setClear3]  = useState()  
  const [clear4,  setClear4]  = useState()  
  const [clear5,  setClear5]  = useState()  
  const [clear6,  setClear6]  = useState()  
  const [clear7,  setClear7]  = useState()  
  const [clear8,  setClear8]  = useState()  
  const [clear9,  setClear9]  = useState()  
  const [clear10, setClear10] = useState()  
  const [clear11, setClear11] = useState()
  
  
  const [clear12, setClear12] = useState()  
  const [clear13, setClear13] = useState()  
  const [clear14, setClear14] = useState()  
  const [clear15, setClear15] = useState()  
  const [clear16, setClear16] = useState()  
  const [clear17, setClear17] = useState()  
  const [clear18, setClear18] = useState()  
  const [clear19, setClear19] = useState()  
  const [clear20, setClear20] = useState()  
  const [clear21, setClear21] = useState()  
  const [clear22, setClear22] = useState()  
  const [clear23, setClear23] = useState()


  const [clear24, setClear24] = useState()  
  const [clear25, setClear25] = useState()  
  const [clear26, setClear26] = useState()  
  const [clear27, setClear27] = useState()  
  const [clear28, setClear28] = useState()  
  const [clear29, setClear29] = useState()  
  const [clear30, setClear30] = useState()  
  const [clear31, setClear31] = useState()  
  const [clear32, setClear32] = useState()  
  const [clear33, setClear33] = useState()  
  const [clear34, setClear34] = useState()  
  const [clear35, setClear35] = useState()  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const getDetail = async () => {
    let result = await fetch('http://localhost:5000/details')
    result = await result.json()
    if(result){
      setDetail(result)
    }
  }

  let student,course, university, session, tenure, amount    
  
  for (let i = 0; i < detail.length; i++){
    const loginID   = JSON.parse(authstd)._id
    const studentID = detail.map((i)=>(i.studentID))
    const match = studentID[i]===loginID
    
    const studentName    = detail.map((i)=>(i.studentName))
    const courseName     = detail.map((i)=>(i.courseName))
    const universityName = detail.map((i)=>(i.universityName))
    const sessionYear    = detail.map((i)=>(i.sessionYear))
    const emiTenure      = detail.map((i)=>(i.emiTenure))
    const emiAmount      = detail.map((i)=>(i.emiAmount))
    

    if(match){
      student    = studentName[i]
      course     = courseName[i]
      university = universityName[i]
      session    = sessionYear[i]
      tenure     = emiTenure[i]
      amount     = emiAmount[i]
    }
  }  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  
  const month    = 'col-7 left p-2 mt-3'
  const paid     = 'btn btn-success col-5 p-2 mt-3'
  const pay      = 'btn btn-danger  col-5 p-2 mt-3'
  const upcoming = 'btn btn-warning col-5 p-2 mt-3'

  const d =  new Date()
  const cm = d.getMonth()
  const cy = d.getFullYear()

  
  const Jan   = 0
  const start = 2022
  const diff  = cy-start
  
  let first, second, third, forth, current
  if(Jan){
    first  = start
    second = start+12
    third  = start+12+12
    
    if(diff===0){current = cm+first}
    if(diff===1){current = cm+second}
    if(diff===2){current = cm+third}    
  }
  else{
    first  = start
    second = start+12
    third  = start+12+12
    forth  = start+12+12+12
  
    if(diff===0 && cm >= 6){current = cm+first}
    if(diff===1 && cm <= 5){current = cm+second-6}
    if(diff===1 && cm >= 6){current = cm+second-6}
    if(diff===2 && cm <= 5){current = cm+third-6}
    if(diff===2 && cm >= 6){current = cm+third-6}
    if(diff===3 && cm <= 5){current = cm+forth-6}
  }

  let January1   = 0+first
  let color0     = January1 <= current ?  pay  :  upcoming
  let status0    = January1 <= current ? 'PAY' : 'UPCOMING'
  let Color0     = clear0 ?  paid : color0
  let Status0    = clear0 ? 'PAID': status0
  
  let February1  = 1+first
  let color1     = February1 <= current ?  pay  :  upcoming
  let status1    = February1 <= current ? 'PAY' : 'UPCOMING'
  let Color1     = clear1 ?  paid  : color1
  let Status1    = clear1 ? 'PAID' : status1
  
  let March1     = 2+first
  let color2     = March1 <= current ?  pay  :  upcoming
  let status2    = March1 <= current ? 'PAY' : 'UPCOMING'
  let Color2     = clear2 ?  paid  : color2
  let Status2    = clear2 ? 'PAID' : status2
  
  let April1     = 3+first
  let color3     = April1 <= current ?  pay  :  upcoming
  let status3    = April1 <= current ? 'PAY' : 'UPCOMING'
  let Color3     = clear3 ?  paid  : color3
  let Status3    = clear3 ? 'PAID' : status3
  
  let May1       = 4+first
  let color4     = May1 <= current ?  pay  :  upcoming
  let status4    = May1 <= current ? 'PAY' : 'UPCOMING'
  let Color4     = clear4 ?  paid  : color4
  let Status4    = clear4 ? 'PAID' : status4
  
  let June1      = 5+first
  let color5     = June1 <= current ?  pay  :  upcoming
  let status5    = June1 <= current ? 'PAY' : 'UPCOMING'
  let Color5     = clear5 ?  paid  : color5
  let Status5    = clear5 ? 'PAID' : status5
  
  let July1      = 6+first
  let color6     = July1 <= current ?  pay  :  upcoming
  let status6    = July1 <= current ? 'PAY' : 'UPCOMING'
  let Color6     = clear6 ?  paid  : color6
  let Status6    = clear6 ? 'PAID' : status6
  
  let August1    = 7+first
  let color7     = August1 <= current ?  pay  :  upcoming
  let status7    = August1 <= current ? 'PAY' : 'UPCOMING'
  let Color7     = clear7 ?  paid  : color7
  let Status7    = clear7 ? 'PAID' : status7
  
  let September1 = 8+first
  let color8     = September1 <= current ?  pay  :  upcoming
  let status8    = September1 <= current ? 'PAY' : 'UPCOMING'
  let Color8     = clear8 ?  paid  : color8
  let Status8    = clear8 ? 'PAID' : status8
  
  let October1   = 9+first
  let color9     = October1 <= current ?  pay  :  upcoming
  let status9    = October1 <= current ? 'PAY' : 'UPCOMING'
  let Color9     = clear9 ?  paid  : color9
  let Status9    = clear9 ? 'PAID' : status9
  
  let November1  = 10+first
  let color10    = November1 <= current ?  pay  :  upcoming
  let status10   = November1 <= current ? 'PAY' : 'UPCOMING'
  let Color10    = clear10 ?  paid  : color10
  let Status10   = clear10 ? 'PAID' : status10
  
  let December1  = 11+first
  let color11    = December1 <= current ?  pay  :  upcoming
  let status11   = December1 <= current ? 'PAY' : 'UPCOMING'
  let Color11    = clear11 ?  paid  : color11
  let Status11   = clear11 ? 'PAID' : status11

  
  let January2   = 0+second
  let color12    = January2 <= current ?  pay  :  upcoming
  let status12   = January2 <= current ? 'PAY' : 'UPCOMING'
  let Color12    = clear12 ?  paid  : color12
  let Status12   = clear12 ? 'PAID' : status12
  
  let February2  = 1+second
  let color13    = February2 <= current ?  pay  :  upcoming
  let status13   = February2 <= current ? 'PAY' : 'UPCOMING'
  let Color13    = clear13 ?  paid  : color13
  let Status13   = clear13 ? 'PAID' : status13
  
  let March2     = 2+second
  let color14    = March2 <= current ?  pay  :  upcoming
  let status14   = March2 <= current ? 'PAY' : 'UPCOMING'
  let Color14    = clear14 ?  paid  : color14
  let Status14   = clear14 ? 'PAID' : status14
  
  let April2     = 3+second
  let color15    = April2 <= current ?  pay  :  upcoming
  let status15   = April2 <= current ? 'PAY' : 'UPCOMING'
  let Color15    = clear15 ?  paid  : color15
  let Status15   = clear15 ? 'PAID' : status15
  
  let May2       = 4+second
  let color16    = May2 <= current ?  pay  :  upcoming
  let status16   = May2 <= current ? 'PAY' : 'UPCOMING'
  let Color16    = clear16 ?  paid  : color16
  let Status16   = clear16 ? 'PAID' : status16
  
  let June2      = 5+second
  let color17    = June2 <= current ?  pay  :  upcoming
  let status17   = June2 <= current ? 'PAY' : 'UPCOMING'
  let Color17    = clear17 ?  paid  : color17
  let Status17   = clear17 ? 'PAID' : status17
  
  let July2      = 6+second
  let color18    = July2 <= current ?  pay  :  upcoming
  let status18   = July2 <= current ? 'PAY' : 'UPCOMING'
  let Color18    = clear18 ?  paid  : color18
  let Status18   = clear18 ? 'PAID' : status18
  
  let August2    = 7+second
  let color19    = August2 <= current ?  pay  :  upcoming
  let status19   = August2 <= current ? 'PAY' : 'UPCOMING'
  let Color19    = clear19 ?  paid  : color19
  let Status19   = clear19 ? 'PAID' : status19
  
  let September2 = 8+second
  let color20    = September2 <= current ?  pay  :  upcoming
  let status20   = September2 <= current ? 'PAY' : 'UPCOMING'
  let Color20    = clear20 ?  paid  : color20
  let Status20   = clear20 ? 'PAID' : status20
  
  let October2   = 9+second
  let color21    = October2 <= current ?  pay  :  upcoming
  let status21   = October2 <= current ? 'PAY' : 'UPCOMING'
  let Color21    = clear21 ?  paid  : color21
  let Status21   = clear21 ? 'PAID' : status21
  
  let November2  = 10+second
  let color22    = November2 <= current ?  pay  :  upcoming
  let status22   = November2 <= current ? 'PAY' : 'UPCOMING'
  let Color22    = clear22 ?  paid  : color22
  let Status22   = clear22 ? 'PAID' : status22
  
  let December2  = 11+second
  let color23    = December2 <= current ?  pay  :  upcoming
  let status23   = December2 <= current ? 'PAY' : 'UPCOMING'
  let Color23    = clear23 ?  paid  : color23
  let Status23   = clear23 ? 'PAID' : status23
  

  let January3   = 0+third
  let color24    = January3 <= current ?  pay  :  upcoming
  let status24   = January3 <= current ? 'PAY' : 'UPCOMING'
  let Color24    = clear24 ?  paid  : color24
  let Status24   = clear24 ? 'PAID' : status24
  
  let February3  = 1+third
  let color25    = February3 <= current ?  pay  :  upcoming
  let status25   = February3 <= current ? 'PAY' : 'UPCOMING'
  let Color25    = clear25 ?  paid  : color25
  let Status25   = clear25 ? 'PAID' : status25
  
  let March3     = 2+third
  let color26    = March3 <= current ?  pay  :  upcoming
  let status26   = March3 <= current ? 'PAY' : 'UPCOMING'
  let Color26    = clear26 ?  paid  : color26
  let Status26   = clear26 ? 'PAID' : status26
  
  let April3     = 3+third
  let color27    = April3 <= current ?  pay  :  upcoming
  let status27   = April3 <= current ? 'PAY' : 'UPCOMING'
  let Color27    = clear27 ?  paid  : color27
  let Status27   = clear27 ? 'PAID' : status27
  
  let May3       = 4+third
  let color28    = May3 <= current ?  pay  :  upcoming
  let status28   = May3 <= current ? 'PAY' : 'UPCOMING'
  let Color28    = clear28 ?  paid  : color28
  let Status28   = clear28 ? 'PAID' : status28
  
  let June3      = 5+third
  let color29    = June3 <= current ?  pay  :  upcoming
  let status29   = June3 <= current ? 'PAY' : 'UPCOMING'
  let Color29    = clear29 ?  paid  : color29
  let Status29   = clear29 ? 'PAID' : status29
  
  let July3      = 6+third
  let color30    = July3 <= current ?  pay  :  upcoming
  let status30   = July3 <= current ? 'PAY' : 'UPCOMING'
  let Color30    = clear30 ?  paid  : color30
  let Status30   = clear30 ? 'PAID' : status30
  
  let August3    = 7+third
  let color31    = August3 <= current ?  pay  :  upcoming
  let status31   = August3 <= current ? 'PAY' : 'UPCOMING'
  let Color31    = clear31 ?  paid  : color31
  let Status31   = clear31 ? 'PAID' : status31
  
  let September3 = 8+third
  let color32    = September3 <= current ?  pay  :  upcoming
  let status32   = September3 <= current ? 'PAY' : 'UPCOMING'
  let Color32    = clear32 ?  paid  : color32
  let Status32   = clear32 ? 'PAID' : status32
  
  let October3   = 9+third
  let color33    = October3 <= current ?  pay  :  upcoming
  let status33   = October3 <= current ? 'PAY' : 'UPCOMING'
  let Color33    = clear33 ?  paid  : color33
  let Status33   = clear33 ? 'PAID' : status33
  
  let November3  = 10+third
  let color34    = November3 <= current ?  pay  :  upcoming
  let status34   = November3 <= current ? 'PAY' : 'UPCOMING'
  let Color34    = clear34 ?  paid  : color34
  let Status34   = clear34 ? 'PAID' : status34
  
  let December3  = 11+third
  let color35    = December3 <= current ?  pay  :  upcoming
  let status35   = December3 <= current ? 'PAY' : 'UPCOMING'
  let Color35    = clear35 ?  paid  : color35
  let Status35   = clear35 ? 'PAID' : status35


  let change0, change1, change2, change3, change4, change5, change6, change7, change8, change9, change10, change11
  if(January1   <= current){ change0  = () => { setClear0(!clear0)   }}
  if(February1  <= current){ change1  = () => { setClear1(!clear1)   }}
  if(March1     <= current){ change2  = () => { setClear2(!clear2)   }}
  if(April1     <= current){ change3  = () => { setClear3(!clear3)   }}
  if(May1       <= current){ change4  = () => { setClear4(!clear4)   }}
  if(June1      <= current){ change5  = () => { setClear5(!clear5)   }}
  if(July1      <= current){ change6  = () => { setClear6(!clear6)   }}
  if(August1    <= current){ change7  = () => { setClear7(!clear7)   }}
  if(September1 <= current){ change8  = () => { setClear8(!clear8)   }}
  if(October1   <= current){ change9  = () => { setClear9(!clear9)   }}
  if(November1  <= current){ change10 = () => { setClear10(!clear10) }}
  if(December1  <= current){ change11 = () => { setClear11(!clear11) }}
  
  
  let change12, change13, change14, change15, change16, change17, change18, change19, change20, change21, change22, change23
  if(January2   <= current){ change12 = () => { setClear12(!clear12) }}
  if(February2  <= current){ change13 = () => { setClear13(!clear13) }}
  if(March2     <= current){ change14 = () => { setClear14(!clear14) }}
  if(April2     <= current){ change15 = () => { setClear15(!clear15) }}
  if(May2       <= current){ change16 = () => { setClear16(!clear16) }}
  if(June2      <= current){ change17 = () => { setClear17(!clear17) }}
  if(July2      <= current){ change18 = () => { setClear18(!clear18) }}
  if(August2    <= current){ change19 = () => { setClear19(!clear19) }}
  if(September2 <= current){ change20 = () => { setClear20(!clear20) }}
  if(October2   <= current){ change21 = () => { setClear21(!clear21) }}
  if(November2  <= current){ change22 = () => { setClear22(!clear22) }}
  if(December2  <= current){ change23 = () => { setClear23(!clear23) }}
  
  
  let change24, change25, change26, change27, change28, change29, change30, change31, change32, change33, change34, change35
  if(January3   <= current){ change24 = () => { setClear24(!clear24) }}
  if(February3  <= current){ change25 = () => { setClear25(!clear25) }}
  if(March3     <= current){ change26 = () => { setClear26(!clear26) }}
  if(April3     <= current){ change27 = () => { setClear27(!clear27) }}
  if(May3       <= current){ change28 = () => { setClear28(!clear28) }}
  if(June3      <= current){ change29 = () => { setClear29(!clear29) }}
  if(July3      <= current){ change30 = () => { setClear30(!clear30) }}
  if(August3    <= current){ change31 = () => { setClear31(!clear31) }}
  if(September3 <= current){ change32 = () => { setClear32(!clear32) }}
  if(October3   <= current){ change33 = () => { setClear33(!clear33) }}
  if(November3  <= current){ change34 = () => { setClear34(!clear34) }}
  if(December3  <= current){ change35 = () => { setClear35(!clear35) }}



  return (
    <div className='container-fluid text-uppercase'>
        
        <div className='row justify-content-evenly mt-4'>
        <div className='col-2'>
          <h2  className='left'>Welcome,&nbsp;{student}</h2>
        </div>
        <div className='col-2'></div>
        <div className='col-2'></div>
        <div className='col-2'></div>
      </div>
      
      <div className='row justify-content-evenly'>
        <div className='col-9 '>
          
          <div className='text-light mt-4 p-3 bg-success rounded'>
            <h5 className='left font mt-2'>{`You are enrolled in ${course} , ${session} , ${university}`}</h5>
            {/* <h4 className='left font'>YOU ARE ENROLLED IN COURSE NAME, CURRENTSESSION/YEAR, UNIVERSITY SHORT NAME</h4> */}
          </div>

          <div className='text-light mt-4 p-3 bg-success rounded'>
            <h5 className='left font mt-2'>{`EMI Amount : ${amount}.00 | Tenure : ${tenure} | Paid : 2/24 | Due Date : 07-03-2023`}</h5>
          </div>
        </div>
          
        <div className='col-6 col-sm-4 col-md-3 col-lg-1 mt-1 p-0'>        
          <h2>&nbsp;</h2>
          <img src={`https://the.iice.foundation/logos/logo-1677510204965-376464529.png`} 
          className='border rounded' height='120' width='120' alt='no img' />
        </div>
      </div>
      
      {
        Jan ?
          <div className='row justify-content-evenly mt-5 text-light'>
            <div className='col-10 col-md-5 col-lg-3 p-4 bg-info rounded text-center mb-5'>
              <h2>First Year</h2>
              <div className='row'>
                <h5 className={month}>January  </h5> <button className={Color0}  onClick={change0}> {Status0}</button>
                <h5 className={month}>February </h5> <button className={Color1}  onClick={change1}> {Status1}</button>
                <h5 className={month}>March    </h5> <button className={Color2}  onClick={change2}> {Status2}</button>
                <h5 className={month}>April    </h5> <button className={Color3}  onClick={change3}> {Status3}</button>
                <h5 className={month}>May      </h5> <button className={Color4}  onClick={change4}> {Status4}</button>
                <h5 className={month}>June     </h5> <button className={Color5}  onClick={change5}> {Status5}</button>
                <h5 className={month}>July     </h5> <button className={Color6}  onClick={change6}> {Status6}</button>
                <h5 className={month}>August   </h5> <button className={Color7}  onClick={change7}> {Status7}</button>
                <h5 className={month}>September</h5> <button className={Color8}  onClick={change8}> {Status8}</button>
                <h5 className={month}>October  </h5> <button className={Color9}  onClick={change9}> {Status9}</button>
                <h5 className={month}>November </h5> <button className={Color10} onClick={change10}>{Status10}</button>
                <h5 className={month}>December </h5> <button className={Color11} onClick={change11}>{Status11}</button>
              </div>
            </div>
            
            <div className='col-10 col-md-5 col-lg-3 p-4 bg-secondary rounded text-center mb-5'>
              <h2>Second Year</h2>
              <div className='row'>
                <h5 className={month}>January  </h5> <button className={Color12} onClick={change12}>{Status12}</button>
                <h5 className={month}>February </h5> <button className={Color13} onClick={change13}>{Status13}</button>
                <h5 className={month}>March    </h5> <button className={Color14} onClick={change14}>{Status14}</button>
                <h5 className={month}>April    </h5> <button className={Color15} onClick={change15}>{Status15}</button>
                <h5 className={month}>May      </h5> <button className={Color16} onClick={change16}>{Status16}</button>
                <h5 className={month}>June     </h5> <button className={Color17} onClick={change17}>{Status17}</button>
                <h5 className={month}>July     </h5> <button className={Color18} onClick={change18}>{Status18}</button>
                <h5 className={month}>August   </h5> <button className={Color19} onClick={change19}>{Status19}</button>
                <h5 className={month}>September</h5> <button className={Color20} onClick={change20}>{Status20}</button>
                <h5 className={month}>October  </h5> <button className={Color21} onClick={change21}>{Status21}</button>
                <h5 className={month}>November </h5> <button className={Color22} onClick={change22}>{Status22}</button>
                <h5 className={month}>December </h5> <button className={Color23} onClick={change23}>{Status23}</button>
              </div>
            </div>
            
            <div className='col-10 col-md-5 col-lg-3 p-4 bg-primary rounded text-center mb-5'>
              <h3>Third Year</h3>
              <div className='row'>
                <h5 className={month}>January  </h5> <button className={Color24} onClick={change24}>{Status24}</button>
                <h5 className={month}>February </h5> <button className={Color25} onClick={change25}>{Status25}</button>
                <h5 className={month}>March    </h5> <button className={Color26} onClick={change26}>{Status26}</button>
                <h5 className={month}>April    </h5> <button className={Color27} onClick={change27}>{Status27}</button>
                <h5 className={month}>May      </h5> <button className={Color28} onClick={change28}>{Status28}</button>
                <h5 className={month}>June     </h5> <button className={Color29} onClick={change29}>{Status29}</button>
                <h5 className={month}>July     </h5> <button className={Color30} onClick={change30}>{Status30}</button>
                <h5 className={month}>August   </h5> <button className={Color31} onClick={change31}>{Status31}</button>
                <h5 className={month}>September</h5> <button className={Color32} onClick={change32}>{Status32}</button>
                <h5 className={month}>October  </h5> <button className={Color33} onClick={change33}>{Status33}</button>
                <h5 className={month}>November </h5> <button className={Color34} onClick={change34}>{Status34}</button>
                <h5 className={month}>December </h5> <button className={Color35} onClick={change35}>{Status35}</button>
              </div>
            </div>
          </div>:
          <div className='row justify-content-evenly mt-5 text-light'>
            <div className='col-10 col-md-5 col-lg-3 p-4 bg-info rounded text-center mb-5'>
              <h2>First Year</h2>
              <div className='row'>
                <h5 className={month}>July      </h5> <button className={Color0}  onClick={change0}> {Status0}</button>
                <h5 className={month}>August    </h5> <button className={Color1}  onClick={change1}> {Status1}</button>
                <h5 className={month}>September </h5> <button className={Color2}  onClick={change2}> {Status2}</button>
                <h5 className={month}>October   </h5> <button className={Color3}  onClick={change3}> {Status3}</button>
                <h5 className={month}>November  </h5> <button className={Color4}  onClick={change4}> {Status4}</button>
                <h5 className={month}>December  </h5> <button className={Color5}  onClick={change5}> {Status5}</button>
                <h5 className={month}>January   </h5> <button className={Color6}  onClick={change6}> {Status6}</button>
                <h5 className={month}>February  </h5> <button className={Color7}  onClick={change7}> {Status7}</button>
                <h5 className={month}>March     </h5> <button className={Color8}  onClick={change8}> {Status8}</button>
                <h5 className={month}>April     </h5> <button className={Color9}  onClick={change9}> {Status9}</button>
                <h5 className={month}>May       </h5> <button className={Color10} onClick={change10}>{Status10}</button>
                <h5 className={month}>June      </h5> <button className={Color11} onClick={change11}>{Status11}</button>
              </div>
            </div>
            
            <div className='col-10 col-md-5 col-lg-3 p-4 bg-secondary rounded text-center mb-5'>
              <h2>Second Year</h2>
              <div className='row'>
                <h5 className={month}>July      </h5> <button className={Color12} onClick={change12}>{Status12}</button>
                <h5 className={month}>August    </h5> <button className={Color13} onClick={change13}>{Status13}</button>
                <h5 className={month}>September </h5> <button className={Color14} onClick={change14}>{Status14}</button>
                <h5 className={month}>October   </h5> <button className={Color15} onClick={change15}>{Status15}</button>
                <h5 className={month}>November  </h5> <button className={Color16} onClick={change16}>{Status16}</button>
                <h5 className={month}>December  </h5> <button className={Color17} onClick={change17}>{Status17}</button>
                <h5 className={month}>January   </h5> <button className={Color18} onClick={change18}>{Status18}</button>
                <h5 className={month}>February  </h5> <button className={Color19} onClick={change19}>{Status19}</button>
                <h5 className={month}>March     </h5> <button className={Color20} onClick={change20}>{Status20}</button>
                <h5 className={month}>April     </h5> <button className={Color21} onClick={change21}>{Status21}</button>
                <h5 className={month}>May       </h5> <button className={Color22} onClick={change22}>{Status22}</button>
                <h5 className={month}>June      </h5> <button className={Color23} onClick={change23}>{Status23}</button>
              </div>
            </div>
            
            <div className='col-10 col-md-5 col-lg-3 p-4 bg-primary rounded text-center mb-5'>
              <h3>Third Year</h3>
              <div className='row'>
                <h5 className={month}>July      </h5> <button className={Color24} onClick={change24}>{Status24}</button>
                <h5 className={month}>August    </h5> <button className={Color25} onClick={change25}>{Status25}</button>
                <h5 className={month}>September </h5> <button className={Color26} onClick={change26}>{Status26}</button>
                <h5 className={month}>October   </h5> <button className={Color27} onClick={change27}>{Status27}</button>
                <h5 className={month}>November  </h5> <button className={Color28} onClick={change28}>{Status28}</button>
                <h5 className={month}>December  </h5> <button className={Color29} onClick={change29}>{Status29}</button>
                <h5 className={month}>January   </h5> <button className={Color30} onClick={change30}>{Status30}</button>
                <h5 className={month}>February  </h5> <button className={Color31} onClick={change31}>{Status31}</button>
                <h5 className={month}>March     </h5> <button className={Color32} onClick={change32}>{Status32}</button>
                <h5 className={month}>April     </h5> <button className={Color33} onClick={change33}>{Status33}</button>
                <h5 className={month}>May       </h5> <button className={Color34} onClick={change34}>{Status34}</button>
                <h5 className={month}>June      </h5> <button className={Color35} onClick={change35}>{Status35}</button>
              </div>
            </div>
          </div>
      }
   </div>
  )
}

export default StudentHome
