
/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

function modal_app() {
    Swal.fire({
        html:
            '<div class="video-apk">' +
            ' <video class="v-apk" width="285px" height="auto"  autoplay muted loop>' +
            '<source src="https://res.cloudinary.com/lhuis/video/upload/v1675652072/videos/kkismnocvltefw6qyx7s.mp4" type="video/mp4">' +
            '</video>' +
            '</div>' +
            '<div class="pasaword">' +
            '<a  href="https://bit.ly/3JQZJ06"  target="_blank">' +
            '<button  class="bt-msj-descargar" >Descargar App</button></a>' +
            '<img class="qr-apk" src="img/qr-apk.png" alt="">'+
            '</div>'+
            '<h3 class="bm-4">Black Filter</h3>',
        //tamaño
        willOpen: '4',
        Button: '5',
        imageWidth: 300,
        imageHeight: 400,
        //cerrar,
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',
        backdrop: `
        rgba(73, 73, 73, 0.5)
          left top
          no-repeat
        `,
    })
}

function logo() {
Swal.fire({
    html: '<h3>Tu vida tus reglas</h3>',
    imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1666793201/ABAUT/Lhuis-modified_nhlzfy.png',
   //tamaño
    imageWidth: 300,
    imageHeight: 300,
    //cerrar
    padding:'1rem',
    showCloseButton:true,
    showConfirmButton:false,
    background:'linear-gradient(#000,#000)',
    
    
})
}
function qr() {
    Swal.fire({
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1695777987/qr-code_9_nqtr3b.png',
       //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
        background:'linear-gradient(#000,#000)',
        
        
    })
    }

    function red() {
        Swal.fire({
            html: '<div class="red"><h4>Redes sociales Fotografia</h4>'+
            '<div class="red-f">'+
            '<i class="fa-brands fa-instagram fa-bounce ico-fp"></i>'+
            '<i class="fa-brands fa-whatsapp fa-bounce ico-fp"></i>'+
            '<i class="fa-brands fa-twitter fa-bounce ico-fp"></i>'+
            '<i class="fa-brands fa-google-play fa-bounce ico-fp"></i>'+
            '<i class="fa-solid fa-envelope fa-bounce ico-fp"></i>'+
            '<i class="fa-brands fa-tiktok fa-bounce ico-fp"></i>'+
            '<i class="fa-brands fa-snapchat fa-bounce ico-fp"></i>'+
            '<i class="fa-brands fa-youtube fa-bounce ico-fp"></i>'+
            '<i class="fa-brands fa-facebook fa-bounce ico-fp"></i>'+
            '<i class="fa-brands fa-square-threads fa-bounce  ico-fp"></i>'+
            '<i class="fa-brands fa-pinterest fa-bounce ico-fp"></i>'+
            '</div><h4>Redes sociales Personal</h4>'+
            '<div class="red-p">'+
            '<i class="fa-brands fa-discord fa-bounce ico-fp"></i>'+
            '<i class="fa-brands fa-line fa-bounce ico-fp"></i>'+
            '</div>'+
            '</div>',
           //tamaño
            imageWidth: 300,
            imageHeight: 300,
            //cerrar
            padding:'1rem',
            showCloseButton:true,
            showConfirmButton:false,
            background:'linear-gradient(#000,#000)',
        })
        }