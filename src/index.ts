console.log("hola")

import { IUsuario } from "./models/IUsuario";
import { DispositivoInstalado } from "./models/DispositivoInstalado";
import { RegistroDiario } from "./models/RegistroDiario";
import { MonitoreoConsumo } from "./models/MonitoreoConsumo";

// Usuario
const usuario: IUsuario = {
    nombre: "Carlos López",
    direccion: {
        calle: "Colonia Rivera de la Vega",
        numero: "Sector #2",
        ciudad: "Comayagüela",
        departamento: "Francisco Morazán",
        pais: "Honduras"
    }
};

// Dispositivos
const luz = new DispositivoInstalado(1, "Luz", "Iluminación", 36, "Sala", 5);
const frigorifico = new DispositivoInstalado(2, "Frigorífico", "Electrodoméstico", 50, "Cocina", 24);
const lavadora = new DispositivoInstalado(3, "Lavadora", "Electrodoméstico", 100, "Lavandería", 2);

// Fecha
const hoy = new Date("2025-04-08");

// Registros
const registro1 = new RegistroDiario(usuario, luz, hoy);
const registro2 = new RegistroDiario(usuario, frigorifico, hoy);
const registro3 = new RegistroDiario(usuario, lavadora, hoy);

// Monitoreo
const monitor = new MonitoreoConsumo();
monitor.agregarRegistro(registro1);
monitor.agregarRegistro(registro2);
monitor.agregarRegistro(registro3);

monitor.obtenerConsumoTotalDia(hoy);
monitor.obtenerConsumosDelDia(hoy);

monitor.eliminarRegistro("Lavadora", hoy);
monitor.obtenerConsumoTotalDia(hoy);
monitor.obtenerConsumosDelDia(hoy);

console.log(`Consumo total de la categoría Electrodoméstico: ${monitor.obtenerConsumoPorCategoria("Electrodoméstico")} Wh`);
