# Actividad PIG-20261 | Robot Visions

Reconstrucción del ejercicio mostrado en el video de la asignatura Programación de Interfaces Gráficas de COTECNOVA. Se basa en la grabación, no en el archivo base de AVACO Pro. Usa HTML, CSS y JavaScript sin dependencias ni instalación.

## Abrir el proyecto

1. Descomprime el ZIP completo. Mantén la carpeta `assets` junto a `index.html`.
2. En Visual Studio Code, selecciona **Archivo → Abrir carpeta…** y elige `actividad-pig-vscode`.
3. Abre `index.html` en Edge o Chrome con doble clic desde el Explorador de archivos. Si ya tienes la extensión Live Server, también puedes hacer clic derecho sobre `index.html` en VS Code y seleccionar **Open with Live Server**.
4. Edita los archivos en VS Code, guarda con `Ctrl+S` y recarga el navegador si abriste el archivo directamente.

## Qué revisar antes de entregar

| Prueba | Resultado esperado |
| --- | --- |
| En Edge o Chrome, abre las herramientas con `F12` y activa la vista adaptable con `Ctrl+Shift+M`. Prueba un ancho de 1440 px. | `xl`: navegación visible y cuatro tarjetas de equipo por fila. |
| Cambia a 1024 px. | `lg`: navegación visible y dos tarjetas de equipo por fila. |
| Cambia a 850 px y luego a 375 px. | Menú desplegable y una tarjeta de equipo por fila. En móvil también se apilan la portada y la suscripción. |
| Pulsa `A+` y `A−`. | El texto aumenta o disminuye entre el 90 % y el 140 %. |
| Pulsa `Fondo` tres veces. | El fondo pasa de original a arena, luego a azul claro y vuelve al original. Recargar restablece los ajustes. |
| Abre la segunda y la tercera pregunta. | Se abre la pregunta seleccionada y se cierra la anterior. |
| Completa y prueba ambos formularios con datos ficticios. | El navegador valida los campos. Los formularios son demostrativos: no guardan ni envían datos. |

## Dónde editar

- `index.html`: navegación, textos, tarjetas y formularios.
- `base.css`: reglas comunes y accesibilidad.
- `style.css`: colores, tamaños, componentes y puntos de cambio responsive.
- `app.js`: controles de apariencia, menú y respuestas de los formularios de demostración.
- `assets/`: portada y marca recortadas de la grabación, más el fondo industrial reconstruido a partir de fragmentos del video. Si el curso les proporciona los recursos originales, pueden sustituir estas tres imágenes conservando sus nombres y formato, o actualizando las rutas.

## Entrega en pareja con Git

La consigna visible en el video pide **mínimo tres avances por cada integrante**. Usen este proyecto como punto de partida y registren cambios reales con sus cuentas. No incluyan el video ni datos personales en el repositorio.

1. Si no tienen repositorio, una persona crea uno privado con un `README` inicial y agrega al compañero como colaborador. Clonen el repositorio compartido y copien los archivos de esta carpeta a una copia local. El ZIP no incluye historial; no ejecuten `git init` dentro de un repositorio clonado.
2. Cada integrante abre su copia en VS Code y revisa su identidad desde **Terminal → Nueva terminal**. Sustituya los ejemplos por su nombre y su correo de Git o GitHub:

   ```sh
   git config user.name "Tu nombre"
   git config user.email "tu-correo@ejemplo.com"
   ```

3. Suban primero los archivos del punto de partida a la rama principal, sin contarlos como avances individuales. Luego, cada integrante actualiza su copia y crea su propia rama, con un nombre distinto. Después de cada avance real: revise los cambios, prepare solo los archivos correspondientes y haga un commit descriptivo. Este ejemplo corresponde a un cambio real en la navegación de `index.html`:

   ```sh
   git pull
   git switch -c actividad/integrante-1
   git status
   git add index.html
   git commit -m "Ajustar navegación de la página"
   ```

4. Ideas para repartir los avances:
   - Integrante 1: adaptar encabezado y portada a la plantilla base; ajustar características y preguntas; personalizar contenidos y tarjetas del equipo.
   - Integrante 2: mejorar el comportamiento en `md`, `lg` y `xl`; revisar los controles de tamaño y fondo; ajustar y probar formularios y navegación móvil.
5. Cuando cada rama tenga sus cambios, súbanla al repositorio compartido. Por ejemplo: `git push -u origin actividad/integrante-1`. Si usan pull requests, integren con merge sin squash para conservar los commits individuales. Con las ramas ya integradas, actualicen la rama de entrega y revisen autores y mensajes:

   ```sh
   git log --format="%h %an <%ae> %s"
   ```

   Comprueben que aparezcan al menos tres avances reales por integrante antes de entregar.
