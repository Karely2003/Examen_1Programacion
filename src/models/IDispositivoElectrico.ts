export interface IDispositivoElectrico {
    id: number;
    nombre: string;
    categoria: string;
    consumoWhPorHora: number;
    ubicacion: string;
    horasUsoDiario: number;

    calcularConsumoDiario(): number;
}
