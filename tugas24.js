function sort_reverse(){

    var array = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

    console.log("Sebelumnya :", array.join(", "));
    
    var asc = array.sort(function(a, b){return a-b});
    console.log("Ascending :", asc.join(", "));

    console.log("Descending :", asc.reverse().join(", "));

}

sort_reverse();