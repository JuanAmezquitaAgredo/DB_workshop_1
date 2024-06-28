
document.addEventListener('DOMContentLoaded', function() {
    function agregarTarjeta(seccion, titulo, descripcion, imagenUrl) {
      
        var card = document.createElement('div');
        card.classList.add('card');

        var tituloElement = document.createElement('h4');
        tituloElement.textContent = titulo;

        var verBtn = document.createElement('button');
        verBtn.textContent = 'Ver';
        verBtn.classList.add('ver-btn');

        card.appendChild(tituloElement);
        card.appendChild(verBtn);

        var contenedor = document.querySelector('.' + seccion + ' .container');
        contenedor.appendChild(card);

        verBtn.addEventListener('click', function() {
            mostrarModal(titulo, descripcion, imagenUrl);
        });
    }

    function mostrarModal(titulo, descripcion, imagenUrl) {
        var modal = document.createElement('div');
        modal.classList.add('popup');

        var modalContent = document.createElement('div');
        modalContent.classList.add('popup-content');

        var closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = '&times;';

        var tituloModal = document.createElement('h2');
        tituloModal.textContent = titulo;

        var descripcionModal = document.createElement('p');
        descripcionModal.textContent = descripcion;

        var imagenModal = document.createElement('img');
        imagenModal.src = imagenUrl;
        imagenModal.alt = titulo;

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(tituloModal);
        modalContent.appendChild(descripcionModal);
        modalContent.appendChild(imagenModal);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);

        closeBtn.addEventListener('click', function() {
            modal.remove();
        });

   
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                modal.remove();
            }
        });

        setTimeout(function() {
            modal.style.display = "block";
        }, 50);
    }

    // Consultas
    agregarTarjeta('queries', 'Consulta 1', 'Selecciona todos los usuarios cuyo nombre contiene la letra ‘a’.', 'images/punto_1.png');
    agregarTarjeta('queries', 'Consulta 2', 'Selecciona todos los usuarios cuyo apellido empieza con ‘S’.', 'images/punto_2.png');
    agregarTarjeta('queries', 'Consulta 3', 'Selecciona todos los usuarios cuyo correo electrónico personal termina en ‘gmail.com’.', 'images/punto_3.png');
    agregarTarjeta('queries', 'Consulta 4', 'Selecciona los nombres y correos electrónicos de todos los usuarios ordenados alfabéticamente por nombre.', 'images/punto_4.png');
    agregarTarjeta('queries', 'Consulta 5', 'Selecciona los usuarios ordenados por su edad de forma descendente.', 'images/punto_5.png');
    agregarTarjeta('queries', 'Consulta 6', 'Selecciona los primeros 10 usuarios ordenados por su fecha de creación.', 'images/punto_6.png');
    agregarTarjeta('queries', 'Consulta 7', 'Selecciona los últimos 5 usuarios ordenados por su fecha de actualización.', 'images/punto_7.png');
    agregarTarjeta('queries', 'Consulta 8', 'Selecciona los usuarios que tienen entre 2 y 4 hijos.', 'images/punto_8.png');
    agregarTarjeta('queries', 'Consulta 9', 'Selecciona los usuarios cuyo país no es ‘USA’.', 'images/punto_9.png');
    agregarTarjeta('queries', 'Consulta 10', 'Selecciona los usuarios cuyo patrimonio es mayor que 100000.', 'images/punto_10.png');
    agregarTarjeta('queries', 'Consulta 11', 'Selecciona los usuarios con el género ‘female’ y estado ‘active’.', 'images/punto_11.png');
    agregarTarjeta('queries', 'Consulta 12', 'Selecciona los usuarios con correos electrónicos personales que contienen ‘work’.', 'images/punto_12.png');
    agregarTarjeta('queries', 'Consulta 13', 'Selecciona los usuarios cuya ciudad empieza con ‘M’.', 'images/punto_13.png');
    agregarTarjeta('queries', 'Consulta 14', 'Selecciona el usuario más joven.', 'images/punto_14.png');
    agregarTarjeta('queries', 'Consulta 15', 'Selecciona el usuario más viejo.', 'images/punto_15.png');
    agregarTarjeta('queries', 'Consulta 16', 'Selecciona el usuario con el patrimonio más alto.', 'images/punto_16.png');
    agregarTarjeta('queries', 'Consulta 17', 'Selecciona el usuario con el patrimonio más bajo.', 'images/punto_17.png');
    agregarTarjeta('queries', 'Consulta 18', 'Selecciona el usuario con más hijos.', 'images/punto_18.png');
    agregarTarjeta('queries', 'Consulta 19', 'Selecciona el usuario con menos hijos.', 'images/punto_19.png');
    agregarTarjeta('queries', 'Consulta 20', 'Selecciona el número total de usuarios.', 'images/punto_20.png');
    agregarTarjeta('queries', 'Consulta 21', 'Selecciona el número total de usuarios activos.', 'images/punto_21.png');
    agregarTarjeta('queries', 'Consulta 22', 'Selecciona el número total de usuarios inactivos.', 'images/punto_22.png');
    agregarTarjeta('queries', 'Consulta 23', 'Selecciona el promedio de edad de todos los usuarios.', 'images/punto_23.png');
    agregarTarjeta('queries', 'Consulta 24', 'Selecciona el promedio de patrimonio de todos los usuarios.', 'images/punto_24.png');
    agregarTarjeta('queries', 'Consulta 25', 'Selecciona el total de activos de todos los usuarios.', 'images/punto_25.png');
    agregarTarjeta('queries', 'Consulta 26', 'Selecciona el total de pasivos de todos los usuarios.', 'images/punto_26.png');
    agregarTarjeta('queries', 'Consulta 27', 'Selecciona los usuarios agrupados por país y cuenta cuántos usuarios hay en cada país.', 'images/punto_27.png');
    agregarTarjeta('queries', 'Consulta 28', 'Selecciona los usuarios agrupados por ciudad y cuenta cuántos usuarios hay en cada ciudad.', 'images/punto_28.png');
    agregarTarjeta('queries', 'Consulta 29', 'Selecciona el número total de usuarios cuya música favorita es ‘Rock’.', 'images/punto_29.png');
    agregarTarjeta('queries', 'Consulta 30', 'Selecciona el número total de usuarios cuyo género es ‘male’ y están activos.', 'images/punto_30.png');
    agregarTarjeta('queries', 'Consulta 31', 'Selecciona los usuarios ordenados por su número de hijos en forma ascendente.', 'images/punto_31.png');
    agregarTarjeta('queries', 'Consulta 32', 'Selecciona los usuarios ordenados por su patrimonio en forma descendente.', 'images/punto_32.png');
    agregarTarjeta('queries', 'Consulta 33', 'Selecciona los usuarios cuyo nombre o apellido contiene la letra ‘e’.', 'images/punto_33.png');
    agregarTarjeta('queries', 'Consulta 34', 'Selecciona el usuario cuyo nombre es ‘Alice’ y su género es ‘female’.', 'images/punto_34.png');
    agregarTarjeta('queries', 'Consulta 35', 'Selecciona los usuarios que tienen más de 2 hijos y menos de 5.', 'images/punto_35.png');
    agregarTarjeta('queries', 'Consulta 36', 'Selecciona los usuarios cuyo correo electrónico personal no contiene ‘gmail.com’.', 'images/punto_36.png');
    agregarTarjeta('queries', 'Consulta 37', 'Selecciona los usuarios cuyo número de teléfono empieza con ‘555’.', 'images/punto_37.png');
    agregarTarjeta('queries', 'Consulta 38', 'Selecciona los usuarios que fueron creados en el último mes.', 'images/punto_38.png');
    agregarTarjeta('queries', 'Consulta 39', 'Selecciona los usuarios cuya edad es múltiplo de 5.', 'images/punto_39.png');
    agregarTarjeta('queries', 'Consulta 40', 'Selecciona los usuarios agrupados por estado y calcula el promedio de patrimonio en cada grupo.', 'images/punto_40.png');

    // Actualizaciones
    agregarTarjeta('updates', 'Actualización 1', 'Incrementa la edad de todos los usuarios cuyo país es ‘Canada’ y tienen más de 2 hijos en 2 años.', 'images/punto_41.png');
    agregarTarjeta('updates', 'Actualización 2', 'Cambia el estado a ‘inactive’ para todos los usuarios cuyo correo personal no contiene ‘work’ y son mayores de 50 años.', 'images/punto_42.png');
    agregarTarjeta('updates', 'Actualización 3', 'Duplica los activos para todos los usuarios cuyo patrimonio es menor que 50000.', 'images/punto_43.png');
    agregarTarjeta('updates', 'Actualización 4', 'Cambia la ciudad a ‘Unknown’ para todos los usuarios que no tienen hijos y están inactivos.', 'images/punto_44.png');
    agregarTarjeta('updates', 'Actualización 5', 'Actualiza el género a ‘female’ para todos los usuarios cuyo nombre contiene la letra ‘a’ y tienen más de 3 hijos.', 'images/punto_45.png');
    agregarTarjeta('updates', 'Actualización 6', 'Incrementa los pasivos en un 20% para todos los usuarios que tienen activos mayores que 100000.', 'images/punto_46.png');
    agregarTarjeta('updates', 'Actualización 7', 'Cambia el correo personal a ‘unknown@example.com’ para todos los usuarios cuyo dominio de correo es ‘hotmail.com’.', 'images/punto_47.png');
    agregarTarjeta('updates', 'Actualización 8', 'Reduce en 5 años la edad de todos los usuarios cuyo estado es ‘active’ y viven en ‘New York’.', 'images/punto_48.png');
    agregarTarjeta('updates', 'Actualización 9', 'Actualiza el patrimonio a 100000 para todos los usuarios cuyo número de hijos es par.', 'images/punto_49.png');
    agregarTarjeta('updates', 'Actualización 10', 'Cambia la música favorita a ‘Jazz’ para todos los usuarios que tienen más de 2 hijos y están activos.', 'images/punto_50.png');
    agregarTarjeta('updates', 'Actualización 11', 'Incrementa el número de hijos en 1 para todos los usuarios cuyo género es ‘male’ y tienen pasivos menores que 50000.', 'images/punto_51.png');
    agregarTarjeta('updates', 'Actualización 12', 'Cambia el estado a ‘active’ para todos los usuarios que tienen un correo electrónico que contiene ‘example’.', 'images/punto_52.png');
    agregarTarjeta('updates', 'Actualización 13', 'Actualiza la ciudad a ‘New City’ para todos los usuarios cuyo patrimonio es mayor que 200000 y tienen menos de 3 hijos.', 'images/punto_53.png');
    agregarTarjeta('updates', 'Actualización 14', 'Duplica el patrimonio para todos los usuarios cuyo género es ‘female’ y están inactivos.', 'images/punto_54.png');
    agregarTarjeta('updates', 'Actualización 15', 'Cambia el país a ‘Unknown’ para todos los usuarios cuya edad es mayor que 70.', 'images/punto_55.png');
    agregarTarjeta('updates', 'Actualización 16', 'Incrementa los activos en 50000 para todos los usuarios cuyo nombre empieza con ‘J’ y tienen más de 1 hijo.', 'images/punto_56.png');
    agregarTarjeta('updates', 'Actualización 17', 'Cambia el teléfono a ‘000-000-0000’ para todos los usuarios cuyo correo electrónico contiene ‘test’.', 'images/punto_57.png');
    agregarTarjeta('updates', 'Actualización 18', 'Reduce los activos a la mitad para todos los usuarios cuyo estado es ‘inactive’ y tienen más de 4 hijos.', 'images/punto_58.png');
    agregarTarjeta('updates', 'Actualización 19', 'Cambia la música favorita a ‘Classical’ para todos los usuarios cuya edad es mayor que 60 y viven en ‘USA’.', 'images/punto_59.png');
    agregarTarjeta('updates', 'Actualización 20', 'Incrementa el número de hijos en 2 para todos los usuarios cuyo estado es ‘active’ y tienen activos menores que 50000.', 'images/punto_60.png');

    // Eliminaciones
    agregarTarjeta('deletes', 'Eliminación 1', 'Elimina todos los usuarios que tienen más de 3 hijos y cuyo patrimonio es menor que 100000.', 'images/punto_61.png');
    agregarTarjeta('deletes', 'Eliminación 2', 'Elimina todos los usuarios cuyo correo personal contiene ‘spam’ y tienen más de 50 años.', 'images/punto_62.png');
    agregarTarjeta('deletes', 'Eliminación 3', 'Elimina todos los usuarios que no tienen activos pero tienen pasivos mayores que 0.', 'images/punto_63.png');
    agregarTarjeta('deletes', 'Eliminación 4', 'Elimina todos los usuarios que están inactivos y cuyo nombre o apellido contiene la letra ‘z’.', 'images/punto_64.png');
    agregarTarjeta('deletes', 'Eliminación 5', 'Elimina todos los usuarios cuyo número de teléfono contiene la secuencia ‘123’ y tienen más de 2 hijos.', 'images/punto_65.png');
    agregarTarjeta('deletes', 'Eliminación 6', 'Elimina todos los usuarios que viven en ‘Unknown’ y cuyo estado es ‘inactive’.', 'images/punto_66.png');
    agregarTarjeta('deletes', 'Eliminación 7', 'Elimina todos los usuarios que fueron creados antes del año 2000 y cuyo país es ‘USA’.', 'images/punto_67.png');
    agregarTarjeta('deletes', 'Eliminación 8', 'Elimina todos los usuarios cuyo patrimonio es negativo y tienen el estado ‘active’.', 'images/punto_68.png');
    agregarTarjeta('deletes', 'Eliminación 9', 'Elimina todos los usuarios cuyo correo electrónico termina en ‘example.com’ y tienen activos mayores que 50000.', 'images/punto_69.png');
    agregarTarjeta('deletes', 'Eliminación 10', 'Elimina todos los usuarios que tienen más de 5 hijos y cuyo correo personal no contiene ‘family’.', 'images/punto_70.png');

});
