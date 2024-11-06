<!DOCTYPE html>
<html lang="en">
<?php include "head.php" ?>

<body>

    <?php include "nav.php" ?>

    <header class="contacto">
        <h3 class="contacto__heading">Contacto</h3>
    </header>

    <main>
        <section class="contenedor ubicacion">
            <div class="ubicacion__grid">
                <div class="correo">

                    <h3 class="correo__heading">Enviar un mensaje</h3>
                    <div class="correo__input">
                        <i class="far fa-user correo__icono"></i>
                        <input class="correo__input--Border" type="text" placeholder="Nombre completo">
                    </div>
                    <div class="correo__input">
                        <i class="far fa-envelope correo__icono"></i>
                        <input class="correo__inputBorder" type="text" placeholder="Correo">
                    </div class="correo__input">
                    <textarea class="correo__input" name="mensaje" id="" cols="3" rows="8" placeholder="Cual es tu pregunta o mensaje?"></textarea>
                    <button class="correo__boton">Enviar</button>
                </div>
                <div class="datos">
                    <div class="datos__grid">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="datos_direccion">
                            <span class="datos__direccion">Dirección</span>
                            <div class="datos__direccion2">
                                <span>Calle Jipijapa Entre Av. Del ejército y, México, Portoviejo</span>
                            </div>
                        </div>

                    </div>
                    <div class="datos__grid">
                        <i class="fas fa-phone"></i>
                        <div class="datos_direccion">
                            <span class="datos__direccion">Teléfonos</span>
                            <div class="datos__direccion2">
                                <span>098 305 5776</span>
                                <span>099 003 4143</span>
                                <span>098 830 2392</span>
                                <span>05 2932 945</span>
                               
                            </div>
                        </div>

                    </div>
                    <div class="datos__grid">
                        <i class="fas fa-envelope"></i>
                        <div class="datos_direccion">
                            <span class="datos__direccion">Email</span>
                            <div class="datos__direccion2">
                                <span>controlsistemasjl@gmail.com</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    </main>


    <section class="ubicacion">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d296.49457262898557!2d-80.46979579870765!3d-1.0568699190543367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902bed42b277f41b%3A0x5d2b8e0b118394b2!2sSistemas%20CONTROL!5e0!3m2!1ses-419!2sec!4v1688003121802!5m2!1ses-419!2sec" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </section>


    <?php include "footer.php" ?>

</body>

</html>
<?php include "script.php" ?>