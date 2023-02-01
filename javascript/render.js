const container = document.querySelector('.container')

let template = ''
let spanLanguage = ''
let attributs = ''
let featuredStatus = ''

////////////////////////////////////////////////////////////////////////////////////////
// Async function to render all posts from data.json with use only one template     ///
//////////////////////////////////////////////////////////////////////////////////////
const renderPosts = async () => {
	let url = 'http://localhost:3000/jobsAds'

	const res = await fetch(url)
	const posts = await res.json()

	await posts.forEach(post => {
		////////////////////////////////////////////////////////////////////////////////
		//  Block to check NEW and FEATURED attributes                               //
		//  When 'if' found a attributes, assign a value to the correct variable    //
		/////////////////////////////////////////////////////////////////////////////
		if (post.new == true && post.featured == true) {
			attributs = `
      <div class="atributes">
          <span class="new-span">
            <p>New!</p>
          </span>
          <span class="featured-span">
            <p>Featured</p>
          </span>
      </div>`
			featuredStatus = 'featured'
		} else if (post.new == true) {
			attributs = `
      <div class="atributes">
        <span class="new-span">
          <p>New!</p>
        </span>
      </div>`
			featuredStatus = ''
		} else if (post.featured == true) {
			attributs = `  
      <div class="atributes">
          <span class="featured-span">
            <p>Featured</p>
          </span>
      </div>`
			featuredStatus = 'featured'
		} else {
			attributs = ``
			featuredStatus = ''
		}
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Block to get a each of a value from object's LANGUAGES and TOOLS                                         //
		// Loop 'for' take a each of value and assign to a span , when loop take all of value from  array         //
		// variable spanLanguage and spanTolls just reset to prevent impose values of next objext from data.json //
		//////////////////////////////////////////////////////////////////////////////////////////////////////////
		let languages = post.languages.values()
		spanLanguage = ''
		for (let language of languages) {
			if (languages == undefined) {
				break
			} else {
				spanLanguage += `<button class="tool">${language}</button>`
			}
		}

		let tools = post.tools.values()
		spanTools = ''
		for (let tool of tools) {
			if (tools == undefined) {
				break
			} else {
				spanTools += `<button class="tool">${tool}</button>`
			}
		}
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Block to print a final version of job ad.                                                              //
		///////////////////////////////////////////////////////////////////////////////////////////////////////////
		template += `
        <div /   /class="job-ad ${featuredStatus}">
        <div class="logo">
            <img src="${post.logo}" alt="logo firmy ${post.company}">
          </div>
          <div class="information">
            <div class="company-name">
              <p>${post.company}</p>
            </div>
              ${attributs}
            <div class="position">
              <h3>${post.position}</h3>
            </div>
            <div class="additional-info">
              <p class="posted-at">${post.postedAt}</p>
              <p class="contract">${post.contract}</p>
              <p class="location">${post.location}</p>
            </div>
        </div>
        <hr>
          <div class="tools">
          ${spanLanguage}
          ${spanTools}
          </div>
        </div>
        `
		container.innerHTML = template
	})
	takeUserChoise()
	clearChoseWindow()
}

window.addEventListener('DOMContentLoaded', () => renderPosts())

// paste this to console
// json-server --watch data/data.json
//
