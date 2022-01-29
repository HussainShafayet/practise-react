import React from 'react'
import Child from './Child';
export default function Parent() {
    const data="This is data from parent";
    const handleParentData=(value)=>{
        console.log('parent',value);
    }
    return (
        <div>
            <Child data={data}  onChildrenData={handleParentData} />
            <p>{data}</p>
        </div>
    )
}
