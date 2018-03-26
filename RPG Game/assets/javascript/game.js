($(document).ready(function(){

    //global variables

    var stats = {
        obi: {
            hp: 0,
            att: 0,
            catt: 0,
        },
        luke:{
            hp: 0,
            att: 0,
            catt: 0,
        },
        darths:{
            hp: 0,
            att: 0,
            catt: 0,
        },
        darthm:{
            hp: 0,
            att: 0,
            catt: 0,
        },
        chosen:false,
        oppon:false,
        pc=0,
        npc=0,
        init:function(){
            for(i=0;i<4;i++){
                for(j=0;j<stat[i].length;j++){
                    hp = Math.floor(Math.random()*100+25);
                    att = Math.floor(Math.random()*10+1);
                    att = Math.floor(Math.random()*10+1);
                }
            }
            chosen=false;
            oppon=false;
        },
        chosen:function(num){
            if(!chosen){
                // set chosen character field
                chosen =true;
                pc=num;
                document.getElementById("pc").innerHTML= "<img src='assets/images/'char'+ num >";
                document.getElementById("char"+num).innerHTML="";
                document.getElementById("pchp").innerHTML = stats.pc.hp;
                document.getElementById("pcatt").innerHTML = stats.pc.att;
                document.getElementById("pccatt").innerHTML = stats.pc.catt;
            }
            // if the pc is chosen set npc
            else{
                oppon=true;
                npc=num;
                document.getElementById("npc").innerHTML= "<img src='assets/images/'char'+ num >";
                document.getElementById("char"+num).innerHTML="";
                document.getElementById("npchp").innerHTML = stats.npc.hp;
            }
        },
        cmbt:function(){
            stats.pc[0]= stats.pc[0]- stats.npc[3];
            stats.pc[1]=stats.pc[1]+6;
            stats.npc[0]= stats.npc[0]-stats.pc[1];
        },
        update:function(){
            document.getElementById("npchp").innerHTML = stats.npc[0];
            document.getElementById("pchp").innerHTML=stats.pc[0];
            document.getElementById("pcatt").innerHTML=stats.pc[1];
            document.getElementById("pccatt").innerHTML=stats.pc[2];
            if(stats.pc<=0){
                document.getElementById("win-lose").innerHTML= "you died!";
            }
            for(i=0;i<4;i++){
                if(!stats.pc){
                    if(stats[i]===0){
                        console.log(stats[i]+" has lost.");
                    }
                }
            }
        }

    };

    $('#obi').on('click', function(){
        var num =0;
        stats.chosen(num);
        if(stats.oppon){
            // reveal the attack button
            document.getElementById("attbtn").innerHTML = "";
        }

    })

    $('#luke').on('click', function(){
        var num =1;
        stats.chosen(num);
        if(stats.oppon){
            // reveal the attack button
            document.getElementById("attbtn").innerHTML = "";
        }

    })

    $('#darthm').on('click', function(){
        var num =2;
        stats.chosen(num);
        if(stats.oppon){
            // reveal the attack button
            document.getElementById("attbtn").innerHTML = "";
        }

    })

    $('#darths').on('click', function(){
        var num =3;
        stats.chosen(num);
        if(stats.oppon){
            // reveal the attack button
            document.getElementById("attbtn").innerHTML = "";
        }

    })

    $('#attbtn').on('click',function(){
        // begin combat
        stats.cmbt();
        stats.update();
    })


}))