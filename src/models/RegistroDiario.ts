import { IRegistroConsumo } from "./IRegistroConsumo";
import { IUsuario } from "./IUsuario";
import { IDispositivoElectrico } from "./IDispositivoElectrico";

export class RegistroDiario implements IRegistroConsumo {
    usuario: IUsuario;
    dispositivo: IDispositivoElectrico;
    fecha: Date;

    constructor(usuario: IUsuario, dispositivo: IDispositivoElectrico, fecha: Date) {
        this.usuario = usuario;
        this.dispositivo = dispositivo;
        this.fecha = fecha;
    }

    calcularConsumo(): number {
        return this.dispositivo.calcularConsumoDiario();
    }
}
