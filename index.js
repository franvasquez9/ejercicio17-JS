function initMap() {
    const posicion1 = {
    lat: 41.379966,
    lng: 2.122656
    
    }
    const posicion2 = {
        lat: -12.150869,
        lng: -77.015039
        
    }
    const posicion3 = {
        lat: 10.993014,
        lng: -63.974996
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion1
    })

    marker = new google.maps.Marker({
        position: posicion1,
        map,
        title: "Posición 1"
    })
    marker = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Lima"
    })
    marker = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Casa"
    })
    
}
