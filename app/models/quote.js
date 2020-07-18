export default class Quote {
    constructor(data) {
        this.quote = data.body
        this.author = data.author
    }


    get Template() {
        return /*html*/ `
        <div class="row fixed-bottom justify-content-center">
			<div class="col-6 text-center text-light text-shadow">
				<h4>"${this.quote}"</h4>
				<p>-${this.author}</p>
			</div>
		</div>`


    }
}