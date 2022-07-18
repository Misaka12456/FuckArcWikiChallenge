// ==UserScript==
// @name         FuckArcWikiChallenge
// @namespace    https://github.com/Misaka12456/FuckArcWikiChallenge
// @version      0.3.0
// @description  绕过Arcaea中文Wiki的技术类隐藏页面验证
// @author       Misaka12456
// @match        https://wiki.arcaea.cn/*
// @icon         https://pic.rmb.bdstatic.com/bjh/3a01f3977ca05bb86115fe2fb144ba21.png
// @grant        none
// @require      https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);
console.log('FuckArcWikiChallenge Loaded');
$(document).ready(function () {
	if ($('#autohidden').length > 0) {
		document.evaluate('/html/body/div/div/div[1]/div[3]/main/div[2]/div[3]/div[1]/table/tbody/tr/td[1]/div/img', document).iterateNext().src = "https://pic.rmb.bdstatic.com/bjh/3a01f3977ca05bb86115fe2fb144ba21.png";
		console.debug('[FuckArcWikiChallenge]Replaced Visibility Icon');
		$('#autohidden').replaceAll('<p></p>');
		console.debug('[FuckArcWikiChallenge]Cleared Question Div');
		$('#autoshow').removeAttr('class', 'test-hidden-2');
		console.debug('[FuckArcWikiChallenge]Showed Confirm Prompt');
		$('.test-hidden').removeAttr('class', 'test-hidden');
		console.debug('[FuckArcWikiChallenge]Showed Main Hidden Part');
	}
	else {
		console.log('No element of id "autohidden" found. FuckArcWikiChallenge will ignore current page.');
	}
});