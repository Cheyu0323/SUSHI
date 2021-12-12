import React, { useRef, useState, useEffect } from "react";
import Item from "./Item";
import OrderItem from "./OrderItem";
import Map from "./Map";
import "../style/menu.scss";
import "../style/header.scss";
import SuccessPage from "./SuccessPage";
import gsap from "gsap";
const MenuList = ({ menuRef, endOrder }) => {
    const itemRef = useRef();
    const menuListRef = useRef();
    const orderListRef = useRef();
    const [menuChoosing, setMenuChoosing] = useState("Nigiri");
    const [orderData, setOrderData] = useState([]);
    const [price, setPrice] = useState({
        SUBTOTAL: "",
        TAX: "",
        DISCOUNT: "",
        TOTAL: "",
    });
    const [transports, setTransports] = useState("Delivery");
    
    useEffect(() => {
        if (orderData.length === 0) return;
        let price = 0,
            tax = 0,
            discount = 0,
            total = 0;
        let discountNumber = 0.05;
        transports === "Delivery"
            ? (discountNumber = 0.05)
            : (discountNumber = 0.07);

        orderData.forEach((item) => {
            price += +item.price * item.count;
            tax = Math.round(price * 0.167 * 100) / 100;
            discount = Math.round(price * discountNumber * 100) / 100;
            total = Math.round((price + tax - discount) * 100) / 100;
        });
        setPrice({
            SUBTOTAL: price,
            TAX: tax,
            DISCOUNT: discount,
            TOTAL: total,
        });
    }, [orderData, transports]);
    useEffect(() => {
        for (let index = 0; index < itemRef.current.children.length; index++) {
            const element = itemRef.current.children[index];
            gsap.from(element, {
                duration: 0.5,
                y: 50,
                opacity: 0,
                delay: index / 10,
            });
        }
    }, [menuChoosing]);
    const menuList = [
        {
            type: "Nigiri",
            food_name: "Salmon",
            food_japanese: "サーモン",
            price: "1.5",
            img_url: "./img/3962_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Grilled Salmon Belly",
            food_japanese: "炙りサーモンハラス",
            price: "1.5",
            img_url: "./img/3964_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Tuna",
            food_japanese: "まぐろ",
            price: "1.5",
            img_url: "./img/3968_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Shrimp",
            food_japanese: "すしエビ",
            price: "1.5",
            img_url: "./img/3970_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Farrer’s Scallops",
            food_japanese: "ベビーホタテ",
            price: "1.5",
            img_url: "./img/3974_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Loligo Squid",
            food_japanese: "ヤリイカ姿",
            price: "1.5",
            img_url: "./img/4348_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Chashu (Roasted Pork)",
            food_japanese: "豚のチャーシュー",
            price: "1.5",
            img_url: "./img/3976_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Grilled Pickled Mackerel",
            food_japanese: "焼き〆鯖",
            price: "1.5",
            img_url: "./img/3973_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Beef Plate Slices",
            food_japanese: "牛カルビ",
            price: "1.5",
            img_url: "./img/3977_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Pacific Flying Squid",
            food_japanese: "スルメイカ",
            price: "1.5",
            img_url: "./img/4113_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Arctic Surf Clam",
            food_japanese: "北寄貝",
            price: "1.5",
            img_url: "./img/3978_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Kabayaki Tilapia",
            food_japanese: "ティラピア鯛の蒲焼",
            price: "1.5",
            img_url: "./img/3981_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Tamagoyaki",
            food_japanese: "玉子焼",
            price: "1.5",
            img_url: "./img/3980_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Imitation Crab Meat",
            food_japanese: "かに蒲鉾",
            price: "1.5",
            img_url: "./img/3979_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Velvet Shrimp",
            food_japanese: "赤エビ",
            price: "1.5",
            img_url: "./img/4347_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Scallop",
            food_japanese: "ホタテ",
            price: "1.5",
            img_url: "./img/3984_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Salmon Belly",
            food_japanese: "サーモンハラス",
            price: "1.5",
            img_url: "./img/3985_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Glazed Salmon Belly",
            food_japanese: "炙りサーモンハラスマヨネーズ",
            price: "1.5",
            img_url: "./img/3957_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Halibut",
            food_japanese: "カラスガレイ",
            price: "1.5",
            img_url: "./img/3986_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Shrimp Satay Sushi Wrap",
            food_japanese: "サテ海老包み",
            price: "1.5",
            img_url: "./img/3989_s.png",
        },
        {
            type: "Nigiri",
            food_name: "Pan Fried Bay Scallop",
            food_japanese: "イタヤ貝包み",
            price: "1.5",
            img_url: "./img/3988_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Salmon Roe",
            food_japanese: "いくら",
            price: "1.5",
            img_url: "./img/3918_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Smoked Salmon",
            food_japanese: "スモークサーモン",
            price: "1.5",
            img_url: "./img/3926_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Farrers Scallops w／ Asian Dipping Sauce",
            food_japanese: "五味ソースベビーホタテ",
            price: "1.5",
            img_url: "./img/3921_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Cooked Octopus＆Wasabi Salad",
            food_japanese: "たこわさび",
            price: "1.5",
            img_url: "./img/3920_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Crawfish Salad",
            food_japanese: "クローフィッシュサラダ",
            price: "1.5",
            img_url: "./img/3922_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Seasoned HerringCapelin Roe",
            food_japanese: "味付け数の子味付けししゃもっこ",
            price: "1.5",
            img_url: "./img/3924_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Tuna Salad",
            food_japanese: "ツナサラダ",
            price: "1.5",
            img_url: "./img/3919_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Fried Fish Flake",
            food_japanese: "カジキでんぶ",
            price: "1.5",
            img_url: "./img/3925_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Corn Salad",
            food_japanese: "コーンマヨネーズ",
            price: "1.5",
            img_url: "./img/3923_s.png",
        },
        {
            type: "Gunkan",
            food_name: "Soft-Boiled Golden Eggs",
            food_japanese: "味付けたまご",
            price: "1.5",
            img_url: "./img/3927_s.png",
        },
        {
            type: "Drinks",
            food_name: "Mineral Water",
            food_japanese: "",
            price: "0.5",
            img_url: "./img/3609_s.png",
        },
        {
            type: "Drinks",
            food_name: "Sparkling Water",
            food_japanese: "",
            price: "0.8",
            img_url: "./img/3564_s.png",
        },
        {
            type: "Drinks",
            food_name: "Grape Vinegar Drink",
            food_japanese: "",
            price: "0.8",
            img_url: "./img/3610_s.png",
        },
        {
            type: "Drinks",
            food_name: "Apple Vinegar Drink",
            food_japanese: "",
            price: "0.8",
            img_url: "./img/3611_s.png",
        },
        {
            type: "Drinks",
            food_name: "Lactic Acid Drink",
            food_japanese: "",
            price: "1.2",
            img_url: "./img/3566_s.png",
        },
        {
            type: "Drinks",
            food_name: "Oolong Tea",
            food_japanese: "",
            price: "1",
            img_url: "./img/3612_s.png",
        },
        {
            type: "BENTO BOX",
            food_name: "Sushi Bento Box #1",
            food_japanese: "寿司セット1",
            price: "4.5",
            img_url: "./img/3558_s.png",
        },
        {
            type: "BENTO BOX",
            food_name: "Sushi Bento Box #2",
            food_japanese: "寿司セット2",
            price: "4.5",
            img_url: "./img/3559_s.png",
        },
        {
            type: "BENTO BOX",
            food_name: "Sushi Bento Box #3",
            food_japanese: "デラックスセット",
            price: "16.5",
            img_url: "../img/3560_s.png",
        },
    ];
    const addOrderData = (data) => {
        const findData = orderData.find((u) => u.food_name === data.food_name);
        if (findData === undefined) {
            let setData = { ...data, count: 1 };
            setOrderData((prevState) => {
                return [...prevState, { ...setData }];
            });
        } else {
            findData.count++;
            setOrderData((prevState) => {
                return [...prevState];
            });
        }
    };
    const minusOrderData = (data) => {
        const findData = orderData.find((u) => u.food_name === data.food_name);
        findData.count--;
        setOrderData((prevState) => {
            return [...prevState];
        });
        findData.count <= 0 && deleteOrderData(data);
    };
    const deleteOrderData = (data) => {
        setOrderData(
            orderData.filter(
                (orderdata) => orderdata.food_name !== data.food_name
            )
        );
    };
    const switchPage = (isTurnOn) => {
        isTurnOn
            ? gsap.to(orderListRef.current, { duration: 0.5, left: 0 })
            : gsap.to(orderListRef.current, { duration: 0.5, left: "150%" });
    };
    const switchMap = (isTurnOn) =>{
        if(isTurnOn){
            gsap.timeline().to('.list', 1, {left: "-150%"}, 0)
            .to('.cover', 0.1, {opacity: "1"}, 0.5)
            .to('.cover', 1, {left: "-150%"}, 0.5)
            .to('.map-container', 1, {left: "0%", opacity: 1}, 1)
            .to('.cover', 1, {opacity: "0"}, 1)
            .to('.cover', 1, {left: "100%"}, 2)
        }else{
            gsap.timeline().to('.map-container', 1, {left: "150%"}, 0)
            .to('.cover', 0.1, {opacity: "1"}, 0.5)
            .to('.cover', 1, {left: "-100%"}, 0.5)
            .to('.list', 1, {left: "0%", opacity: 1}, 1)
            .to('.cover', 1, {opacity: "0"}, 1)
            .to('.cover', 1, {left: "100%"}, 2)
        }
    }
    const switchSuccess= () =>{
        gsap.timeline().to('.map-container', 1, {left: "-150%"}, 0)
            .to('.cover', 0.1, {opacity: "1"}, 0.5)
            .to('.cover', 1, {left: "-150%"}, 0.5)
            .to('.success-container', 1, {left: "0%", opacity: 1, onComplete:()=>{
                endOrder()
                reset()
            }}, 1)
    }
    const reset = () =>{
        setMenuChoosing("Nigiri")
        setOrderData([])
        setPrice({
            SUBTOTAL: "",
            TAX: "",
            DISCOUNT: "",
            TOTAL: "",
        })
        setTransports("Delivery")
    }

    return (
        <div className="menu-container" ref={menuRef}>
            <div className="cover"></div>
            <div className="list" >
                <div>
                    <div className="menu-list" ref={menuListRef}>
                        <div>
                            <div>
                                <div className="logo">
                                    <div>CHEYU's</div>
                                    <div>MENU</div>
                                </div>
                                <div
                                    className="shop-icon"
                                    onClick={() => switchPage(true)}
                                ></div>
                            </div>
                            <div className="type">
                                <div
                                    className={
                                        menuChoosing === "Nigiri"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setMenuChoosing("Nigiri")}
                                >
                                    Nigiri
                                </div>
                                <div
                                    className={
                                        menuChoosing === "Gunkan"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setMenuChoosing("Gunkan")}
                                >
                                    Gunkan
                                </div>
                                <div
                                    className={
                                        menuChoosing === "Drinks"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setMenuChoosing("Drinks")}
                                >
                                    Drinks
                                </div>
                                <div
                                    className={
                                        menuChoosing === "BENTO BOX"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setMenuChoosing("BENTO BOX")}
                                >
                                    BENTO BOX
                                </div>
                            </div>
                        </div>
                        <div ref={itemRef}>
                            {menuList.map(
                                (element, index) =>
                                    element.type === menuChoosing && (
                                        <Item
                                            key={index}
                                            data={element}
                                            onAddData={addOrderData}
                                        />
                                    )
                            )}
                        </div>
                    </div>
                    <div className="order-list" ref={orderListRef}>
                        <div>
                            <div className="title">YOU ORDER</div>
                            <div
                                className="list-icon"
                                onClick={() => switchPage(false)}
                            ></div>
                        </div>
                        <div className="transports">
                            <div
                                className={
                                    transports === "Delivery" ? "active" : ""
                                }
                                onClick={() => setTransports("Delivery")}
                            >
                                Delivery
                            </div>
                            <div
                                className={
                                    transports === "Pick up" ? "active" : ""
                                }
                                onClick={() => setTransports("Pick up")}
                            >
                                Pick up
                            </div>
                        </div>
                        <hr></hr>
                        {orderData.length === 0 ? (
                            <div className="tooltip">
                                <div>
                                    You cart is empty. Select from the menu to
                                    start an order.
                                </div>
                            </div>
                        ) : (
                            <div className="order-items">
                                {orderData.map((element, index) => (
                                    <OrderItem
                                        key={index}
                                        data={element}
                                        onAddClick={addOrderData}
                                        onMinusClick={minusOrderData}
                                        onDeleteClick={deleteOrderData}
                                    />
                                ))}
                            </div>
                        )}
                        <div
                            className="price"
                            style={
                                orderData.length === 0
                                    ? { display: "none" }
                                    : {}
                            }
                        >
                            <div>
                                <div>SUBTOTAL</div>
                                <div>${price.SUBTOTAL}</div>
                            </div>
                            <div>
                                <div>TAX</div>
                                <div>${price.TAX}</div>
                            </div>
                            {transports === "Delivery" ? (
                                <div>
                                    <div>DELIVERY</div>
                                    <div>FREE</div>
                                </div>
                            ) : (
                                ""
                            )}

                            <div>
                                <div>
                                    DISCOUNT{" "}
                                    {transports === "Delivery" ? "5%" : "7%"}
                                </div>
                                <div>- ${price.DISCOUNT}</div>
                            </div>

                            <hr></hr>
                            <div>
                                <div>TOTAL</div>
                                <div>${price.TOTAL}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btns-container">
                    <div onClick={()=>{endOrder(); reset()}}>BACK TO HOME</div>
                    <div className={orderData.length === 0 ? "disable" : ""} onClick={()=>{switchMap(true)}}>
                        TO CHECKOUT
                    </div>
                </div>
            </div>
            
            <Map price={price} switchMap={switchMap} switchSuccess={switchSuccess}/>
            
            <SuccessPage />
        </div>
    );
};

export default MenuList;
