$(document).ready(function(){
    $("#section0_02 article:nth-of-type(1)").click(function(){
        $("#bglayer").show();
        $("#overlayer01").show();
    });
    $("#bglayer").click(function(){
        $(this).hide();
        $("#overlayer01").hide();
    });
    $("#section0_02 article:nth-of-type(2)").click(function(){
        $("#bglayer").show();
        $("#overlayer02").show();
    });
    $("#bglayer").click(function(){
        $(this).hide();
        $("#overlayer02").hide();
    });
    $("#section0_02 article:nth-of-type(3)").click(function(){
        $("#bglayer").show();
        $("#overlayer03").show();
    });
    $("#bglayer").click(function(){
        $(this).hide();
        $("#overlayer03").hide();
    });
});