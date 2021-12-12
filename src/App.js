import React, { useRef, useEffect, useState } from "react";
import Model from "./component/Model";
import Header from "./component/Header";
import OrderBtn from "./component/OrderBtn";
import MenuList from "./component/MenuList";
import gsap from "gsap";
const App = () => {
	const headerRef = useRef();
	const orbitRef = useRef();
	const cameraRef = useRef();
	const modelRef = useRef();
	const startBtnRef = useRef();
	const menuRef = useRef();
	const useWindowSize = () => {
		const [windowSize, setWindowSize] = useState({
			width: undefined,
			height: undefined,
		});
		useEffect(() => {
			const handleResize = () => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			};
			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		}, []);
		return windowSize;
	};

	const size = useWindowSize();

	const startOrder = () => {
		orbitRef.current.minDistance = 0;
		orbitRef.current.autoRotate = false;
		cameraRef.current.position.set(10, 6, 20);

		let curtainMat, door;
		modelRef.current.traverse((node) => {
			if (node.name === "blinds_Material_#0_0") {
				curtainMat = node.material.clone();
				curtainMat.transparent = true;
				curtainMat.opacity = 1;
				node.material = curtainMat;
			} else if (node.name === "Box017_Material_#186_0") {
				door = node;
			}
		});
		let timeline = gsap.timeline({
			defaults: {
				duration: 1,
				ease: "Power1.easeInOut",
			},
		})
			.to(headerRef.current, { y: -200 }, 0)
			.to('.list', { left: "0%" }, 0)
			.to('.map-container', { left: "150%" }, 0)
			.to('.success-container', { left: "150%" }, 0)
			.to(headerRef.current, { y: -200 }, 0)
			.to(startBtnRef.current, { y: 200 }, 0)
			.to(cameraRef.current.position, { x: 3 }, 0)
			.to(
				orbitRef.current.target,
				{
					x: 3,
					onUpdate: () => {
						orbitRef.current.update();
					},
				},
				0
			)
			.to(cameraRef.current.position, { y: 1.65 }, 1)
			.to(
				orbitRef.current.target,
				{
					y: 1.65,
					onUpdate: () => {
						orbitRef.current.update();
					},
				},
				1
			)
			.to(cameraRef.current.position, { duration: 2, z: 0 }, 2)
			.to(curtainMat, { opacity: 0 }, 2.3)
			.to(door.position, { x: 100 }, 2.7)
			.to(
				orbitRef.current.target,
				{
					duration: 2,
					z: -2,
					onUpdate: () => {
						orbitRef.current.update();
					},
				},
				2
			)
			.to(
				orbitRef.current.target,
				{
					x: 0,
					onUpdate: () => {
						orbitRef.current.update();
					},
					onComplete: () => {
						orbitRef.current.enabled = false;
					},
				},
				4
			)
			.to(menuRef.current, 1, { border: "1" }, 5)
			.to(menuRef.current, 1, { height: "95%" }, 5)
			.to(menuRef.current, 1, { width: "93%" }, 6)
			.to(menuRef.current, 1, { border: "0" }, 6.5)
			.to(menuRef.current.children[0], 1, { opacity: 0 }, 7)
			.to(menuRef.current.children[1], 1, { opacity: 1, }, 7)
			.to(menuRef.current.children[0], 0.1, { left: "100%" }, 8)
			.to(menuRef.current.children[0], 0.1, { opacity: 1 }, 8.1);

		timeline.play()
	};

	const endOrder = () => {
		let curtainMat, door;
		modelRef.current.traverse((node) => {
			if (node.name === "blinds_Material_#0_0") {
				curtainMat = node.material.clone();
				curtainMat.transparent = true;
				curtainMat.opacity = 1;
				node.material = curtainMat;
			} else if (node.name === "Box017_Material_#186_0") {
				door = node;
			}
		});
		gsap.timeline({
			defaults: {
				duration: 1,
				ease: "Power1.easeInOut",
			},
		})
			.to(menuRef.current.children[0], 0.1, { opacity: 0 }, 0)
			.to(menuRef.current.children[0], 0.1, { left: "0%" }, 0.1)
			.to(menuRef.current.children[0], 1, { opacity: 1 }, 0.3)
			.to(menuRef.current, 1, { border: "1" }, 0)
			.to(menuRef.current, 1, { width: "0%" }, 1)
			.to(menuRef.current, 1, { height: "0%" }, 2)
			.to(menuRef.current, 1, { border: "0" }, 2.5)
			.to(
				orbitRef.current.target,
				1,
				{
					z: -5,
					x: 3,
					onUpdate: () => {
						orbitRef.current.update();
					},
				},
				3
			)
			.to(cameraRef.current.position, 1, { z: 15 }, 4)
			.to(
				orbitRef.current.target,
				1,
				{
					z: 0,
					onUpdate: () => {
						orbitRef.current.update();
					},
				},
				4
			)
			.to(cameraRef.current.position, { y: 6 }, 5)
			.to(
				orbitRef.current.target,
				{
					y: 3,
					onUpdate: () => {
						orbitRef.current.update();
					},
				},
				5
			)
			.to(door.position, { x: 0 }, 5.5)
			.to(curtainMat, { opacity: 1 }, 5.7)
			.to(cameraRef.current.position, { x: 10 }, 6)
			.to(
				orbitRef.current.target,
				{
					x: 0,
					onUpdate: () => {
						orbitRef.current.update();
					},
					onComplete: () => {
						orbitRef.current.minDistance = 10;
						orbitRef.current.enabled = true;
					}
				},
				6
			)
			.to(startBtnRef.current, { y: 0 }, 7)
			.to(headerRef.current, { y: 0 }, 7)

	}


	return (
		<div style={{ height: size.height + "px" }}>
			<Header childRef={headerRef} startOrder={startOrder} />
			<div className="model-container">
				<Model
					orbitRef={orbitRef}
					cameraRef={cameraRef}
					modelRef={modelRef}
				/>
			</div>
			<OrderBtn startBtnRef={startBtnRef} onclick={startOrder} />
			<MenuList menuRef={menuRef} endOrder={endOrder} />
		</div>
	);
};

export default App;
