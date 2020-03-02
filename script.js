var intrevel,el;
        var dot=""
        var j=0;
        var i=0;
        var blink = ["|", "/", "-", "\\"];
        function loading(){
            // --------------------dont play here ----------------------------------
            var d = new Date();
            var n = d.toLocaleTimeString();
            var day=n.slice(8);
            var time=parseInt(n);
            if(day=="PM" && time>6 ||day=="AM" && time < 6){
                var x = document.getElementById("check");
                x.setAttribute("checked", "True");
                document.getElementsByTagName("BODY")[0].style.cssText="background-color:rgb(30,30,30);";
            }
            else{
                var x = document.getElementById("check");
                x.removeAttribute("checked");
                document.getElementsByTagName("BODY")[0].style.cssText="background-color:rgb(223, 223, 223);";
            }
            // --------------------dont play here ----------------------------------
            var time=Math.floor((Math.random()*10)*2)*100;
            time+=4000;
            intrevel=Math.floor(time/4);
            dots();
        }
        function dots(){
            dot=dot+" . ";
            j+=1;
            if(j==8) return;
            document.getElementById("loading").innerHTML=" Loading "+ dot;
            el=document.getElementById("loading").innerHTML;
            blinking();
            setTimeout(dots,intrevel);
        }
        function blinking(){
            document.getElementById("loading").innerHTML=el+blink[i];
            if(i==3) i=0;
            else if(j==8) return;
            else i+=1;
            setTimeout(blinking, 200);
        }
        function slider(){
            var x=document.getElementsByTagName("BODY")[0];
            if(document.getElementById("check").checked){
                x.style.cssText = "background-color:rgb(30,30,30);"
            }
            else{
                x.style.cssText = "background-color:rgb(223, 223, 223);"
            }
        }