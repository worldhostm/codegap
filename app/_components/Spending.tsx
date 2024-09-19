import React, { Fragment, KeyboardEvent, MouseEvent, useEffect, useState } from 'react'
import Container from '../css/_components/FlexContainer'
import LabeledInput from '../system/_components/LabeledInput';
import Button from '../system/_components/Button';
import Link from 'next/link';

export default function Spending() {
    const [spendAmt,setspendAmt] = useState(0);
    const [scheduleAmt,setscheduleAmt] = useState(0);
    const [amtlist, setamtlist] = useState<{title:string, price:string}[]>([{title:'냉장고',price:'1000'}]);
    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    const [title1, settitle1] = useState('');
    const [price1, setprice1] = useState('');
    
    const addamtlist=(param:{title:string, price:string})=>{
        setamtlist((prev)=>{
            let newValue =[];
            if(prev) {newValue = [...prev,param];}
            else  {newValue = prev;}
            return newValue;
        });

        if(price) setspendAmt((prev)=>prev+parseInt(price));
        if(price1) setspendAmt((prev)=>prev+parseInt(price));

    }

    const handleSubmit=(param:{title:string,price:string})=>{
        setamtlist((prev)=>{
            let newValue =[];
            if(prev) {newValue = [...prev,param];}
            else  {newValue = prev;}
            return newValue;
        });
    }
    const handleKeyPress=(e:React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>)=>{
        if(e.key==='Enter'){
            e.preventDefault(); // 엔터를 눌렀을 때 페이지 새로고침 방지
            setamtlist((prev)=>{
                let newValue =[];
                if(prev) {newValue = [...prev,{title, price}];}
                else  {newValue = prev;}
                return newValue;
            });

            if(price) setspendAmt((prev)=>prev+parseInt(price));
            if(price1) setspendAmt((prev)=>prev+parseInt(price));
        }
    }

    const handleSubmit2=(param:{title:string,price:string})=>{
        setamtlist((prev)=>{
            let newValue =[];
            if(prev) {newValue = [param,...prev];}
            else  {newValue = prev;}
            return newValue;
        });
    }

    const deleteComp = (e:MouseEvent ,idx: number) => {
        e.preventDefault();

        // 삭제할 항목의 price를 미리 저장
        const reduce = parseInt(amtlist[idx]?.price || '0');
    
        // amtlist에서 항목 삭제
        setamtlist((prev) => {
          const newValue = prev.filter((_, index) => index !== idx); // idx와 다른 항목들만 남기기
          return newValue;
        });
    
        // spendAmt에서 price 차감
        setspendAmt((prev) => {
          const newValue = prev - reduce;
          return newValue >= 0 ? newValue : 0; // 값이 음수가 되지 않도록 보정
        });
      };
    
      useEffect(() => {
        if(amtlist.length > 0){
            setspendAmt((prev)=>{
                    const newValue =  prev + parseInt(amtlist[amtlist.length - 1]?.price) || 0;
                    return newValue;
                }
            )
        }else{
            setspendAmt(parseInt(amtlist[0]?.price) || 0);
        }
      return () => {}
    }, [addamtlist]);

      useEffect(() => {
        if(amtlist.length > 0){
            setspendAmt((prev)=>{
                    const newValue =  prev - parseInt(amtlist[amtlist.length - 1]?.price) || 0;
                    return newValue;
                }
            )
        }else{
            setspendAmt(parseInt(amtlist[0]?.price) || 0);
        }
      return () => {}
    }, [deleteComp]);

  return (
    <Container
    className='flex-col gap-10'
    >
            지출 예정 금액
            <div>
                <LabeledInput
                key={1}
                label='항목'
                value={title}
                onChange={settitle}
                />
                <LabeledInput
                key={2}
                label='가격'
                value={price}
                onChange={setprice}
                onKeyDown={handleKeyPress}
                />
                <button
                    type='button'
                    onClick={()=>addamtlist({title,price})}
                    className='bg-gray-200 w-100 h-[30px]'
                    onKeyDown={handleKeyPress}
                >
                    예정금액 저장
                </button>
            </div>
        <div className='flex-col gap-30 h-[100]'>
            지출 금액
            <div 
                onClick={()=>{}}
            >

                <LabeledInput
                label='항목'
                value={title1}
                onChange={settitle1}
                />
                <LabeledInput
                label='가격'
                value={price1}
                onChange={setprice1}
                />
               <button
                    className='bg-blue-300 w-100 h-[30px]'
                    onClick={()=>{addamtlist({title:title1,price:price1})}}
                >
                    지출금액 저장
                </button>
            </div>
        </div>
        <div className=''>
            <table className='w-[1200px] h-[100%] border border-1 border-blue-200'>
                <thead className='border border-1 border-blue-200'>
                    <th className='w-[33.33333%] border border-1 border-blue-200'>항목</th>
                    <th className='w-[33.33333%] border border-1 border-blue-200'>가격</th>
                    <th className='w-[33.33333%] border border-1 border-blue-200'>기타</th>
                </thead>
                <tbody>
                    {
                        amtlist&&amtlist.map((e,idx)=>
                        (
                            <tr 
                            key={idx+'amtli'}
                            className=''
                            >
                                {/* <Link
                                    key={'amt' + idx + '$$'}
                                    href={`/todo/${e.title}`}
                                    className=''
                                > */}
                                <td className='w-[400px] border border-1 border-blue-200 text-center'>{e.title}</td>
                                <td className='w-[400px] border border-1 border-blue-200 text-center'>{e.price}</td>
                                <td className='w-[400px] border border-1 border-blue-200 text-center'>
                                    <button 
                                    className='bg-blue-200 w-[100px] h-[40px] rounded-full'
                                    onClick={(event)=>{
                                        deleteComp(event,idx);
                                    }}>삭제
                                    </button>
                                </td>
                                {/* </Link> */}
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
            SUM : {spendAmt}
        </div>
    </Container>
  )
}
