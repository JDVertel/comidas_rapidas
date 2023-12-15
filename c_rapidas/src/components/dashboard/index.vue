<template>
<div>
    <nav class="navbar bg-custom-color">
        <div class="container-nav d-flex justify-content-between align-items-center">
            <button class="toggle-btn" data-bs-target="#offcanvas-menu" data-bs-toggle="offcanvas">
                &#9776;
            </button>
            <i class="toggle-btn bi bi-cart2" data-bs-target="#offcanvas-menu-derecha" data-bs-toggle="offcanvas"></i>
        </div>
    </nav>

    <div class="offcanvas offcanvas-start bg-custom" tabindex="-1" data-bs-backdrop="false" id="offcanvas-menu">
        <div class="offcanvas-header">
            <a class="link-body-emphasis d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none" href="/"><span class="titulos-sidebar fs-2">Menu <i class="icono-eco material-icons">fastfood</i>
                </span></a><button class="close-sedebar bi bi-x" type="button" aria-label="Close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column justify-content-between pt-0">
            <div>
                <hr class="custom-hr mt-0" />
                <ul class="nav nav-pills flex-column mb-auto">
                    <strong class="separador-sidebar-uno">Navegación</strong>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-house"></i>
                            <strong>Home</strong>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-basket3"></i>
                            <strong>Vitrina</strong>
                        </a>
                    </li>
                    <strong class="separador-sidebar">Nuestas redes</strong>
                    <li class="nav-item">
                        <a class="nav-link" href=""><i class="bi bi-facebook"></i> <strong>Facebook</strong>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=""><i class="bi bi-instagram"></i> <strong>Instagram</strong>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=""><i class="bi bi-whatsapp"></i> <strong>WhatsApp</strong>
                        </a>
                    </li>
                    <strong class="separador-sidebar">Ingresar</strong>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#login" href="#"><i class="bi bi-person-add"></i> <strong>Iniciar sesión</strong>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="offcanvas offcanvas-end bg-custom" tabindex="-1" data-bs-backdrop="false" id="offcanvas-menu-derecha">
        <div class="offcanvas-header">
            <a class="link-body-emphasis d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none"><span class="titulos-sidebar fs-2">Carrito </span></a><button class="close-sedebar bi bi-x" type="button" aria-label="Close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column justify-content-between pt-0">
            <div>
                <hr class="custom-hr" />

                <!-- Estructura del carrito -->
                <div class="cart-item d-flex justify-content-between align-items-center">
                    <div class="product-details">
                        <div class="product-cantidad-container">
                            <!-- Icono izquierdo -->
                            <div class="icon-container">
                                <i class="menos bi bi-dash-circle"></i>
                            </div>

                            <!-- Número -->
                            <p class="product-cantidad">1</p>

                            <!-- Icono derecho -->
                            <div class="icon-container">
                                <i class="mas bi bi-plus-circle"></i>
                            </div>
                        </div>
                        <h5 class="product-name">
                            Hamburguesa mexicana extra queso ultra suave 100% picante al rojo
                            vivo
                        </h5>
                        <p class="product-price">$50.000</p>
                    </div>
                    <button class="botones-modal-cm d-flex justify-content-center">
                        <i id="icono-modal-d" class="bi bi-trash3-fill"></i>
                    </button>
                </div>
                <hr class="custom-hr" />
                <div class="cart-item d-flex justify-content-between align-items-center">
                    <div class="product-details">
                        <div class="product-cantidad-container">
                            <!-- Icono izquierdo -->
                            <div class="icon-container">
                                <i class="bi bi-dash-circle"></i>
                            </div>

                            <!-- Número -->
                            <p class="product-cantidad">1</p>

                            <!-- Icono derecho -->
                            <div class="icon-container">
                                <i class="bi bi-plus-circle"></i>
                            </div>
                        </div>
                        <h5 class="product-name">Pizza de pepperoni</h5>
                        <p class="product-price">$50.000</p>
                    </div>
                    <button class="botones-modal-cm d-flex justify-content-center">
                        <i id="icono-modal-d" class="bi bi-trash3-fill"></i>
                    </button>
                </div>
                <hr class="custom-hr" />
                <div class="cart-item d-flex justify-content-between align-items-center">
                    <div class="product-details">
                        <div class="product-cantidad-container">
                            <!-- Icono izquierdo -->
                            <div class="icon-container">
                                <i class="bi bi-dash-circle"></i>
                            </div>

                            <!-- Número -->
                            <p class="product-cantidad">1</p>

                            <!-- Icono derecho -->
                            <div class="icon-container">
                                <i class="bi bi-plus-circle"></i>
                            </div>
                        </div>
                        <h5 class="product-name">Postre de maracuya</h5>
                        <p class="product-price">$50.000</p>
                    </div>
                    <button class="botones-modal-cm d-flex justify-content-center">
                        <i id="icono-modal-d" class="bi bi-trash3-fill"></i>
                    </button>
                </div>
                <hr class="custom-hr" />

                <!-- Total y botón de compra -->
                <div class="total-cart-item d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="porduct-total">Total</h5>
                        <p class="total">$150.000</p>
                    </div>
                    <button class="botones-modal-cm d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#formulario-compra" href="#">
                        <i id="icono-modal-d" class="bi bi-bag-check-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <body>

        <div class="card card-principal">
            <div id="card-header-inicio" class="card-header">
                <ul class="nav nav-tabs card-header-tabs justify-content-center" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="item-1-1-tab" role="tab" aria-controls="item-1-1" aria-selected="true" href="#item-1-1" data-bs-toggle="tab">
                            <i class="material-icons icon-sm-inicio align-middle">
                                lunch_dining </i>Hamburguesas
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="item-1-2-tab" role="tab" aria-controls="item-1-2" aria-selected="false" href="#item-1-2" data-bs-toggle="tab">
                            <i class="material-icons icon-sm-inicio align-middle">
                                local_pizza </i>Pizzas
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="item-1-3-tab" role="tab" aria-controls="item-1-3" aria-selected="false" href="#item-1-3" data-bs-toggle="tab">
                            <i class="material-icons icon-sm-inicio align-middle"> cake </i>Postres
                        </a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <div id="nav-tabContent" class="tab-content">
                    <div id="item-1-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="item-1-1-tab">
                        <!-- Cards 1 (Hamburguesas) -->
                        <div class="content">
                            <div class="card-container">
                                <div class="card">
                                    <img src="https://i.ibb.co/WKtPp55/hamburguesa-queso-receta.jpg" alt="Imagen 1" />
                                    <h3>
                                        Hamburguesa mexicana extra queso ultra suave 100% picante al
                                        rojo vivo
                                    </h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart" data-bs-toggle="modal" data-bs-target="#ejemplo"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/WKtPp55/hamburguesa-queso-receta.jpg" alt="Imagen 2" />
                                    <h3>Hamburguesa extra queso</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/WKtPp55/hamburguesa-queso-receta.jpg" alt="Imagen 3" />
                                    <h3>Hamburguesa extra queso</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/WKtPp55/hamburguesa-queso-receta.jpg" alt="Imagen 4" />
                                    <h3>Hamburguesa extra queso</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/WKtPp55/hamburguesa-queso-receta.jpg" alt="Imagen 4" />
                                    <h3>Hamburguesa extra queso</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/WKtPp55/hamburguesa-queso-receta.jpg" alt="Imagen 4" />
                                    <h3>Hamburguesa extra queso</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Cards 1 (Hamburguesas) -->
                    </div>
                    <div id="item-1-2" class="tab-pane fade" role="tabpanel" aria-labelledby="item-1-2-tab">
                        <!-- Cards 2 (Pizzas) -->
                        <div class="content">
                            <div class="card-container">
                                <div class="card">
                                    <img src="https://i.ibb.co/mJ3b7bR/receta-de-pizza-sin-horno.jpg" alt="Imagen 2" />
                                    <h3>Pizza con pepperoni bañado en finas hierbas</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/mJ3b7bR/receta-de-pizza-sin-horno.jpg" alt="Imagen 2" />
                                    <h3>Pizza con pepperoni</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/mJ3b7bR/receta-de-pizza-sin-horno.jpg" alt="Imagen 3" />
                                    <h3>Pizza con pepperoni</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/mJ3b7bR/receta-de-pizza-sin-horno.jpg" alt="Imagen 4" />
                                    <h3>Pizza con pepperoni</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/mJ3b7bR/receta-de-pizza-sin-horno.jpg" alt="Imagen 4" />
                                    <h3>Pizza con pepperoni</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/mJ3b7bR/receta-de-pizza-sin-horno.jpg" alt="Imagen 4" />
                                    <h3>Pizza con pepperoni</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Cards 2 (Pizzas) -->
                    </div>
                    <div id="item-1-3" class="tab-pane fade" role="tabpanel" aria-labelledby="item-1-3-tab">
                        <!-- Cards 3 (Postres) -->
                        <div class="content">
                            <div class="card-container">
                                <div class="card">
                                    <img src="https://i.ibb.co/QCbKq8G/postre-de-maracuya.png" alt="Imagen 2" />
                                    <h3>Postre de maracuyá totalmente fresco</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/QCbKq8G/postre-de-maracuya.png" alt="Imagen 2" />
                                    <h3>Postre de maracuyá</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/QCbKq8G/postre-de-maracuya.png" alt="Imagen 3" />
                                    <h3>Postre de maracuyá</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/QCbKq8G/postre-de-maracuya.png" alt="Imagen 4" />
                                    <h3>Postre de maracuyá</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/QCbKq8G/postre-de-maracuya.png" alt="Imagen 4" />
                                    <h3>Postre de maracuyá</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>

                                <div class="card">
                                    <img src="https://i.ibb.co/QCbKq8G/postre-de-maracuya.png" alt="Imagen 4" />
                                    <h3>Postre de maracuyá</h3>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="precio"><span>$</span>15.000</p>
                                        <i class="comprar bi bi-cart"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Cards 3 (Postres) -->
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade modal-small" id="ejemplo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close-modal bi bi-x ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="card-body d-flex flex-column">
                        <div class="card-imagen-modal mb-3">
                            <img src="https://i.ibb.co/WKtPp55/hamburguesa-queso-receta.jpg" alt="" />
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title-modal">
                                Hamburguesa mexicana extra queso ultra suave 100% picante al
                                rojo vivo
                            </h5>
                            <p class="precio-modal">$15.000</p>
                        </div>
                        <p class="card-detalles-modal">Incluye bebida y papas fritas</p>
                        <p class="card-text-modal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            doloremque sunt excepturi temporibus nemo omnis. Similique,
                            placeat eveniet delectus sequi harum deserunt, eum doloremque non
                            debitis deleniti quaerat voluptate assumenda.
                        </p>
                    </div>

                    <div class="modal-footer d-flex justify-content-between">
                        <button type="button" class="botones-modal-ad">
                            Añadir al carrito
                            <i id="icono-modal" class="material-icons align-middle">arrow_forward</i>
                        </button>

                        <button type="button" class="botones-modal-cm d-flex justify-content-center">
                            <i id="icono-modal-d" class="bi bi-whatsapp"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</div>
</template>

<script>

</script>
