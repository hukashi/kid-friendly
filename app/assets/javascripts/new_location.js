var newPlace;
var locationData;

function setupAutoComplete() {
  var input = document.getElementById('searchTextField');
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    newPlace = autocomplete.getPlace();
    locationData = {name: newPlace.name, place_id: newPlace.place_id, lng: newPlace.geometry.location.K, lat: newPlace.geometry.location.G, formatted_address: newPlace.formatted_address, formatted_phone_number: newPlace.formatted_phone_number}
    $('#search-data-name').text('Name:' + newPlace.name)
    $('#search-data-address').text('Address:' + newPlace.formatted_address)
    $('#create-submit-btn').toggle(true);
    });

    $("#new_location").on('submit', function(event){
      for(var key in locationData){
        $('<input />').attr('type', 'hidden')
        .attr('name', "location[" + key + "]")
        .attr('value', locationData[key])
        .prependTo('#new_location');
    };
  });
};

$(document).ready(function(){
  var target = $('#searchTextField');
  if (target.length > 0) {
    setupAutoComplete();
  }
});


