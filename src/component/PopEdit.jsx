import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
const PopEdit = ({ street, onSave, onClose }) => {
    const [autoCompleteValue, setAutoCompleteValue] = useState("");
    const autoCompleteRef = useRef(null);
    useEffect(() => {
        setAutoCompleteValue(street);
        openEdit()
    }, []);
    useEffect(() => {
        new window.google.maps.places.Autocomplete(autoCompleteRef.current, {
            componentRestrictions: { country: "tw" },
        })
    }, [autoCompleteValue]);
    const openEdit = () =>{
        gsap.timeline({
            ease: "Power0.easeNone",
        })
            .from(".pop-message", 0.5, {
                opacity: 0,
                y: 100,
            })
    }
    const closeEdit = () =>{
        gsap.timeline({
            ease: "Power0.easeNone",
        })
            .to(".pop-message", 0.5, {
                opacity: 0,
                y: 100,
                onComplete:()=>{
                    onClose(false)
                }
            })
    }

    return (
        <div className="pop-message">
            <div>
                <input
                    ref={autoCompleteRef}
                    value={autoCompleteValue}
                    onChange={(e) => {setAutoCompleteValue(e.target.value);}}
                    onClick={(e)=>{setAutoCompleteValue(e.target.value);}}
                />
            </div>
            <div className="btns">
                <div onClick={()=>{closeEdit();onSave(autoCompleteRef.current.value)}}>SAVE</div>
                <div onClick={()=>{closeEdit();}}>CLOSE</div>
            </div>
        </div>
    );
};

export default PopEdit;
