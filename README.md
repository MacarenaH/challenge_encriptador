# challenge_encriptador
Practicando lógica de programación: Challege Encriptador de texto.  Alura LATAM
# Encriptador de Textos

Este proyecto es una aplicación web que permite encriptar y desencriptar textos utilizando un método de sustitución de caracteres. La aplicación está diseñada para funcionar solo con letras minúsculas y sin acentos.

# Funcionalidades

## 1. Encriptar Texto
- La función de encriptación toma un texto ingresado por el usuario y reemplaza las vocales por secuencias específicas de caracteres:
  - `a` se convierte en `ai`
  - `e` se convierte en `enter`
  - `i` se convierte en `imes`
  - `o` se convierte en `ober`
  - `u` se convierte en `ufat`
- El texto encriptado se muestra en el área de resultados.

## 2. Desencriptar Texto
- La función de desencriptación revierte la encriptación aplicando el proceso inverso:
  - `ai` se convierte en `a`
  - `enter` se convierte en `e`
  - `imes` se convierte en `i`
  - `ober` se convierte en `o`
  - `ufat` se convierte en `u`
- El texto desencriptado se muestra en el área de resultados.

## 3. Validación de Texto
- El sistema está diseñado para aceptar solo letras minúsculas y sin acentos. Se valida la entrada del usuario para evitar caracteres no permitidos utilizando la tabla UNICODE.

## 4. Copiar Texto
- El sistema permite copiar el texto encriptado o desencriptado al portapapeles mediante el botón "Copiar". Esta función utiliza la API del portapapeles de JavaScript.

## Estructura de Archivos

- **index.html:** Contiene la estructura principal de la aplicación.
- **style.css:** Incluye todos los estilos necesarios para la apariencia y el diseño responsivo de la aplicación.
- **script.js:** Contiene la lógica de encriptación, desencriptación, validación y copiado de texto.

## Tecnologías Utilizadas

- **HTML5:** Estructura del contenido.
- **CSS3:** Estilos y diseño responsivo.
- **JavaScript:** Lógica de encriptación, desencriptación, validación y manipulación del DOM.


# Autora

Desarrollado por **Macarena Hauad** © 2024.
