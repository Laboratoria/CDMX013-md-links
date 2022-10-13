import { CLI, readMyFile } from './helper.js'
CLI();
readMyFile();



//como usar fs.readFileSync (ruta, opciones)
/*ruta: Toma la ruta relativa del archivo de texto. La ruta puede ser de tipo URL. El archivo también puede ser un descriptor de archivo. Si ambos archivos están en la misma carpeta, solo proporcione el nombre del archivo entre comillas.
opciones: es un parámetro opcional que contiene la codificación y el indicador, la codificación contiene la especificación de datos. Su valor predeterminado es nulo , lo que devuelve el búfer sin formato y el indicador contiene una indicación de las operaciones en el archivo. Su valor predeterminado es 'r'.
Valor devuelto: este método devuelve el contenido del archivo.*/