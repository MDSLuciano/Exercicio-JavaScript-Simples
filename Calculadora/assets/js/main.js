function createCalculator() {
    return {
        displayValue: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        init() {
            this.clickButton();
            this.pressEnter();
        },

        pressEnter() {
            this.displayValue.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    this.performCalculations();
                }
            });
        },

        performCalculations(){
            let calculation = this.displayValue.value;
            try {
                calculation = eval(calculation);
                if (!calculation) {
                    throw new Error('Conta inválida');
                }
                this.displayValue.value = calculation;
            } catch (error) {
                this.displayValue.value = 'Erro';
                return;
            }
            
        },

        clearDisplay() {
            this.displayValue.value = '';
        },

        deleteOne() {
            this.displayValue.value = this.displayValue.value.slice(0, -1);
        },
        clickButton() {
            document.addEventListener('click', (event) => {
                const el = event.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.performCalculations();
                }
            });
        },

        btnForDisplay(el) {
            this.displayValue.value += el;
        }
    };
}

const calculator = createCalculator();
calculator.init();