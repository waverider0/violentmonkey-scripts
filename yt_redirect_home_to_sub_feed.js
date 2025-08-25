// ==UserScript==
// @name         yt redirect home to subscriptions
// @match        *://www.youtube.com/*
// ==/UserScript==

(function() {
	'use strict';

	const redirect = () => {
		const path = location.pathname + location.search;
		if (path === '/') {
			history.replaceState(null, '', '/feed/subscriptions');
			location.replace('/feed/subscriptions');
		}
	};

	const observeUrlChange = () => {
		let lastUrl = location.href;
		new MutationObserver(() => {
			const currentUrl = location.href;
			if (currentUrl !== lastUrl) {
				lastUrl = currentUrl;
				redirect();
			}
		}).observe(document, { subtree: true, childList: true });
	};

	redirect();
	observeUrlChange();
})();
