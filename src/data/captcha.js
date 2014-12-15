var searchCaptcha = document.body.innerHTML.match(/creds_0=(.*?)&/);
if (searchCaptcha) {
	var searchField = document.body.innerHTML.match(/getMyElementById\("(.*?)"\).value="";/); 
	elem = document.getElementById(searchField[1]) || document.getElementById("credential_1"); 
	elem.value = "working"; 
	var sigs = {3755:"0", 2787:"1", 2851:"2", 2460:"3", 3363:"4", 3329:"5", 3634:"6", 3661:"7", 2794:"8", 3030:"9", 2676:"a", 3239:"b", 2938:"c", 2396:"d", 2006:"e", 2791:"f"}, sep = [76, 65, 77, 69, 51, 46, 57, 55];
	var oReq = new XMLHttpRequest;
    oReq.open("GET", "https://epp.rotld.ro/domadmin/cgi-bin/play_captcha?creds_0=" + searchCaptcha[1] + "&creds_1=ro", true), oReq.responseType = "arraybuffer", oReq.onload = function() {
        var t = oReq.response;
		if (t) {
			var code = "", start = -1, bytes = new Uint8Array(t);
			for (var i = 0; i < bytes.byteLength-sep.length; i++) {
				for (var found = 0, k = 0; k < sep.length && sep[k] == bytes[i + k]; k++) {
					found++;
				}
				if(found == sep.length) {
					if (start != -1 && i-start > 1000 && i-start in sigs) {
						code += sigs[i-start];
					}
					start = i;
				}
			}
			elem.value = code;
		}
    }, oReq.send(null)
}