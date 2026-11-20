# Mini Equipo Pokémon

Aplicación web interactiva desarrollada en Angular que permite buscar Pokémon, consultar el efecto de sus habilidades, analizar debilidades por tipo y armar un equipo de hasta 6 Pokémon consumiendo PokéAPI.

## Funcionalidades principales
- Búsqueda de Pokémon por nombre o número de Pokédex con estados de carga y error.
- Visualización de datos básicos, tipos y habilidades del Pokémon.
- Consulta dinámica de la descripción de la habilidad al seleccionarla.
- Consulta de debilidades (doble daño recibido) al seleccionar un tipo.
- Gestión de un equipo de hasta 6 Pokémon (agregar y quitar).

## Endpoints de PokéAPI utilizados
- `GET https://pokeapi.co/api/v2/pokemon/{id_or_name}`: obtiene información general, imagen, tipos y habilidades del Pokémon.
- `GET https://pokeapi.co/api/v2/ability/{name}`: obtiene la descripción del efecto de la habilidad seleccionada.
- `GET https://pokeapi.co/api/v2/type/{name}`: obtiene las relaciones de daño del tipo seleccionado para mostrar debilidades.

## Instalación y ejecución local
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/DavidCajisaca/Pokemon.git](https://github.com/DavidCajisaca/Pokemon.git)