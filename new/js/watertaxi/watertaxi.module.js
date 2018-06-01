$(document).ready(function() {
    var startPoint = $('#bookingWaterTaxi #startPoint');
    var endPoint = $('#bookingWaterTaxi #endPoint');

    var numberTicket = 1;
    var promotionPrice = 0;

    var prices;
    var totalMoney = 0;

    var depatureDate = $('#bookingWaterTaxi #depatureDateTaxi');

    var vehicleType = $('#bookingWaterTaxi #vehicleType');

    depatureDate.datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: 0
    }).datepicker("setDate", new Date());

    $('#bookingWaterTaxi #numberTicket').val(numberTicket + " vé");

    $('#bookingWaterTaxi #upTicket').click(function () {
        numberTicket++;
        $('#bookingWaterTaxi #numberTicket').val(numberTicket + " vé");
    });

    $('#bookingWaterTaxi #downTicket').click(function () {
        if(numberTicket > 1) {
            numberTicket--;
        }
        $('#bookingWaterTaxi #numberTicket').val(numberTicket + " vé");
    });

    /*Ẩn các điểm đã chọn của điểm đầu điểm cuối để không tròng nhau*/
    $("#bookingWaterTaxi #endPoint option[value=P03k1Iq7vRvdDS]").hide();
    startPoint.change(function(){
        var id = $(this).val();
        $("#bookingWaterTaxi #endPoint option").show();
        $("#bookingWaterTaxi #endPoint option[value="+id+"]").hide();

        var index = $("#bookingWaterTaxi #startPoint").prop('selectedIndex');

        $("#bookingWaterTaxi #endPoint").prop('selectedIndex', index);

        lat = $(this).find(':selected').data('lat');
        long = $(this).find(':selected').data('long');

        pointName = $(this).find(':selected').text();

        initStartMarker(lat, long, pointName);

    });

    endPoint.change(function(){
        var id = $(this).val();
        $("#bookingWaterTaxi #startPoint option").show();
        $("#bookingWaterTaxi #startPoint option[value="+id+"]").hide();

        lat = $(this).find(':selected').data('lat');
        long = $(this).find(':selected').data('long');

        pointName = $(this).find(':selected').text();

        initEndMarker(lat, long, pointName);
    });

});