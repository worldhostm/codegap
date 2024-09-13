import React, { useState, useEffect } from 'react';

interface Props {
  start:number
  end:number
  duration:number
  color?:string
  fontbold?:boolean
  size?:number
}
const AnimatedNumber = ({ start, end, duration,color,fontbold,size }:Props) => {
    const [value, setValue] = useState(start); // 상태로 현재 값을 관리

    useEffect(() => {
        let startTimestamp : number | null = null;

        const step = (timestamp:number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setValue(Math.floor(progress * (end - start) + start)); // 상태 업데이트

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [start, end, duration]); // 의존성 배열에 start, end, duration 추가

    return <div
      style={{
        color:color,
        fontWeight:fontbold ? 700 : '',
        fontSize : size
      }}
    >{value}</div>; // 현재 값 렌더링
};

export default AnimatedNumber;
