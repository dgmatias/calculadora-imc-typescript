class Calculadora {

    pesoInput: HTMLInputElement;
    alturaInput: HTMLInputElement;

    pesoValue: number;
    alturaValue: number;
    imcValue: number;

    imcSpan: HTMLSpanElement;
    classificacaoSpan: HTMLSpanElement;

    calcContainer: HTMLDivElement;
    resultadoContainer: HTMLDivElement;
    
    form: HTMLFormElement;
    calcButton: HTMLButtonElement;
    limparButton: HTMLButtonElement;
    voltarButton: HTMLButtonElement;

    calc():void {
        
        this.pesoInput = document.querySelector('.pesoInput');
        this.alturaInput = document.querySelector('.alturaInput');

        this.calcContainer = document.querySelector('.calc-container');
        this.resultadoContainer = document.querySelector('.resultado-container');
        
        this.imcSpan = document.querySelector(".imc-span");
        this.classificacaoSpan = document.querySelector(".classificacao-span");

        this.form = document.querySelector('.form');
        this.calcButton = document.querySelector(".calc-button");
        
        this.form.addEventListener("submit", (event)=>{
            event.preventDefault();
        
            this.calcButton.addEventListener("click", ()=>{

                this.calcContainer.classList.toggle("hide");
                this.resultadoContainer.classList.toggle("hide");

                this.pesoValue = this.pesoInput.valueAsNumber;
                this.alturaValue = this.alturaInput.valueAsNumber;
                this.imcValue = this.pesoValue / (this.alturaValue * this.alturaValue)
                
                // console.log(`Peso:${this.pesoValue} Altura:${this.alturaValue} IMC: ${this.imcValue}`);

                
                this.imcSpan.innerHTML = `${this.imcValue.toFixed(1)}`
                this.classificar();

            })

        })



    }

    limpar():void {
        
        this.pesoInput = document.querySelector(".pesoInput");
        this.alturaInput = document.querySelector(".alturaInput");
        this.limparButton = document.querySelector(".limpar-button");

        this.limparButton.addEventListener("click", ()=>{
            this.pesoInput.value = " ";
            this.alturaInput.value = " ";
        })
    }

    classificar():void {

        this.classificacaoSpan = document.querySelector(".classificacao-span");

        // console.log(this.imcValue);

        switch(true) {

            case this.imcValue < 18.5:
                this.classificacaoSpan.innerHTML = "Magreza";
                this.imcSpan.classList.add("magreza");
                this.classificacaoSpan.classList.add("magreza");
                break
            case this.imcValue <= 24.9:
                this.classificacaoSpan.innerHTML = "Normal";
                this.imcSpan.classList.add("normal");
                this.classificacaoSpan.classList.add("normal");
                break
            case this.imcValue <= 29.9:
                this.classificacaoSpan.innerHTML = "sobrepeso";
                this.imcSpan.classList.add("sobrepeso");
                this.classificacaoSpan.classList.add("sobrepeso");
                break
            case this.imcValue <= 39.9:
                this.classificacaoSpan.innerHTML = "Obesidade";
                this.imcSpan.classList.add("obesidade");
                this.classificacaoSpan.classList.add("obesidade");
                break
            default:
                this.classificacaoSpan.innerHTML = "Obesidade mórbida";
                this.imcSpan.classList.add("grave");
                this.classificacaoSpan.classList.add("grave");
                break
        }

        
    }

    voltar():void {

        this.voltarButton = document.querySelector(".voltar-button");

        this.voltarButton.addEventListener("click", ()=>{
            // console.log("voltar");
            this.calcContainer.classList.toggle("hide");
            this.resultadoContainer.classList.toggle("hide");
        })
    }

}

let calculadora = new Calculadora;
calculadora.calc();
calculadora.limpar();
calculadora.voltar();