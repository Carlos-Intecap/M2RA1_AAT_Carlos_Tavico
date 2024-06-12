const txtSalario = document.getElementById("txt_salario") as HTMLInputElement;
const txtBonificacion = document.getElementById("txt_bonificacion") as HTMLInputElement;
const txtComisiones = document.getElementById("txt_comisiones") as HTMLInputElement;
const txtAhorro = document.getElementById("txt_ahorro") as HTMLInputElement;
const txtIGSS = document.getElementById("txt_IGSS") as HTMLInputElement;
const txtPrestamos = document.getElementById("txt_prestamos") as HTMLInputElement;
const pTotalIngresos = document.getElementById("totalIngresos") as HTMLElement;
const pTotalEgresos = document.getElementById("totalEgresos") as HTMLElement;
const pTotalSalario = document.getElementById("totalSalario") as HTMLElement;

class SueldoLiquido {
    //Atributos
    private totalGanado:number = 0;
    private totalDescuentos:number = 0;
    private sueldoLiquido:number = 0;
    private resultado:number[] = [];
    //Métodos
    public totalSueldo(cant:number[]) {
        this.totalGanado = cant[0]+cant[1]+cant[2];
            this.totalDescuentos = cant[3]+cant[4]+cant[5];
            this.sueldoLiquido = this.totalGanado-this.totalDescuentos;
            this.resultado[0]=this.totalGanado;
            this.resultado[1]=this.totalDescuentos;
            this.resultado[2]=this.sueldoLiquido;
            return this.resultado
    }
}

const sueldoLiquido = new SueldoLiquido();

function obtenerIGSS(){
    txtIGSS.value = (parseFloat(txtSalario.value)*0.0483).toFixed(2);
}

function obtenerSueldo(){
    let datos:number[]=[
        parseFloat(txtSalario.value),
        parseFloat(txtBonificacion.value),
        parseFloat(txtComisiones.value),
        parseFloat(txtAhorro.value),
        parseFloat(txtIGSS.value),
        parseFloat(txtPrestamos.value)
    ]
    
    if(datos[0]&&datos[1]&&datos[2]&&datos[3]&&datos[4]&&datos[5]){
        let sueldos:number[] = [];
        sueldos = sueldoLiquido.totalSueldo(datos);
        pTotalIngresos.innerHTML="Q."+sueldos[0].toFixed(2);
        pTotalEgresos.innerHTML="Q."+sueldos[1].toFixed(2);
        pTotalSalario.innerHTML="Q."+sueldos[2].toFixed(2);
    } else {
        alert("Debes llenar todos los campos")
    }
}