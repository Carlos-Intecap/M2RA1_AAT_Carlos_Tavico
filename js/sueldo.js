var txtSalario = document.getElementById("txt_salario");
var txtBonificacion = document.getElementById("txt_bonificacion");
var txtComisiones = document.getElementById("txt_comisiones");
var txtAhorro = document.getElementById("txt_ahorro");
var txtIGSS = document.getElementById("txt_IGSS");
var txtPrestamos = document.getElementById("txt_prestamos");
var pTotalIngresos = document.getElementById("totalIngresos");
var pTotalEgresos = document.getElementById("totalEgresos");
var pTotalSalario = document.getElementById("totalSalario");
var SueldoLiquido = /** @class */ (function () {
    function SueldoLiquido() {
        //Atributos
        this.totalGanado = 0;
        this.totalDescuentos = 0;
        this.sueldoLiquido = 0;
        this.resultado = [];
    }
    //Métodos
    SueldoLiquido.prototype.totalSueldo = function (cant) {
        this.totalGanado = cant[0] + cant[1] + cant[2];
        this.totalDescuentos = cant[3] + cant[4] + cant[5];
        this.sueldoLiquido = this.totalGanado - this.totalDescuentos;
        this.resultado[0] = this.totalGanado;
        this.resultado[1] = this.totalDescuentos;
        this.resultado[2] = this.sueldoLiquido;
        return this.resultado;
    };
    return SueldoLiquido;
}());
var sueldoLiquido = new SueldoLiquido();
function obtenerIGSS() {
    txtIGSS.value = (parseFloat(txtSalario.value) * 0.0483).toFixed(2);
}
function obtenerSueldo() {
    var datos = [
        parseFloat(txtSalario.value),
        parseFloat(txtBonificacion.value),
        parseFloat(txtComisiones.value),
        parseFloat(txtAhorro.value),
        parseFloat(txtIGSS.value),
        parseFloat(txtPrestamos.value)
    ];
    if (datos[0] && datos[1] && datos[2] && datos[3] && datos[4] && datos[5]) {
        var sueldos = [];
        sueldos = sueldoLiquido.totalSueldo(datos);
        pTotalIngresos.innerHTML = "Q." + sueldos[0].toFixed(2);
        pTotalEgresos.innerHTML = "Q." + sueldos[1].toFixed(2);
        pTotalSalario.innerHTML = "Q." + sueldos[2].toFixed(2);
    }
    else {
        alert("Debes llenar todos los campos");
    }
}
