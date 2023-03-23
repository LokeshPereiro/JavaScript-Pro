const dia = 6;

// ===, es igual que, SWITCH cuando queremos igual a un valor único

switch (dia) {
  case 0:
    console.log("Hoy es Domingo");
    break;

  case 1:
    console.log("Hoy es Lunes");
    break;

  case 2:
    console.log("Hoy es Martes");
    break;

  case 3:
    console.log("Hoy es Miercoles");
    break;

  case 4:
    console.log("Hoy es Jueves");
    break;

  case 5:
    console.log("Hoy es Viernes");
    break;

  case 6:
    console.log("Hoy es Sabado");
    break;

  default:
    console.log(`No se qué dia es: ${dia}`);
}
