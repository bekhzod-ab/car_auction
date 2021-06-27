import React from 'react'
import Countdown from 'react-countdown';

export const LotCard = ({item}) => {
    let exprireDate = item.duration;

    const renderer = ({days,hours,minutes,seconds,completed,props}) => {
        if(completed){
            return null
        }
        return(
            <div className="col">
                <div className="card shadow-sm">
                    
                    <div className="w-100" style={{
                        height: `320px`,
                        backgroundImage:`url(${props.item.imgUrl})`,
                        backgroundSize:`contain`,
                        backgroundRepeat:`no-repeat`,
                        backgroundPosition:`center`
                        }}/>

                    <div className="card-body">
                        <p className="lead display-6">{props.item.model}</p>
                        <div className="d-flex justify-content-between align-item-center">
                            <h5>{days * 24 + hours} hr: {minutes} min: {seconds} sec</h5>
                        </div>
                    </div>    
                </div>
            </div> 
        )
    }



    return <Countdown data={exprireDate} item={item} renderer={renderer}/>
}
