'use client';

import React, { useEffect, useState } from 'react'
import TabComponent from '@/app/system/_components/TabComponent'

interface OrderSummaryProps {
  totalPrice: number;
  totalDiscount: number;
  shippingCost: number;
  itemCount: number;
}

export default function BasketComponents() {
    const basketTabArr = [
        {  label: '일반구매', content: '일반구매 콘텐츠'},
        {  label: '정기배송', content: '정기배송 콘텐츠'},
    ];
    const initialProducts = [
        {
          id: 1,
          name: "두오모 천연발효 유기농 사과식초 애플사이다 비니거 1L, 2개",
          price: 16800,
          originalPrice: 21800,
          discount: 22,
          deliveryDate: "12/4",
          rewardPoints: 806,
          quantity: 1,
          imageUrl:
            "/sample/sample_images_01.png", // 실제 이미지 URL로 변경
        },
        {
          id: 2,
          name: "투제이글로벌 설탕빼고 스테비아, 500g, 1개",
          price: 5300,
          originalPrice: 0,
          discount: 0,
          deliveryDate: "12/4",
          rewardPoints: 265,
          quantity: 1,
          imageUrl:
            "/sample/sample_images_01.png", // 실제 이미지 URL로 변경
        },
      ];

      const [products, setProducts] = useState(initialProducts);

    // 수량 증가
    const handleIncrease = (id: number) => {
        setProducts((prevProducts) =>
        prevProducts.map((product) =>
            product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
        );
    };

    // 수량 감소
    const handleDecrease = (id: number) => {
        setProducts((prevProducts) =>
        prevProducts.map((product) =>
            product.id === id && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        );
    };

    const handleDelete=(id:number)=>{
        setProducts((prev)=>{
            return prev.filter(e=> e.id !== id)
        })
    }

    useEffect(()=>{
        const asyncFun=async()=>{
            try {
                const res = await fetch('http://localhost:8080/users', {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                });
                const resjson = await res.json();
                console.info(resjson);

            } catch (error) {
                
            }
        }
        asyncFun();
    },[])

    const [totalPrice,settotalPrice] = useState(99999999);
    const [totalDiscount,settotalDiscount] = useState(0);
    const [shippingCost,setshippingCost] = useState(0);

  return (
    <div>
      <TabComponent tabs={basketTabArr}/>

      <div className="flex flex-col p-4 border rounded-md w-[100%]" >
      <h2 className="text-lg font-bold mb-4">로켓배송 상품</h2>
      {products.map((product,idx) => (
        <div
          key={product.id}
          className="flex items-center gap-4 p-4 border-b last:border-none w-[100%]"
        >
          {/* 체크박스 */}
          <input
            type="checkbox"
            className="w-5 h-5"
            defaultChecked={true}
          />
          {/* 이미지 */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-20 h-20 object-cover rounded"
          />
          {/* 상품 정보 */}
          <div className="flex-1">
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-green-500 text-sm">
              내일({product.deliveryDate}) 도착 보장
            </p>
            <p className="text-gray-400 text-xs">서울경기 기준</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-bold text-red-500">
                {product.price.toLocaleString()}원
              </span>
              {product.discount > 0 && (
                <>
                  <span className="text-gray-400 line-through text-sm">
                    {product.originalPrice.toLocaleString()}원
                  </span>
                  <span className="text-xs text-red-500">
                    {product.discount}% 할인
                  </span>
                </>
              )}
            </div>
            <p className="text-sm text-yellow-500">
              최대 {product.rewardPoints}원 적립
            </p>
          </div>
          {/* 수량 조절 */}
          <div className="flex items-center gap-2">
            <button 
            className="w-8 h-8 border rounded"
            onClick={()=>handleDecrease(product.id)}
            >-</button>
            <span>{product.quantity}</span>
            <button 
            className="w-8 h-8 border rounded"
            onClick={()=>handleIncrease(product.id)}
            >+</button>
          </div>
          {/* 삭제 버튼 */}
          <button 
          className="text-red-500 text-sm"
          onClick={()=>{handleDelete(product.id)}}
          >삭제</button>
        </div>
      ))}
    </div>

    <div className="p-4 border rounded-md w-[100%]">
      <h2 className="text-lg font-bold mb-4">주문 예상 금액</h2>
      <div className="flex justify-between mb-2">
        <span className="text-gray-500">총 상품 가격</span>
        <span className="text-gray-900 font-medium">
          {totalPrice.toLocaleString()}원
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-500">총 할인</span>
        <span className="text-red-500 font-medium">
          -{totalDiscount.toLocaleString()}원
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-gray-500">총 배송비</span>
        <span className="text-gray-900 font-medium">
          +{shippingCost.toLocaleString()}원
        </span>
      </div>
      <div className="flex justify-end items-center border-t pt-4 mt-4">
        <span className="text-xl font-bold">₩ {totalPrice.toLocaleString()}원</span>
      </div>
      <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md font-bold hover:bg-blue-600">
        구매하기 ({products.length})
      </button>
    </div>
    </div>
  )
}
