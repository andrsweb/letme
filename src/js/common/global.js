// --------------------- 
// Target element for body lock
let targetElement

export const getTargetElement = () => targetElement
export const setTargetElement = element => targetElement = element   // Getter && setter for body lock
//--------------------- 

// --------------------- 
// Helper function for recalculating dropdown height.
export const reCalculateDropdownHeight = dropdown => {
	const dropdownOpen = dropdown.querySelector('.dropdown__open'),
		dropdownInner = dropdown.querySelector('.dropdown__inner')

	if (!dropdownOpen || !dropdownInner) return

	dropdownOpen.style.height = `${dropdownInner.getBoundingClientRect().height}px`
}
//--------------------- 