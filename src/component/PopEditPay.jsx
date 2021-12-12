import React, { useState, useEffect } from "react";
import gsap from "gsap";

const PopEditPay = ({ card, setCard, onClose }) => {
    const [cardNumber, setCardNumber] = useState("");
    const [fakecardNumber, setfakecardNumber] = useState("");
    const [expires, setExpires] = useState("");
    const [fakeexpires, setfakeexpires] = useState("");
    const [code, setCode] = useState("");
    const [isCash, setIsCash] = useState(false);
    const [cardError, setCardError] = useState(false);
    const [expiresError, setExpiresError] = useState(false);
    const [codeError, setCodeError] = useState(false);

    useEffect(() => {
        setfakecardNumber("");
        setCardNumber("");
        setfakeexpires("");
        setExpires("");
        setCode("");
    }, [isCash]);

    useEffect(() => {
        setfakecardNumber(card.number);
        setCardNumber(card.number);
        setfakeexpires(card.date);
        setExpires(card.date);
        setCode(card.code);
        openEdit();
    }, []);

    const openEdit = () => {
        gsap.timeline({
            ease: "Power0.easeNone",
        }).from(".pop-message", 0.5, {
            opacity: 0,
            y: 100,
        });
    };
    const closeEdit = () => {
        gsap.timeline({
            ease: "Power0.easeNone",
        }).to(".pop-message", 0.5, {
            opacity: 0,
            y: 100,
            onComplete:()=>{
                onClose(false)
            }
        });
    };
    const substr = (value) => {
        setfakecardNumber(value);
        if (
            value.length % 5 === 0 &&
            value[value.length - 1] !== " " &&
            value.length !== 0
        ) {
            setfakecardNumber(cardNumber + " ");
        }
    };
    const substr2 = (value) => {
        setfakeexpires(value);
        if (
            value.length % 3 === 0 &&
            value[value.length - 1] !== "/" &&
            value.length !== 0
        ) {
            setfakeexpires(expires + "/");
        }
    };
    const onSave = () => {
        let isError = false;

        if (isCash) {
            setCard({
                isCash: isCash,
                number: '',
                date: '',
                code: '',
            });
            closeEdit()
            return
        }
        if (fakecardNumber === "" || fakecardNumber.length > 19) {
            setCardError(true);
            isError = true;
        }
        if (fakeexpires === "") {
            setExpiresError(true);
            isError = true;
        }
        if (code === "") {
            setCodeError(true);
            isError = true;
        }
        if (isError) {
            return;
        }
        setCard({
            isCash: isCash,
            number: fakecardNumber,
            date: fakeexpires,
            code: code,
        });
        closeEdit()
    };
    return (
        <div className="pop-message">
            <div>
                <div className="radio">
                    <input
                        type="radio"
                        id="cash"
                        value="cash"
                        name="pay"
                        defaultChecked={isCash}
                    />
                    <label
                        htmlFor="cash"
                        onClick={() => {
                            setIsCash(true);
                        }}
                    >
                        CASH
                    </label>
                </div>
                <div className="radio">
                    <input
                        type="radio"
                        id="debit"
                        value="debit"
                        name="pay"
                        defaultChecked={!isCash}
                    />
                    <label
                        htmlFor="debit"
                        onClick={() => {
                            setIsCash(false);
                        }}
                    >
                        DEBIT CARD
                    </label>
                </div>
                <div
                    className="card-edit"
                    style={isCash ? { display: "none" } : { display: "block" }}
                >
                    <div>
                        <span>Card Number</span>
                        <input
                            value={fakecardNumber}
                            type="text"
                            pattern="[0-9]*"
                            maxLength="19"
                            inputMode="numeric"
                            style={
                                cardError
                                    ? { border: "1px solid red" }
                                    : { border: "1px solid black" }
                            }
                            onInput={(e) => {
                                setCardError(false);
                                setCardNumber(e.target.value);
                                substr(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <div>
                            <span>Expires(mm/yy)</span>
                            <input
                                type="text"
                                maxLength="5"
                                style={
                                    expiresError
                                        ? { border: "1px solid red" }
                                        : { border: "1px solid black" }
                                }
                                value={fakeexpires}
                                onInput={(e) => {
                                    setExpiresError(false);
                                    setExpires(e.target.value);
                                    substr2(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <span>Security Code</span>
                            <input
                                type="text"
                                maxLength="3"
                                value={code}
                                style={
                                    codeError
                                        ? { border: "1px solid red" }
                                        : { border: "1px solid black" }
                                }
                                onInput={(e) => {
                                    setCodeError(false);
                                    setCode(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="btns">
                <div
                    onClick={() => {
                        onSave();
                    }}
                >
                    SAVE
                </div>
                <div
                    onClick={() => {
                        closeEdit();
                    }}
                >
                    CLOSE
                </div>
            </div>
        </div>
    );
};

export default PopEditPay;
