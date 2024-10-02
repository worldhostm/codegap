import React from 'react'
import ProgressTile from '../_components/ProgressTile'

export default function page() {
  return (
    <div className='w-[full] h-[full] p-2'>
        <ProgressTile 
            label='라벨'
            percentage={95}
            targetAmount={1000000}
            currentAmount={950000}
            description='설명'
        />
    </div>
  )
}
