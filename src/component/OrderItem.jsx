import React, { useRef, useEffect }  from "react";
import gsap from "gsap";

const OrderItem = ({ data, onAddClick, onMinusClick, onDeleteClick }) => {
    const itemRef = useRef()
    useEffect(() => {
        gsap.from(itemRef.current, {
            duration: 0.5,
            opacity: 0
        })
    }, []);
    return (
        <div className="order-item" ref={itemRef}>
            <div className="number">{data.count}</div>
            <div className="message">
                <div>{data.food_name}</div>
                <div>
                    <div>${data.price * data.count}</div>
                    <div className="btns">
                        <div onClick={() => onAddClick(data)}>+</div>
                        <div onClick={() => onMinusClick(data)}>-</div>
                    </div>
                </div>
            </div>
            <div className="close" onClick={() => onDeleteClick(data)}>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default OrderItem;
