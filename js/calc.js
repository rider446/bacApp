/**
 * Created by Rider446 on 4/9/2015.
 */

//If JS is enabled add a class so we can hide the form ASAP (and only for JS enabled browsers)

var drinks = "";
var weight = "";
var time = "";
var temp = 0;
var temp2 = 2;

var bacArray = [
    [0.038,0.075,0.113,0.15,0.188,0.225,0.263,0.3,0.338,0.375,0.413,0.45  ],
    [0.034,0.066,0.103,0.137,0.172,0.207,0.241,0.275,0.309,0.344,0.379,0.412  ],
    [0.031,0.063,0.094,0.125,0.156,0.188,0.219,0.25,0.281,0.313,0.344,0.375  ],
    [0.029,0.058,0.087,0.116,0.145,0.174,0.203,0.232,0.261,0.29,0.32,0.348  ],
    [0.027,0.054,0.08,0.107,0.134,0.161,0.188,0.214,0.241,0.268,0.295,0.321  ],
    [0.025,0.05,0.075,0.1,0.125,0.151,0.176,0.201,0.226,0.251,0.276,0.301  ],
    [0.023,0.047,0.07,0.094,0.117,0.141,0.164,0.188,0.211,0.234,0.258,0.281  ],
    [0.022,0.045,0.066,0.088,0.11,0.132,0.155,0.178,0.2,0.221,0.244,0.265  ],
    [0.021,0.042,0.063,0.083,0.104,0.125,0.146,0.167,0.188,0.208,0.229,0.25  ],
    [0.02,0.04,0.059,0.079,0.099,0.119,0.138,0.158,0.179,0.198,0.217,0.237  ],
    [0.019,0.038,0.056,0.075,0.094,0.113,0.131,0.15,0.169,0.188,0.206,0.225  ],
    [0.018,0.036,0.053,0.071,0.09,0.107,0.125,0.143,0.161,0.179,0.197,0.215  ],
    [0.017,0.034,0.051,0.068,0.085,0.102,0.119,0.136,0.153,0.17,0.188,0.205  ],
    [0.016,0.032,0.049,0.065,0.081,0.098,0.115,0.13,0.147,0.163,0.18,0.196  ],
    [0.016,0.031,0.047,0.063,0.078,0.094,0.109,0.125,0.141,0.156,0.172,0.188  ]
];

document.documentElement.className = 'js';
//add the jQuery click/show/hide behaviours:
$(document).ready(function(){
    $(".reply").click(function(){
        if($("#drinkForm").is(":visible")){
            $("#drinkForm").hide();
            $("#weightForm").hide();
            $("#timeForm").hide();
        } else {
            $("#drinkForm").show();
            $("#weightForm").show();
            $("#timeForm").show();
        }
        //don't follow the link (optional, seen as the link is just an anchor)
        return false;
    });

    $(".bigResult").hide();

    $( "#drink" )
        .change(function () {
            drinks ="";
            $( "#drink option:selected" ).each(function() {
                drinks = $("#drink").val();
                drinks = parseInt(drinks);
            });
            $( ".test" ).text( drinks );
        })
        .change();

    $( "#weight" )
        .change(function () {
            weight ="";
            $( "#weight option:selected" ).each(function() {
                weight = $("#weight").val();
                weight = parseInt(weight);
            });
            $( ".test2" ).text( weight );
        })
        .change();

    $( "#time" )
        .change(function () {
            time ="";
            $( "#time option:selected" ).each(function() {
                time = $("#time").val();
                time = parseFloat(time) * .015;
                if( weight >= 0)
                {
                    temp = bacArray[weight][drinks];
                    temp2 = temp - time;
                    if( temp2 < 0)
                    {
                        temp2 = 0;
                    }
                    $(".bigResult").show();
                    $( ".resultMessage" ).text( "Your BAC results are:");
                    $( ".result" ).text( temp2.toFixed(3));
                    if( temp2 >= .08 )
                    {
                        $( ".noDrive" ).text( "DO NOT DRIVE, CALL A TAXI!!!!");
                    }
                }
            });
           $( ".test3" ).text( time);
            $( ".test4" ).text( temp);

        })
        .change();






});

    /*$.getJSON( "json/bacChartArray.json", function(){
        console.log("success");
        $.each([weight], function(){
            temp = [weight];
        })

    });*/
