import React, { useRef } from "react";
import gsap from "gsap";
const Item = ({ data, onAddData }) => {
    const itemRef = useRef();
    const clickAni = () => {
        gsap.timeline({
            ease: "Power0.easeNone",
        })
            .to(itemRef.current, 0.1, {
                scale: 0.95,
            })
            .to(itemRef.current, 0.1, {
                scale: 1,
            });
    };
    return (
        <div className="item" ref={itemRef}>
            <div className="image">
                <img src={data.img_url} alt={data.food_name} />
            </div>
            <div className="info">
                <div>
                    <div>{data.food_name}</div>
                    <div>{data.food_japanese}</div>
                </div>
                <div>${data.price}</div>
            </div>
            <div
                className="add"
                onClick={() => {
                    onAddData(data);
                    clickAni();
                }}
            >
                + ADD
            </div>
        </div>
    );
};

export default Item;
