// ==UserScript==
// @name           Hide Ignored Posts
// @namespace      KeenIIDX
// @description    Completely hide posts made by ignored users.
// @include        http://www.tivocommunity.com/tivo-vb/showthread.php*
// @author         Elliott Wilcoxon
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js
// @grant          none

// ==/UserScript==

function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};

with_jquery(function($) {
	$('td.thead > a:contains("View Post")').parents('#posts > div').hide();
});