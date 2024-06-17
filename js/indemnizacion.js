var txtSueldo = document.getElementById("txt_sueldo");
var txtDias = document.getElementById("txt_dias");
var txtMeses = document.getElementById("txt_meses");
var txtCantidad = document.getElementById("txt_cantidad");
var txtPendiente = document.getElementById("txt_pendiente");
var txtDeudas = document.getElementById("txt_deudas");
var txtBono14 = document.getElementById("txt_bono14");
var txtAguinaldo = document.getElementById("txt_aguinaldo");
var pTotalIndemnizacion = document.getElementById("totalIndemnizacion");
var Indemnizacion = /** @class */ (function () {
    function Indemnizacion() {
        //Atributos
        this.totalBono14 = 0;
        this.totalAguinaldo = 0;
        this.totalIndem = 0;
        this.resultado = [];
    }
    //Métodos
    Indemnizacion.prototype.totalIndemnizacion = function (cant) {
        this.totalBono14 = (cant[0] / 12) * cant[1];
        this.totalAguinaldo = (cant[0] / 12) * cant[1];
        this.totalIndem = (cant[0] * cant[2]) + this.totalBono14 + this.totalAguinaldo + cant[3] - cant[4];
        this.resultado[0] = this.totalBono14;
        this.resultado[1] = this.totalAguinaldo;
        this.resultado[2] = this.totalIndem;
        return this.resultado;
    };
    return Indemnizacion;
}());
var indemnizacion = new Indemnizacion();
function calcularDias() {
    var dias = 0;
    var timeStart = new Date(document.getElementById("txt_fecha_inicial").value);
    var timeEnd = new Date(document.getElementById("txt_fecha_final").value);
    if (timeEnd > timeStart) {
        var diff = timeEnd.getTime() - timeStart.getTime();
        dias = Math.round(diff / (1000 * 60 * 60 * 24)) + 1;
        document.getElementById("txt_dias").value = String(dias);
        document.getElementById("txt_meses").value = String(Math.round(dias / 30));
        document.getElementById("txt_cantidad").value = String(Math.round(dias / 365));
    }
    else if (timeEnd != null && timeEnd < timeStart) {
        alert("La fecha final debe ser mayor a la fecha inicial");
        document.getElementById("txt_dias").value = String(0);
    }
}
function obtenerIndemnizacion() {
    var datos = [
        parseFloat(txtSueldo.value),
        parseFloat(txtMeses.value),
        parseFloat(txtCantidad.value),
        parseFloat(txtPendiente.value),
        parseFloat(txtDeudas.value)
    ];
    if (datos[0] && datos[1] && datos[2] && datos[3] && datos[4]) {
        var sueldos = [];
        sueldos = indemnizacion.totalIndemnizacion(datos);
        txtBono14.value = "Q." + sueldos[0].toFixed(2);
        txtAguinaldo.value = "Q." + sueldos[1].toFixed(2);
        pTotalIndemnizacion.innerHTML = "Q." + sueldos[2].toFixed(2);
    }
    else {
        alert("Debes llenar todos los campos");
    }
}
