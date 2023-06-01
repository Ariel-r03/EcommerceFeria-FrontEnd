# EcommerceFeria-FrontEnd
FrontEnd code to the Ecommerce Proyect

Structure based on file type

src/
|-- components/
|   |-- Avatar/
|   |   |-- Avatar.jsx
|   |   |-- Avatar.test.js
|   |-- Button/
|   |   |-- Button.jsx
|   |   |-- Button.test.js
|   |-- TextField/
|   |   |-- TextField.jsx
|   |   |-- TextField.test.js
|-- contexts/
|   |-- UserContext/
|   |   |-- UserContext.js
|-- hooks/
|   |-- useMediaQuery/
|   |   |-- useMediaQuery.js
|-- pages/
|   |-- UserProfile/
|   |   |-- components/
|   |   |   |-- SomeUserProfileComponent/
|   |   |   |   |-- SomeUserProfileComponent.jsx
|   |   |   |   |-- SomeUserProfileComponent.test.js
|   |   |-- UserProfile.jsx
|   |   |-- UserProfile.test.js
|   |-- index.js
|-- routes/
|   |-- routes.jsx
|   |-- routes.test.js
|-- utilities/
|   |-- some-util/
|   |   |-- index.js
|   |   |-- someUtil.js
|   |   |-- index.test.js
|-- services/
|   |-- some-service/
|   |   |-- index.js/
|   |   |-- someService.js/
|   |   |-- index.test.js
|-- App.jsx
|-- index.js

Components: Dentro de la carpeta "Components" se colocaran componentes (JSX) que puedan ser reutilizados en diferentes partes del código, por ejemplo,
una alerta, estas pueden ser utilizadas muchas veces asi que sería un componente que encajaria perfectamente en esta carpeta.

Utilities: Dentro de la carpeta "Utilities" iran fragmentos de código JavaScript que pueden ser reutilizados en otra parte del codigo.

Services: Dentro de la carpeta services iran archivos que se encarguen de manejar las llamadas a las APIS, en las cuales se manejaran los distintos errores que retorne alguna llamada a la API.

Routes: En la carpeta "Routes" se manejaran las rutas de las paginas en el navegador es decir las direcciones URL, esto se lograra con un componente externo llamado "React-router-dom".

Contexts: En la carpeta "Contexts" se tendran archivos que manejan datos de caracter global del sistema, esto se lograra con hooks de react como UseContexts o UseRedux.

Pages: Dentro de "Pages" iran archivos JSX que denotaran las distintas paginas del sitio web y componentes unicos para esas paginas.

Hooks: Dentro de la carpeta "Hooks" habran archivos reutilizables usados para el manejo del ciclo de vida de los distintos componentes.

