function updatemap() { 
        fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if(cases > 255){
                    color = "rgb(255,0,0)"
                }
                else{
                    color = `rgb(${cases},0,0)`
                }

                new mapboxgl.Marker({
                    color:color// color it red
                    })
                    .setLngLat([longitude,latitude])
                    .addTo(map)
            });
        }).catch(err=> console.log('err--------',err))

}
updatemap();