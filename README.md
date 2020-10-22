# Componente CodeInput

## Descrpición
`CodeInput` es un componente pensado para ingresar códigos de validación donde cada caractér tiene su propio input y al completarse avanza automáticamente al siguiente.

Permite configurar la cantidad de caracteres, el patrón de expresión regular aceptado por cada input (default: `[0-9]`) y acepta una funcion a la que devuelve el código ingresado así como si es válido o no (valida si el largo del código es igual la cantidad de inputs)


## Props
|Prop|Default|Descripción|
|-|-|-|
|slots|4|Define la cantidad de inputs|
|pattern|[0-9]|RegEx utilizada para validar cada input|
|onValueChange|`() => {}`|Función a la que se llama cuando se completa un input. Devuelve un objeto `{value: <codigo>, valid:<boolean>}`|

## Ejemplos
```
const handleValueChange = code => {
    console.log(`code: ${code.value} ${code.valid ? 'valid' : 'invalid'}`)
}

...

<CodeInput onValueChange={handleValueChange} />
<CodeInput slots={6} pattern={'[a-z0-9]'} onValueChange={handleValueChange} />
```