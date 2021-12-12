import React, { useState, useEffect } from "react";
import "../style/map.scss";
import Axios from "axios";
import GoogleMapReact from "google-map-react";
import PopEdit from "./PopEdit";
import PopEditPay from "./PopEditPay";
const Map = ({ price, switchMap, switchSuccess }) => {
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [street, setStreet] = useState("");
    const [randomNumber, setRandomNumber] = useState("");
    const [card, setCard] = useState({
        isCash: false,
        number: "**** **** **** 1242",
        date: "01/01",
        code: "123",
    });
    const [hasLocation, setHasLoaction] = useState(false);
    const [editMap, setEditMap] = useState(false);
    const [editPay, setEditPay] = useState(false);
    useEffect(() => {
        CheckLocation()
            .then((res) => {
                setCoordinates(res);
                Geocodelatlng(res);
            })
            .catch((err) => {
                setHasLoaction(false);
            });
        setRandomNumber(random());
    }, []);

    const CheckLocation = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                });
            } else {
                reject("Not Have Loaction");
            }
        });
    };
    const Geocodelatlng = ({ lat, lng }) => {
        Axios(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDYVrwktD2gl-lodOon-ZTn3nliSkaReEg`
        )
            .then((res) => {
                setStreet(res.data.results[0].formatted_address);
                setHasLoaction(true);
            })
            .catch((err) => {
                console.log("CoverToAddress ", err);
                setHasLoaction(false);
            });
    };
    const GeocodeAddress = (address) => {
        Axios(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDYVrwktD2gl-lodOon-ZTn3nliSkaReEg`
        )
            .then((res) => {
                setCoordinates(res.data.results[0].geometry.location);
            })
            .catch((err) => {
                console.log("CoverToLatLng ", err);
            });
    };
    const CheckLoactionClick = () => {
        CheckLocation()
            .then((res) => {
                setCoordinates(res);
                Geocodelatlng(res);
            })
            .catch((err) => {
                setHasLoaction(false);
            });
    };
    const SaveAndGeocodeAddress = (address) => {
        GeocodeAddress(address);
        setStreet(address);
    };

    const Marker = (props) => {
        return (
            <>
                <div className="pin"></div>
            </>
        );
    };
    const random = () => {
        return Math.floor(Math.random() * 20000);
    };
    return (
        <div className="map-container">
            <div>
                {!editMap ? (
                    ""
                ) : (
                    <PopEdit
                        street={street}
                        onSave={SaveAndGeocodeAddress}
                        onClose={setEditMap}
                    />
                )}
                {!editPay ? (
                    ""
                ) : (
                    <PopEditPay
                        card={card}
                        setCard={setCard}
                        onClose={setEditPay}
                    />
                )}

                <div className="title">CHECKOUT</div>
                <div className="details">
                    <div>
                        <div>DELVERY DETAILS</div>

                        <div>
                            <div className="font-red">guest {randomNumber}</div>
                            <div className="font-style">{street}</div>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setEditMap(true);
                        }}
                    >
                        EDIT
                    </div>
                </div>
                <div className="map">
                    {hasLocation ? (
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: "AIzaSyDYVrwktD2gl-lodOon-ZTn3nliSkaReEg",
                            }}
                            center={coordinates}
                            defaultZoom={16}
                        >
                            <Marker
                                lat={coordinates.lat}
                                lng={coordinates.lng}
                            />
                        </GoogleMapReact>
                    ) : (
                        <div className="err">
                            <div>Browser doesn't support Geolocation</div>
                            <div onClick={CheckLoactionClick}>Try Again</div>
                        </div>
                    )}
                </div>
                <div className="details">
                    <div>
                        <div>PAYMENT METHOD</div>
                        {!card.isCash ? (
                            <div>
                                <div className="font-red">
                                    {card.number}
                                    <div className="master-card"></div>
                                </div>
                                <div className="font-style">DEBIT CARD</div>
                            </div>
                        ) : (
                            <div>
                                <div className="font-style">CASH</div>
                            </div>
                        )}
                    </div>
                    <div
                        onClick={() => {
                            setEditPay(true);
                        }}
                    >
                        EDIT
                    </div>
                </div>
            </div>
            <div className="btns-containers">
                <div
                    onClick={() => {
                        switchMap(false);
                    }}
                >
                    BACK TO MENU
                </div>
                <div onClick={()=>{
                    switchSuccess()
                }}>PLACE ORDER - ${price.TOTAL}</div>
            </div>
        </div>
    );
};

export default Map;
