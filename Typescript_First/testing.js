//-------------------------------------------------------NUMBER-------------------------------------------------
{
    var kartik = {
        fname: "Kartik",
        lname: "yadav",
        year: 5,
        myfun: function () {
            return 1111;
        }
    };
    kartik.fname = "Nalin";
    // kartik.lname= "singh"         //readonly wont allow to change
    console.log(kartik.fname);
    console.log(kartik.myfun());
    console.log(kartik.year);
}
