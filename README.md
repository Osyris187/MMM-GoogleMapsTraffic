# MMM-GoogleMapsTraffic

![Alt text](/img/mmm-googlemapstraffic.png "A preview of the MMM-GoogleMapsTraffic module.")

A module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) that displays a map, centered at provided coordinates, with Google Maps Traffic information.

## Using the module

To use this module, clone this repo to your `MagicMirror/modules/` directory.

`git clone https://github.com/vicmora/MMM-GoogleMapsTraffic.git`

And add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-GoogleMapsTraffic',
            config: {
                key: 'YOUR_KEY',
                lat: 37.8262306,
                lng: -122.2920096,
                height: '300px',
                width: '300px',
                zoom: 12,
                enableTraffic: true,
                disableDefaultUI: true,
                styles: [
                    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#d59563'}]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#d59563'}]
                    },
                    {
                        featureType: 'poi.park',
                            elementType: 'geometry',
                            stylers: [{color: '#263c3f'}]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#6b9a76'}]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{color: '#38414e'}]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                            stylers: [{color: '#212a37'}]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                            stylers: [{color: '#9ca5b3'}]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{color: '#746855'}]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#1f2835'}]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#f3d19c'}]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{color: '#2f3948'}]
                    },
                    {
                            featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#d59563'}]
                    },
                    {
                            featureType: 'water',
                            elementType: 'geometry',
                        stylers: [{color: '#17263c'}]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#515c6d'}]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{color: '#17263c'}]
                    }
                ]
            }
        }
    ]
}
```

## Configuration options

| Option    | Description
|---------- |-----------
| `key`     | *Required* Google api key. See below for help.
| `lat`     | *Required* Latitude used to center the map. See below for help. <br><br>**Type:** `float`
| `lng`     | *Required* Longitude used to center the map. See below for help. <br><br>**Type:** `float`
| `height`  | *Required* Height of the map. <br><br>**Type:** `string` (pixels)
| `width`   | *Required* Width of the map. <br><br>**Type:** `string` (pixels)
| `zoom`    | *Required* Zoom level, smaller to zoom in, bigge to zoom out. <br><br>**Type:** `number`
| `enableTraffic`   | Enable traffic layer, default: true. <br><br>**Type:** `boolean`
| `diableDefaultUI` | Disable Google buttons UI, default: true. <br><br>**Type:** `boolean`
| `styles`  | Style array for modification of map elements, see Google Maps style guide.

## Google API Key

Obtain an api at [Google Developer's page](https://developers.google.com/maps/documentation/javascript/).

## Coordinates

The easiest way to obtain latitude and longitude coordinates is via [Google Maps](https://maps.google.com). Type an address, location, or center the map where you'd like it centered. The coordinates will appear in the address bar as seen below.

![Alt text](/img/coordinates.png "Google Maps coordinates.")

## Map Style

See map formatting guide by Google for a general guide: https://developers.google.com/maps/documentation/javascript/styling
For an interactive configuration and preview, see: https://mapstyle.withgoogle.com/
