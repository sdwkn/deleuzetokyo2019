(function () {
    'use strict';

    var conf = {};

    // Init functions, called on DOMContentLoaded event
    conf.init = function () {
        conf.map.init($('#map-canvas_camp'));
        conf.map2.init($('#map-canvas_conf'));
        conf.menu.init();
    };

    /***
        Google Maps implementation
    ***/
    conf.map = {
        marker: '/img/marker-default.png'
    };

    // Google Maps configs
    conf.map.init = function ($element) {
        conf.map.element = $element;

        conf.map.geocoder = new google.maps.Geocoder();

        conf.map.latlng = new google.maps.LatLng(0, 0);

        conf.map.options = {
            zoom: 16,
            center: conf.map.latlng,
            scrollwheel: false,
            streetViewControl: true,
            labels: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        conf.map.canvas = new google.maps.Map(conf.map.element.get(0), conf.map.options);
        conf.map.canvas.setCenter(conf.map.latlng);

        conf.map.createMarker();
    };

    conf.map.createMarker = function () {

        conf.map.address = conf.map.element.attr('data-address');

        conf.map.geocoder.geocode({ 'address': conf.map.address}, function (results, status) {

            if (status === google.maps.GeocoderStatus.OK) {

                conf.map.canvas.setCenter(results[0].geometry.location);

                new google.maps.Marker({
                    map: conf.map.canvas,
                    position: results[0].geometry.location,
                    icon: conf.map.marker
                });
            } else {
                if (window.console) {
                    console.log('Google Maps was not loaded: ', status);
                }
            }
        });
    };

    /***
        Google Maps implementation
    ***/
    conf.map2 = {
        marker: '/img/marker-default.png'
    };

    // Google Maps configs
    conf.map2.init = function ($element) {
        conf.map2.element = $element;

        conf.map2.geocoder = new google.maps.Geocoder();

        conf.map2.latlng = new google.maps.LatLng(0, 0);

        conf.map2.options = {
            zoom: 16,
            center: conf.map2.latlng,
            scrollwheel: false,
            streetViewControl: true,
            labels: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        conf.map2.canvas = new google.maps.Map(conf.map2.element.get(0), conf.map2.options);
        conf.map2.canvas.setCenter(conf.map2.latlng);

        conf.map2.createMarker();
    };

    conf.map2.createMarker = function () {

        conf.map2.address = conf.map2.element.attr('data-address');

        conf.map2.geocoder.geocode({ 'address': conf.map2.address}, function (results, status) {

            if (status === google.maps.GeocoderStatus.OK) {

                conf.map2.canvas.setCenter(results[0].geometry.location);

                new google.maps.Marker({
                    map: conf.map2.canvas,
                    position: results[0].geometry.location,
                    icon: conf.map2.marker
                });
            } else {
                if (window.console) {
                    console.log('Google Maps was not loaded: ', status);
                }
            }
        });
    };

    /***
        Create animated scroll for menu links
    ***/
    conf.menu = {
        itemsSelector: '.nav-link[href^="#"]',
        animationSpeed: 400
    };

    conf.menu.init = function () {
        conf.menu.menuItems = $(conf.menu.itemsSelector);
        conf.menu.document = $('html, body');

        conf.menu.menuItems.on('click.animateScroll', function (event) {
            event.preventDefault();

            conf.menu.animateTo(event.target);
        });
    };

    conf.menu.animateTo = function (link) {

        var $link = $(link),
            href = $link.attr('href'),
            offSetTop = $(href).offset().top;

        conf.menu.document.finish().animate({scrollTop : offSetTop}, conf.menu.animationSpeed, function () {
            location.hash = href;
        });
    };

    conf.init();
}());
