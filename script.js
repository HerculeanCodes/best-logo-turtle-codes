function bgl1()
     {
         document.getElementById("1").style.backgroundColor="aqua"
    }
            
function bgl2()
    {
        document.getElementById("2").style.backgroundColor="aqua"
    }
            
function bgl3()
    {
         document.getElementById("3").style.backgroundColor="aqua"
    }
            
function bgl4()
    {
        document.getElementById("4").style.backgroundColor="aqua"
    }
            
function bgl5()
    {
        document.getElementById("5").style.backgroundColor="aqua"
    }
            
function bgl6()
    {
        document.getElementById("6").style.backgroundColor="aqua"
    }
            
function bg1()
    {
        document.getElementById("1").style.backgroundColor="paleturquoise"
    }
            
function bg2()
    {
        document.getElementById("2").style.backgroundColor="paleturquoise"
    }
            
function bg3()
    {
        document.getElementById("3").style.backgroundColor="paleturquoise"
    }
            
function bg4()
    {
        document.getElementById("4").style.backgroundColor="paleturquoise"
    }
            
function bg5()
    {
        document.getElementById("5").style.backgroundColor="paleturquoise"
    }
            
function bg6()
    {
        document.getElementById("6").style.backgroundColor="paleturquoise"
    }

    if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Reloading.');
	}