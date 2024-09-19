'use client'
import React, { useState } from 'react'

export default function ToggleButtonTab() {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <div 
            className={`relative w-[300px] h-[100px] ${!isChecked ? `bg-blue-200` : `bg-gray-200`} transition-all rounded-full flex items-center px-1 cursor-pointer`}
            onClick={() => setIsChecked(!isChecked)}
        >
            <div 
                className={`absolute w-[90px] h-[90px] flex justify-center items-center bg-white rounded-full transform transition-transform duration-500 ${isChecked ? 'translate-x-[200px]' : 'translate-x-0'}`}
            >
            </div>
            <div className={`absolute px-2 ${isChecked ? 'translate-x-[200px]' : 'translate-x-0'} transition-transform duration-500`}>
                {isChecked ? `메뉴1`:`메뉴2`}
            </div>
        </div>
    );
}
