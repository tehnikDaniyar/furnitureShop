/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'_icon-arrow-down': '&#xe900;',
		'_icon-arrow-link': '&#xe901;',
		'_icon-cart': '&#xe902;',
		'_icon-favorite': '&#xe903;',
		'_icon-location': '&#xe904;',
		'_icon-phone': '&#xe905;',
		'_icon-search': '&#xe906;',
		'_icon-send': '&#xe907;',
		'_icon-share': '&#xe908;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/_icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
