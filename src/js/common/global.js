// --------------------- 
// Target element for body lock
let targetElement

export const getTargetElement = () => targetElement
export const setTargetElement = element => targetElement = element   // Getter && setter for body lock
//--------------------- 

// --------------------- 
// Helper function for recalculating dropdown height.
export const reCalculateDropdownHeight = (dropdown, open, inner) => {
	const dropdownOpen = dropdown.querySelector(open),
		dropdownInner = dropdown.querySelector(inner)

	if (!dropdownOpen || !dropdownInner) return

	dropdownOpen.style.height = `${dropdownInner.getBoundingClientRect().height}px`
}
//--------------------- 