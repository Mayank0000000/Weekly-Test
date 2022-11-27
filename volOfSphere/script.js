function Vol () {
    var val = document.getElementById("radius").value;
    var parse = parseInt(val);
    var vol = (4.0/3.0)*Math.PI*Math.pow(parse, 3);
    document.getElementById("volume").value = vol;

}