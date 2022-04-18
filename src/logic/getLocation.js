export function getLocation() {
    let info = new Object();
    fetch("https://ipinfo.io/json?token=509cd3c1cb5cb3").then(
        (response) => response.json()
    ).then(
        function(jsonResponse) {
            info.country = jsonResponse.country;
            info.city = jsonResponse.city;
        }
    )
    return info;
}