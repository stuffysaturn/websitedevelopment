mapboxgl.accessToken = 
'pk.eyJ1IjoidHN0aGVncmVhdCIsImEiOiJja3FpZTJhOWcyZmp3MndzN3gzMDR4ZTJuIn0.Uxxz9D0tNZ7NRZfbe_5p9w';

navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {enableHighAccuracy: true })

    function successLocation(position){
        console.log(position)
        setupMap([position.coords.longitude, position.coords.latitude])
    }

    function errorLocation(){
        setupMap([-2.24, 53.48])
    }
    function setupMap(center){
        
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 3
})

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');
    
    var directions = new MapboxDirections({
        accessToken: "pk.eyJ1IjoidHN0aGVncmVhdCIsImEiOiJja3FpZTJhOWcyZmp3MndzN3gzMDR4ZTJuIn0.Uxxz9D0tNZ7NRZfbe_5p9w",
    });

    map.addControl (directions, 'top-left');



}
