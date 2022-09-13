import React from "react";

function ActivityBar({name, hours, all_activities_hours, previousHours, handleClick}) {

    const width = Math.round(100*hours/all_activities_hours)
    const offset = Math.round(100*previousHours/all_activities_hours)

    return (
        <div style={{width: `${width}%`,display:'flex', justifyContent: 'center', alignItems:'center', backgroundColor:"red", borderRadius: '5px', padding: '1px', marginLeft:`${offset}%`}} onClick={handleClick}>
            <p style={{color:"black", margin: '5px' }}>{name}</p>
        </div>
    )

}

export default ActivityBar;