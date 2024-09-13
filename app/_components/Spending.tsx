import React, { Fragment, KeyboardEvent, MouseEvent, useState } from 'react'
import Container from '../css/_components/FlexContainer'
import LabeledInput from '../system/_components/LabeledInput';
import Button from '../system/_components/Button';
import Link from 'next/link';

export default function Spending() {
    const [spendAmt,setspendAmt] = useState(0);
    const [scheduleAmt,setscheduleAmt] = useState(0);
    const [amtlist, setamtlist] = useState<{title:string, price:string}[]>([]);
    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    const [title1, settitle1] = useState('');
    const [price1, setprice1] = useState('');
    
    const handleSubmit=(param:{title:string,price:string})=>{
        setamtlist((prev)=>{
            let newValue =[];
            if(prev) {newValue = [param,...prev];}
            else  {newValue = prev;}
            console.info(newValue);
            return newValue;
        });
    }
    const handleKeyPress=(e:React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>)=>{
        if(e.key==='Enter'){
            e.preventDefault(); // 엔터를 눌렀을 때 페이지 새로고침 방지
            setamtlist((prev)=>{
                let newValue =[];
                if(prev) {newValue = [{title, price},...prev];}
                else  {newValue = prev;}
                console.info(newValue);
                return newValue;
            });
        }
    }

    const handleSubmit2=(param:{title:string,price:string})=>{
        setamtlist((prev)=>{
            let newValue =[];
            if(prev) {newValue = [param,...prev];}
            else  {newValue = prev;}
            console.info(newValue);
            return newValue;
        });
    }

    const deleteComp = (e:MouseEvent ,idx: number) => {
        e.preventDefault();
        setamtlist((prev) => {
          const newValue = prev.filter((_, index) => index !== idx); // idx와 다른 항목들만 남기기
          return newValue;
        });
      };
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
                    onClick={()=>handleSubmit({title,price})}
                    className='bg-black-100'
                    onKeyDown={handleKeyPress}
                >
                    예정금액 저장
                </button>
            </div>
        <div>
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
                    className='bg-black-100'
                >
                    지출금액 저장
                </button>
            </div>
        </div>
        <div>
            {amtlist&&amtlist.map((e,idx)=>
            (<Link
                key={'amt' + idx + '$$'}
                href={`/todo/${e.title}`}
                className='flex gap-8'
            >
                <div>{e.title}</div>
                <div>{e.price}</div>
                <div><button onClick={(e)=>deleteComp(e,idx)}>삭제</button></div>
            </Link>)
            )}
        </div>
    </Container>
  )
}
