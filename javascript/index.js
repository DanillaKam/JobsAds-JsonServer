const categoriesWindow = document.querySelector('#categories-window')
const jobsList = document.querySelector('#job-ads-list')
const upCircleBtn = document.querySelector('#circle-up-btn')
const clearBtn = document.querySelector('#clear-btn')

let userCaregoriesChosen = []

////////////////////////////////////////////////////////
/// chceck a scroll to set position of arrow        ///
/// if user is on top of screen arrow if hide      ///
/////////////////////////////////////////////////////
window.addEventListener('scroll', () => {
	if (scrollY > 200) {
		upCircleBtn.style.display = 'block'
	} else if (screenY < 200) {
		upCircleBtn.style.display = 'none'
	}
})

/////////////////////////////////////////////////////////////////////////////////////////////////
///  function to a check content of categories array									   /////
///  when array isnt empty function show a window with categories tiles				      /////
///  and set a correct height of a list window depending on the width of browser		 /////
///  window																			    /////
////////////////////////////////////////////////////////////////////////////////////////////
const showHideWindow = () => {
	if (userCaregoriesChosen.length == 0) {
		categories.classList.add('hide')
		jobsList.style.height = '3200px'
		if (window.innerWidth >= 768) {
			jobsList.style.height = '2200px'
		}
	} else {
		categories.classList.remove('hide')
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////  function to filter active ads according the user sellection. When user just clear all categories from   ///
//// 	window, function will show all ads at page without filtering                                         ///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ShowHideAds = () => {
	let ads = document.querySelectorAll('.job-ad')
	ads.forEach(ad => {
		const tools = ad.querySelectorAll('.tool')
		let toolsNames = new Array()
		for (let tool of tools) {
			const toolText = tool.innerText
			toolsNames.push(toolText)
		}
		const categoryCheck = currentValue => toolsNames.includes(currentValue)
		if (userCaregoriesChosen.every(categoryCheck)) {
			ad.classList.remove('hide')
			ad.classList.add('active')
		} else {
			ad.classList.add('hide')
			ad.classList.remove('active')
		}
	})
	setWindowHeight()
}
/////////////////////////////////////////////////////
///   function to set a optimal window height   ////
///////////////////////////////////////////////////
const setWindowHeight = () => {
	const activeAds = document.querySelectorAll('.active')
	if (userCaregoriesChosen.length > 0) {
		const jobsListHeightMobile = activeAds.length * 300 + 300
		jobsList.style.height = jobsListHeightMobile + 'px'
		if (window.innerWidth >= 768) {
			const jobsListHeightDesktop = activeAds.length * 200 + 300
			jobsList.style.height = jobsListHeightDesktop + 'px'
		}
	}
}
///////////////////////////////////////////////////////////////////////////////////////
///   function to clear all content from categories window                        ///
////////////////////////////////////////////////////////////////////////////////////
const clearChoseWindow = () => {
	clearBtn.addEventListener('click', () => {
		userCaregoriesChosen.length = 0
		const userChoses = document.querySelectorAll('.categories-container')
		for (let chose of userChoses) {
			chose.remove()
		}
		showHideWindow()
		ShowHideAds()
	})
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  function to listen a click on a x-icon beloning to category tile. 										////
//  when user click a xbutton value from this tile  will be deleted from array userCaregoriesChosen 	   ////
//  and in next step whole category container will be deleted from the categories window.				  ////
//  when user delete all of categories tile window will be closed										 ////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteUserChose = () => {
	const containerCategories = document.querySelector('.categories-container')
	containerCategories.addEventListener('click', e => {
		const name = containerCategories.querySelector('p').innerText
		const nameText = element => element == name
		if (e.target.tagName === 'BUTTON') {
			const nameIndex = userCaregoriesChosen.findIndex(nameText)
			userCaregoriesChosen.splice(nameIndex, 1)
			containerCategories.remove()
			if (userCaregoriesChosen.length == 0) {
				showHideWindow()
			}

			ShowHideAds()
		}
	})
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  take a value of button categories and assign                                                        ///
//  to array. if array is not empty function show a special window with all							   ///
//  chosen categories																			      ///
//  this function create a divs with a categories buttons                                            ///
///////////////////////////////////////////////////////////////////////////////////////////////////////
const takeUserChoise = () => {
	const tools = document.querySelectorAll('.tools')
	tools.forEach(tool => {
		tool.addEventListener('click', e => {
			if (e.target.tagName === 'BUTTON') {
				if (userCaregoriesChosen.includes(e.target.textContent) == false) {
					scroll({
						top: 0,
						behavior: 'smooth',
					})
					userCaregoriesChosen.push(e.target.textContent)
					let text = e.target.textContent
					categoriesWindow.insertAdjacentHTML(
						'afterbegin',
						`<div class="categories-container">
						<p class="category-name">${text}</p>
						<button class="x-icon"></button>
					  </div>`
					)

					deleteUserChose()

					showHideWindow()
					ShowHideAds()
				}
			}
		})
	})
}
