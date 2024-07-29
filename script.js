document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const mainContent = document.getElementById("main-content");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const content = event.target.getAttribute("data-content");
      loadContent(content);
    });
  });

  function loadContent(content) {
    switch (content) {
      case "home":
        mainContent.innerHTML =
          "<h1>Bienvenidos a Nuestro Café bar</h1><p>Disfruta de una experiencia inolvidable.</p>";
        break;
      case "menu":
        mainContent.innerHTML =
          ` <div class="container">
        <div class="menu-section">
            <h2>Cafés</h2>
            <div class="menu-item">
                <span class="menu-item-name">Espresso</span>
                <span class="menu-item-price">$2.00</span>
            </div>
            <div class="menu-item">
                <span class="menu-item-name">Café Americano</span>
                <span class="menu-item-price">$2.50</span>
            </div>
            <div class="menu-item">
                <span class="menu-item-name">Capuchino</span>
                <span class="menu-item-price">$3.00</span>
            </div>
            <div class="menu-item">
                <span class="menu-item-name">Latte</span>
                <span class="menu-item-price">$3.50</span>
            </div>
        </div>
        <div class="menu-section">
            <h2>Tés</h2>
            <div class="menu-item">
                <span class="menu-item-name">Té Verde</span>
                <span class="menu-item-price">$2.00</span>
            </div>
            <div class="menu-item">
                <span class="menu-item-name">Té Negro</span>
                <span class="menu-item-price">$2.00</span>
            </div>
            <div class="menu-item">
                <span class="menu-item-name">Té de Hierbas</span>
                <span class="menu-item-price">$2.50</span>
            </div>
        </div>
        <div class="menu-section">
            <h2>Snacks</h2>
            <div class="menu-item">
                <span class="menu-item-name">Croissant</span>
                <span class="menu-item-price">$2.50</span>
            </div>
            <div class="menu-item">
                <span class="menu-item-name">Muffin</span>
                <span class="menu-item-price">$2.00</span>
            </div>
            <div class="menu-item">
                <span class="menu-item-name">Tostada con Aguacate</span>
                <span class="menu-item-price">$3.50</span>
            </div>`
        break;
      case "about":
        mainContent.innerHTML =
         `<div class="container">
        <div class="history-section">
            <h2>Nuestros Comienzos</h2>
            <p>
                Luna y Latte abrió sus puertas por primera vez en el año 2010 en el corazón de Medellín. Fundado por dos amigos apasionados por el café y la cultura, el objetivo era crear un espacio acogedor donde las personas pudieran disfrutar de un café excepcional mientras se conectaban con otros en un ambiente relajado y cómodo.
            </p>
        </div>
        <div class="history-section">
            <h2>Inspiración y Nombre</h2>
            <p>
                El nombre "Luna y Latte" surge de la combinación de dos elementos que simbolizan el balance perfecto: la serenidad de la luna y la calidez de un latte bien preparado. Este nombre refleja nuestro compromiso de ofrecer una experiencia equilibrada y placentera a cada cliente.
            </p>
        </div>
        <div class="history-section">
            <h2>Crecimiento y Comunidad</h2>
            <p>
                Con el tiempo, Luna y Latte se ha convertido en un punto de encuentro favorito para los locales y turistas. Hemos expandido nuestro menú para incluir una variedad de bebidas, desde los clásicos espressos hasta innovadoras infusiones de té, así como una selección de deliciosos pasteles y bocadillos.
            </p>
            <p>
                Nuestra comunidad es el corazón de Luna y Latte. Nos enorgullece apoyar a los productores locales y colaborar con artistas y músicos de la zona para crear un espacio vibrante y lleno de vida. Cada evento, desde exposiciones de arte hasta noches de música en vivo, busca enriquecer la experiencia de nuestros visitantes.
            </p>
        </div>
        <div class="history-section">
            <h2>Misión y Visión</h2>
            <p>
                Nuestra misión es ofrecer no solo un excelente café, sino también un lugar donde las personas puedan relajarse, trabajar y conectar. Nos esforzamos por mantener los más altos estándares de calidad en todos nuestros productos y servicios.
            </p>
            <p>
                Mirando hacia el futuro, nuestra visión es expandir Luna y Latte a nuevas ubicaciones, llevando nuestro amor por el café y la comunidad a más personas. Queremos seguir siendo un referente de calidad y hospitalidad, siempre innovando y adaptándonos a las necesidades de nuestros clientes.
            </p>
        </div> `
        break;
      case "contact":
        mainContent.innerHTML =
          `<div class="container">
        <div class="contact-section">
            <h2>Información de Contacto</h2>
            <div class="contact-item">
                <strong>Dirección:</strong>
                Carrera 43F #12-34, Medellín, Colombia
            </div>
            <div class="contact-item">
                <strong>Teléfono:</strong>
                +57 321 514 5421
            </div>
            <div class="contact-item">
                <strong>Email:</strong>
                contacto@lunaylatte.com
            </div>
        </div>
        <div class="contact-section">
            <h2>Envíanos un Mensaje</h2>
            <form class="contact-form" action="mailto:contacto@lunaylatte.com" method="post" enctype="text/plain">
                <input type="text" name="nombre" placeholder="Tu Nombre" required>
                <input type="email" name="email" placeholder="Tu Email" required>
                <textarea name="mensaje" rows="5" placeholder="Tu Mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>` 
        
        break;
        case "FormasPago":
          mainContent.innerHTML =
            `<div class="payment-container">
        <h1>Formas de Pago</h1>
        <div class="payment-method">
            <h2>Efectivo</h2>
            <p>Pagos directos en moneda local. Aceptamos billetes y monedas en buen estado.</p>
        </div>
        <div class="payment-method">
            <h2>Tarjetas de Crédito y Débito</h2>
            <p>Aceptamos todas las tarjetas de crédito y débito principales, incluyendo Visa, MasterCard y American Express.</p>
        </div>
        <div class="payment-method">
            <h2>Transferencias Bancarias</h2>
            <p>Puedes realizar una transferencia bancaria directa desde tu cuenta. Contacta con nuestro personal para más detalles.</p>
        </div>
        <div class="payment-method">
            <h2>Pago Móvil</h2>
            <p>Aceptamos pagos a través de aplicaciones móviles como PayPal, Google Pay y Apple Pay.</p>
        </div>`; 
          break;
          case "Ubicación":
            mainContent.innerHTML =
             `<div class="container">
        <div class="location-section">
            <h2>Nos Encontramos en Medellín</h2>
            <p><strong>Dirección:</strong> Carrera 43F #12-34, Medellín, Colombia</p>
            <p><strong>Teléfono:</strong> +57 123 456 7890</p>
            <p><strong>Email:</strong> contacto@lunaylatte.com</p>
        </div>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.611604239131!2d-75.567062184645!3d6.230833295486209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442829b1b1b7d1%3A0xf0eeb5a243df3df1!2sCarrera%2043F%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2ses!4v1620314015878!5m2!1ses!2ses" allowfullscreen="" loading="lazy"></iframe>
        </div>`; 
            break;
    }
  }
});
