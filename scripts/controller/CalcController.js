class CalcController  {

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._DateEl = document.querySelector("#data");
        this._TimeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize(){
        this.setDisplayDateTime();
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year:"numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){
         return this._TimeEl.innerHTML;
    }

    set displayTime(value){
         this._TimeEl.innerHTML = value;
    }

    get displayDate(){
        return this._DateEl.innerHTML;
    }

    set displayDate(value){
        this._DateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;    
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}