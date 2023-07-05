var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.calc = function () {
        var _this = this;
        this.pesoInput = document.querySelector('.pesoInput');
        this.alturaInput = document.querySelector('.alturaInput');
        this.calcContainer = document.querySelector('.calc-container');
        this.resultadoContainer = document.querySelector('.resultado-container');
        this.imcSpan = document.querySelector(".imc-span");
        this.classificacaoSpan = document.querySelector(".classificacao-span");
        this.form = document.querySelector('.form');
        this.calcButton = document.querySelector(".calc-button");
        this.form.addEventListener("submit", function (event) {
            event.preventDefault();
            _this.calcButton.addEventListener("click", function () {
                _this.calcContainer.classList.toggle("hide");
                _this.resultadoContainer.classList.toggle("hide");
                _this.pesoValue = _this.pesoInput.valueAsNumber;
                _this.alturaValue = _this.alturaInput.valueAsNumber;
                _this.imcValue = _this.pesoValue / (_this.alturaValue * _this.alturaValue);
                // console.log(`Peso:${this.pesoValue} Altura:${this.alturaValue} IMC: ${this.imcValue}`);
                _this.imcSpan.innerHTML = "".concat(_this.imcValue.toFixed(1));
                _this.classificar();
            });
        });
    };
    Calculadora.prototype.limpar = function () {
        var _this = this;
        this.pesoInput = document.querySelector(".pesoInput");
        this.alturaInput = document.querySelector(".alturaInput");
        this.limparButton = document.querySelector(".limpar-button");
        this.limparButton.addEventListener("click", function () {
            _this.pesoInput.value = " ";
            _this.alturaInput.value = " ";
        });
    };
    Calculadora.prototype.classificar = function () {
        this.classificacaoSpan = document.querySelector(".classificacao-span");
        // console.log(this.imcValue);
        switch (true) {
            case this.imcValue < 18.5:
                this.classificacaoSpan.innerHTML = "Magreza";
                this.imcSpan.classList.add("magreza");
                this.classificacaoSpan.classList.add("magreza");
                break;
            case this.imcValue <= 24.9:
                this.classificacaoSpan.innerHTML = "Normal";
                this.imcSpan.classList.add("normal");
                this.classificacaoSpan.classList.add("normal");
                break;
            case this.imcValue <= 29.9:
                this.classificacaoSpan.innerHTML = "sobrepeso";
                this.imcSpan.classList.add("sobrepeso");
                this.classificacaoSpan.classList.add("sobrepeso");
                break;
            case this.imcValue <= 39.9:
                this.classificacaoSpan.innerHTML = "Obesidade";
                this.imcSpan.classList.add("obesidade");
                this.classificacaoSpan.classList.add("obesidade");
                break;
            default:
                this.classificacaoSpan.innerHTML = "Obesidade mórbida";
                this.imcSpan.classList.add("grave");
                this.classificacaoSpan.classList.add("grave");
                break;
        }
    };
    Calculadora.prototype.voltar = function () {
        var _this = this;
        this.voltarButton = document.querySelector(".voltar-button");
        this.voltarButton.addEventListener("click", function () {
            // console.log("voltar");
            _this.calcContainer.classList.toggle("hide");
            _this.resultadoContainer.classList.toggle("hide");
        });
    };
    return Calculadora;
}());
var calculadora = new Calculadora;
calculadora.calc();
calculadora.limpar();
calculadora.voltar();
