const ContenedorQR = document.getElementById('ImagenQR');
const FormularioQR = document.getElementById('Formulario');

const QR = new QRCode(ContenedorQR);

FormularioQR.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(FormularioQR.link.value);
})
