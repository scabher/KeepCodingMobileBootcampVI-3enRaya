# KeepCodingMobileBootcampVI-3enRaya

Práctica correspondiente al módulo de React del VI Mobile BootCamp de KeepCoding.

## Descripción

- Desarrollar un sistema para poder jugar a las 3 en raya .
- Cada turno corresponderá a un jugador, hasta que uno de ellos
  venza, o resulte imposible realizar una nueva jugada. En ese
  momento, se mostrará el mensaje correspondiente, junto a un
  botón para reiniciar la partida.
  Requisitos técnicos
- React como librería de UI
- Redux como store
- Jest para unit testing
- Styled Components / Sass / CSS Modules para los estilos
- Se aconseja “ redux-persist ” o similar para persistir el store en
  LocalStorage, aunque no será necesario en caso de usar algún
  servicio para el backend.
- El código deberá estar correctamente indentado y no deberá tener
  errores de sintaxis. Se aconseja la combinación eslint / prettier
  para formateo automático. La guía de estilos de JavaScript que
  seguiremos será la de AirBnB .
- Para evitar tener que montar Webpack, Babel y demás se
  aconseja el uso de “ create-react-app ”.

## Implementación

Se ha usado un estado para la partida en curso con los siguientes datos:

- cells: Array que contendrá un tipo enumerado (jugador1, jugador2, ninguno)
- turnOf: Tipo enumerado usado para las celdas
- isFinished: Indicará si el juego se ha terminado o no
- winner: Indicará el ganador (si lo hubiera)
- showResult: Flag para mostrar el mensaje de fin de partida

Se ha usado un estado para el histórico de partidas con los siguientes datos:

- history: Array que contendrá los datos de las partidas finalizadas (nombre y fecha/hora de la partida)
