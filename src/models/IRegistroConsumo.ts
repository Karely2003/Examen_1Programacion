import { IUsuario } from "./IUsuario";
import { IDispositivoElectrico } from "./IDispositivoElectrico";

export interface IRegistroConsumo {
    usuario: IUsuario;
    dispositivo: IDispositivoElectrico;
    fecha: Date;

    calcularConsumo(): number;
}
