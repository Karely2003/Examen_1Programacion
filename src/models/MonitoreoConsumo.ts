import { RegistroDiario } from "./RegistroDiario";

export class MonitoreoConsumo {
    registros: RegistroDiario[] = [];

    agregarRegistro(registro: RegistroDiario): void {
        this.registros.push(registro);
        console.log(`Se agregó el registro de consumo para ${registro.dispositivo.nombre} al registro del día ${registro.fecha.toDateString()}.`);
    }

    eliminarRegistro(nombreDispositivo: string, fecha: Date): void {
        const index = this.registros.findIndex(r =>
            r.dispositivo.nombre === nombreDispositivo && r.fecha.toDateString() === fecha.toDateString()
        );
        if (index !== -1) {
            const eliminado = this.registros.splice(index, 1)[0];
            console.log(`Se eliminó el registro de consumo para ${eliminado.dispositivo.nombre} al registro del día ${fecha.toDateString()}.`);
        } else {
            console.log(`No se encontró registro para ${nombreDispositivo} en la fecha ${fecha.toDateString()}.`);
        }
    }

    obtenerConsumoTotalDia(fecha: Date): number {
        const total = this.registros
            .filter(r => r.fecha.toDateString() === fecha.toDateString())
            .reduce((sum, r) => sum + r.calcularConsumo(), 0);

        console.log(`Total de Watts Hora consumidos en el día ${fecha.toDateString()}: ${total} Wh.`);
        return total;
    }

    obtenerConsumosDelDia(fecha: Date): void {
        console.log(`Consumos del día ${fecha.toDateString()}:`);
        this.registros
            .filter(r => r.fecha.toDateString() === fecha.toDateString())
            .forEach((r, index) => {
                console.log(`${index + 1}. ${r.dispositivo.nombre} - ${r.calcularConsumo()} Wh`);
            });
    }

    obtenerConsumoPorCategoria(categoria: string): number {
        return this.registros
            .filter(r => r.dispositivo.categoria === categoria)
            .reduce((sum, r) => sum + r.calcularConsumo(), 0);
    }
}
