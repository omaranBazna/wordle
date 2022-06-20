import React from 'react'

function Keyboard(){
    const line1=["ض","ص","ث","ق","ف","غ","ع","ه","خ","ح"]
    const line2=["ش","س","ي","ب","ل","ا","ت","ن","م","ك"]
    const line3=["ر","ة","و"]
return (

<div className="keyboard">
    
<div className="keyboardRow1">
  {line1.map((item,index)=><div className="btn" key={index}>{item}</div>)}
</div>
<div className="keyboardRow2">
{line2.map((item,index)=><div className="btn" key={index}>{item}</div>)}
</div>
<div className="keyboardRow3">
{line3.map((item,index)=><div className="btn" key={index}>{item}</div>)}
</div>


</div>
)
}
export default Keyboard;