import React, { createContext, useState, useContext, useEffect } from "react";

const PopupContext = createContext<{
	value: React.ReactNode;
	triggerPopup: (value: React.ReactNode) => void;
	clearPopup: () => void;
}>({
	value: "",
	clearPopup() {
		return;
	},
	triggerPopup(value) {
		return;
	}
});

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
	const [value, setValue] = useState<React.ReactNode>(undefined);
	const triggerPopup = (text: React.ReactNode) => setValue(text);
	const clearPopup = () => setValue("");

	return (
		<PopupContext.Provider value={{ value, triggerPopup, clearPopup }}>
			{children}
		</PopupContext.Provider>
	);
};

export const usePopup = () => useContext(PopupContext);

const Popup = () => {
	const { value, clearPopup } = usePopup();

	useEffect(() => {
		if (value) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		return () => document.body.classList.remove("overflow-hidden");
	}, [value]);
	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				clearPopup();
			}
		};

		// Add event listener when the popup is shown
		if (value) {
			window.addEventListener("keydown", handleEsc);
		}

		// Cleanup event listener to avoid memory leaks & duplicate handlers
		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, [value, clearPopup]);
	return (
		<div className={`popup-overlay ${value ? "" : "disabled"}`}>
			<div className={`popup-content ${value ? "" : "disabled"}`}>
				<button
					className="popup-close-button text-base"
					onClick={clearPopup}>
					بستن
				</button>
				{value}
			</div>
		</div>
	);
};

export default Popup;
