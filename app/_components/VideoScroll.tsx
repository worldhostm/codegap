'use client'

import React, { useRef, useEffect, useState } from "react";
import style from './videoScroll.module.css';

export default function VideoScroll(){
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  // 비디오 시간 구간 매핑
  const timeMappings = [
    { start: 0, end: 5 }, // 섹션 1: 0초 ~ 5초
    { start: 5, end: 10 }, // 섹션 2: 5초 ~ 10초
    { start: 10, end: 15 }, // 섹션 3: 10초 ~ 15초
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const { start, end } = timeMappings[currentSection];
    video.currentTime = start; // 현재 섹션의 시작 시간으로 이동
    video.play();

    // 비디오의 현재 시간을 감시하여 종료 시간에 도달하면 멈춤
    const handleTimeUpdate = () => {
        if (video.currentTime >= end) {
            video.currentTime = start; // 다시 시작 시간으로 이동
            video.play(); // 반복 재생
          }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentSection]);


  const [,setprevIdx] = useState<number>(0);
  // 스크롤 이벤트 처리
  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const sectionIndex = Math.round(scrollTop / window.innerHeight);

    if (sectionIndex !== currentSection) {
      setCurrentSection(sectionIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* 비디오 태그 */}
      <video
        ref={videoRef}
        src="/video/ExampleVideo.mp4"
        muted
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      ></video>

      {/* 섹션들 */}
      {timeMappings.map((_, index) => (
        <div

          key={index}
          className={`${style.sections} ${index === currentSection && `${style.fadeUp}`}`}
          style={{
            width:'100vw',
            height: "100vh",
            display: "flex",
            alignItems: "center",
            fontSize: "2rem",
            color: "white",
            background: index % 2 === 0 ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
            scrollSnapAlign: "start",
            padding:'0px 100px'
          }}
          onWheel={()=>{
            setprevIdx((prev)=>{
                if(prev === index){
                    return index;
                }
                else{
                    const newValue = (prev === index) ? index : 0;
                    return newValue;
                }
            });
        }}
        >
          Section {index + 1}
        </div>
      ))}
    </div>
  );
};

