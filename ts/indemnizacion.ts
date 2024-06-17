const txtSueldo = document.getElementById("txt_sueldo") as HTMLInputElement;
const txtDias = document.getElementById("txt_dias") as HTMLInputElement;
const txtMeses = document.getElementById("txt_meses") as HTMLInputElement;
const txtCantidad = document.getElementById("txt_cantidad") as HTMLInputElement;
const txtPendiente = document.getElementById("txt_pendiente") as HTMLInputElement;
const txtDeudas = document.getElementById("txt_deudas") as HTMLInputElement;
const txtBono14 = document.getElementById("txt_bono14") as HTMLInputElement;
const txtAguinaldo = document.getElementById("txt_aguinaldo") as HTMLInputElement;
const pTotalIndemnizacion = document.getElementById("totalIndemnizacion") as HTMLElement;

class Indemnizacion {
    //Atributos
    private totalBono14:number = 0;
    private totalAguinaldo:number = 0;
    private totalIndem:number = 0;
    private resultado:number[] = [];
    //Métodos
    public totalIndemnizacion(cant:number[]) {
        this.totalBono14 = (cant[0]/12)*cant[1];
        this.totalAguinaldo = (cant[0]/12)*cant[1];
        this.totalIndem = (cant[2])+this.totalBono14+this.totalAguinaldo+cant[3]-cant[4]
        this.resultado[0]=this.totalBono14;
        this.resultado[1]=this.totalAguinaldo;
        this.resultado[2]=this.totalIndem;
        return this.resultado
    }
}

const indemnizacion = new Indemnizacion();

function calcularDias() {
    let dias:number = 0;
    let timeStart:Date = new Date((document.getElementById("txt_fecha_inicial") as HTMLInputElement).value);
    let timeEnd:Date = new Date((document.getElementById("txt_fecha_final") as HTMLInputElement).value);
    if (timeEnd > timeStart)
    {
        let diff = timeEnd.getTime() - timeStart.getTime();
        dias = Math.round(diff / (1000 * 60 * 60 * 24))+1;
        (document.getElementById("txt_dias") as HTMLInputElement).value = String(dias);
        (document.getElementById("txt_meses") as HTMLInputElement).value = String(Math.round(dias/30));
        (document.getElementById("txt_cantidad") as HTMLInputElement).value = String(Math.round(dias/365));
    }
    else if (timeEnd != null && timeEnd < timeStart) {
        alert("La fecha final debe ser mayor a la fecha inicial");
        (document.getElementById("txt_dias") as HTMLInputElement).value = String(0);
    }
}

function obtenerIndemnizacion(){
    let datos:number[]=[
        parseFloat(txtSueldo.value),
        parseFloat(txtMeses.value),
        parseFloat(txtCantidad.value),
        parseFloat(txtPendiente.value),
        parseFloat(txtDeudas.value)
    ]
    
    if(datos[0]&&datos[1]&&datos[2]&&datos[3]&&datos[4]){
        let sueldos:number[] = [];
        sueldos = indemnizacion.totalIndemnizacion(datos);
        txtBono14.value="Q."+sueldos[0].toFixed(2);
        txtAguinaldo.value="Q."+sueldos[1].toFixed(2);
        pTotalIndemnizacion.innerHTML="Q."+sueldos[2].toFixed(2);
    } else {
        alert("Debes llenar todos los campos")
    }
}