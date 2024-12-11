'use client'
import React, { Dispatch, SetStateAction } from 'react'


interface ToggleButtonTabProps {
    options: [string, string];
    isActive: boolean;
    setisActive: Dispatch<SetStateAction<boolean>>;
    className?: string;
  }
  
export default function ToggleButtonTab({options, isActive, setisActive, className}: ToggleButtonTabProps) {

    return (
        <div 
            className={`relative w-[300px] h-[100px] ${!isActive ? `bg-red-200` : `bg-gray-200`} transition-all rounded-full flex items-center px-1 cursor-pointer ${className}`}
            onClick={() => setisActive(!isActive)}
        >
            <div 
                className={`absolute w-[90px] h-[90px] flex justify-center items-center bg-white rounded-full transform transition-transform duration-500 ${isActive ? 'translate-x-[200px]' : 'translate-x-0'}`}
            >
            </div>
            <div className={`absolute px-2 ${isActive ? 'translate-x-[200px]' : 'translate-x-0'} transition-transform duration-500`}>
                {isActive ? options[0] : options[1]}
            </div>
        </div>
    );
}
