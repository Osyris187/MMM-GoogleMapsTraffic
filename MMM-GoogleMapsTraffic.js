/* global Module */

/* Magic Mirror
 * Module: MMM-GoogleMapsTraffic
 *
 * By Victor Mora
 * MIT Licensed.
 */

Module.register("MMM-GoogleMapsTraffic", {

	getDom: function() {
        //center coordinates for map
        var lat = this.config.lat;
        var lng = this.config.lng;

        //zoom factor, default 10
        var zoom = (typeof this.config.zoom !== 'undefined') ? this.config.zoom : 10;

        //disable Google's buttons, default true
        var disableDefaultUI = (typeof this.config.disableDefaultUI !== 'undefined') ? this.config.disableDefaultUI : true;

        //enable traffic layer, default true
        var enableTraffic = (typeof this.config.enableTraffic !== 'undefined') ? this.config.enableTraffic : true;

        //array with style options
        var styles = Array.from(this.config.styles);

		var wrapper = document.createElement("div");
        wrapper.setAttribute("id", "map");

        wrapper.style.height = this.config.height;
        wrapper.style.width = this.config.width;

        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.config.key;
        document.body.appendChild(script);

        script.onload = function () {
            var map = new google.maps.Map(document.getElementById("map"), {
            	zoom: zoom,
            	center: {
            		lat: lat,
            		lng: lng
                },
                disableDefaultUI: disableDefaultUI,
                styles: styles
            });

            if(enableTraffic){
                var trafficLayer = new google.maps.TrafficLayer();
                trafficLayer.setMap(map);
            }
        };

		return wrapper;
	}

});
