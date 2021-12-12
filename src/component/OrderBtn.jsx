import React from "react";

const OrderBtn = ({startBtnRef ,onclick}) => {
    const orderBtnStyle = {
        position: "fixed",
        zIndex: "2",
        left: "50%",
        bottom: "3%",
        transform: "translateX(-50%)",
        backgroundColor: "#000000",
        color: "white",
        maxWidth: "400px",
        width: "80%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "300",
        cursor: "pointer",
    };
    return <div ref={startBtnRef} style={orderBtnStyle} onPointerDown={()=>{onclick()}}>ONLINE ORDER</div>;
};

export default OrderBtn;
