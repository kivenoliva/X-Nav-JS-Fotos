
function fotosAleatorias(){
    var fotos = [        
        'http://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Caracal_Caracal-001.jpg/320px-Caracal_Caracal-001.jpg',
        'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Agrigent_BW_2012-10-07_12-24-45.JPG/320px-Agrigent_BW_2012-10-07_12-24-45.JPG',
        'http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Apis_florea_worker_1.jpg/320px-Apis_florea_worker_1.jpg',
        'http://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cucurbita_moschata_Butternut_2012_G2.jpg/320px-Cucurbita_moschata_Butternut_2012_G2.jpg',
        'http://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Darvasa_gas_crater_panorama_crop.jpg/320px-Darvasa_gas_crater_panorama_crop.jpg',
        'http://upload.wikimedia.org/wikipedia/commons/thumb/9/99/James_Webb_Space_Telescope_Mirror37.jpg/320px-James_Webb_Space_Telescope_Mirror37.jpg'              
    ]
    
    element = document.getElementById('photo');
    fotoURL = fotos[Math.floor(Math.random()*fotos.length)]
    element.innerHTML = '<img src="' + fotoURL + '">';
    
};
