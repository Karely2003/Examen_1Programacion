import { IDispositivoElectrico } from "./IDispositivoElectrico";

export class DispositivoInstalado implements IDispositivoElectrico {
    id: number;
    nombre: string;
    categoria: string;
    consumoWhPorHora: number;
    ubicacion: string;
    horasUsoDiario: number;

    constructor(id: number, nombre: string, categoria: string, consumoWhPorHora: number, ubicacion: string, horasUsoDiario: number) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.consumoWhPorHora = consumoWhPorHora;
        this.ubicacion = ubicacion;
        this.horasUsoDiario = horasUsoDiario;
    }

    calcularConsumoDiario(): number {
        return this.consumoWhPorHora * this.horasUsoDiario;
    }
}
