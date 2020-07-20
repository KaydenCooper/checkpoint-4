export default class Weather {
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin
    this.city = data.name
    this.kelvin = data.main.temp
    this.humidity = data.main.humidity
    if (data.wind) {
      this.wind = data.wind.speed || "undefined"
    }
  }

  get Template() {
    return /*html*/`
    <div class="row px-4">
			<div class="card shadow-lg bg-secondary text-light col-2 m-3 pt-2 px-1">
          <h4 class ="text-center"><u>${this.city}</u></h4>
            <p class="mb-1"><b>Temp:</b> ${this.kelvin}K</p>
            <p class="mb-1"><b>Humidity:</b> ${this.humidity}%</p>
            <p class="mb-1"><b>Wind:</b> ${this.wind}</p>
			</div>
		</div>
   
   
   
   
    `
  }


}