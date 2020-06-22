const urls = [
	'http://www.google.com/',
	'http://youtube.com/',
	'http://apple.com/',
	'http://linkedin.com/',
	'http://play.google.com/',
	'http://microsoft.com/',
	'http://support.google.com/',
	'http://www.blogger.com/',
	'http://cloudflare.com/',
	'http://en.wikipedia.org/',
	'http://adobe.com/',
	'http://wordpress.org/',
	'http://maps.google.com/',
	'http://docs.google.com/',
	'http://plus.google.com/',
	'http://googleusercontent.com/',
	'http://accounts.google.com/',
	'http://drive.google.com/',
	'http://sites.google.com/',
	'http://youtu.be/',
	'http://mozilla.org/',
	'http://vimeo.com/',
	'http://europa.eu/',
	'http://bbc.co.uk/',
	'http://github.com/',
	'http://amazon.com/',
	'http://vk.com/',
	'http://medium.com/',
	'http://bp.blogspot.com/',
	'http://istockphoto.com/',
	'http://creativecommons.org/',
	'http://facebook.com/',
	'http://cnn.com/',
	'http://gstatic.com/',
	'http://t.me/',
	'http://feedburner.com/',
	'http://hugedomains.com/',
	'http://photos.google.com/',
	'http://policies.google.com/',
	'http://imdb.com/',
	'http://dropbox.com/',
	'http://wikimedia.org/',
	'http://es.wikipedia.org/',
	'http://nytimes.com/',
	'http://google.co.jp/',
	'http://mail.ru/',
	'http://google.com.br/',
	'http://news.yahoo.com/',
	'http://paypal.com/',
	'http://google.co.uk/',
	'http://washingtonpost.com/',
	'http://line.me/',
	'http://forbes.com/',
	'http://jimdofree.com/',
	'http://theguardian.com/',
	'http://dailymotion.com/',
	'http://google.es/',
	'http://news.google.com/',
	'http://networkadvertising.org/',
	'http://whatsapp.com/',
	'http://slideshare.net/',
	'http://myspace.com/',
	'http://google.de/',
	'http://www.yahoo.com/',
	'http://reuters.com/',
	'http://mail.google.com/',
	'http://w3.org/',
	'http://msn.com/',
	'http://nih.gov/',
	'http://uol.com.br/',
	'http://fr.wikipedia.org/',
	'http://pt.wikipedia.org/',
	'http://google.fr/',
	'http://developers.google.com/',
	'http://live.com/',
	'http://bbc.com/',
	'http://globo.com/',
	'http://scribd.com/',
	'http://usatoday.com/',
	'http://themeforest.net/',
	'http://android.com/',
	'http://cpanel.com/',
	'http://ft.com/',
	'http://wikia.com/',
	'http://lefigaro.fr/',
	'http://telegram.me/',
	'http://issuu.com/',
	'http://ig.com.br/',
	'http://myaccount.google.com/',
	'http://translate.google.com/',
	'http://businessinsider.com/',
	'http://plesk.com/',
	'http://thesun.co.uk/',
	'http://dailymail.co.uk/',
	'http://huffingtonpost.com/',
	'http://amazon.co.uk/',
	'http://rt.com/',
	'http://files.wordpress.com/',
	'http://mediafire.com/',
	'http://foxnews.com/',
	'http://youronlinechoices.com/',
	'http://mirror.co.uk/',
	'http://marketingplatform.google.com/',
	'http://google.it/',
	'http://fandom.com/',
	'http://gravatar.com/',
	'http://get.google.com/',
	'http://telegraph.co.uk/',
	'http://archive.org/',
	'http://nypost.com/',
	'http://independent.co.uk/',
	'http://pinterest.com/',
	'http://www.gov.uk/',
	'http://un.org/',
	'http://google.ru/',
	'http://search.google.com/',
	'http://cdc.gov/',
	'http://code.google.com/',
	'http://abcnews.go.com/',
	'http://ebay.com/',
	'http://aliexpress.com/',
	'http://ipv4.google.com/',
	'http://techcrunch.com/',
	'http://terra.com.br/',
	'http://de.wikipedia.org/',
	'http://cpanel.net/',
	'http://bit.ly/',
	'http://steampowered.com/',
	'http://latimes.com/',
	'http://amazon.de/',
	'http://wired.com/',
	'http://wsj.com/',
	'http://ok.ru/',
	'http://bloomberg.com/',
	'http://who.int/',
	'http://privacyshield.gov/',
	'http://www.wix.com/',
	'http://harvard.edu/',
	'http://bing.com/',
	'http://booking.com/',
	'http://twitter.com/',
	'http://indiatimes.com/',
	'http://opera.com/',
	'http://amazon.co.jp/',
	'http://fb.com/',
	'http://elpais.com/',
	'http://books.google.com/',
	'http://aol.com/',
	'http://abril.com.br/',
	'http://picasaweb.google.com/',
	'http://nasa.gov/',
	'http://buydomains.com/',
	'http://change.org/',
	'http://goo.gl/',
	'http://tools.google.com/',
	'http://cnet.com/',
	'http://aboutads.info/',
	'http://draft.blogger.com/',
	'http://addthis.com/',
	'http://samsung.com/',
	'http://tinyurl.com/',
	'http://rakuten.co.jp/',
	'http://time.com/',
	'http://hm.com/',
	'http://urbandictionary.com/',
	'http://bloglovin.com/',
	'http://vchecks.me/',
	'http://whitehouse.gov/',
	'http://my.yahoo.com/',
	'http://umich.edu/',
	'http://nginx.org/',
	'http://google.nl/',
	'http://chicagotribune.com/',
	'http://columbia.edu/',
	'http://scoop.it/',
	'http://guardian.co.uk/',
	'http://ria.ru/',
	'http://kickstarter.com/',
	'http://ibm.com/',
	'http://npr.org/',
	'http://foursquare.com/',
	'http://gnu.org/',
	'http://newsweek.com/',
	'http://ovh.net/',
	'http://cbsnews.com/',
	'http://economist.com/',
	'http://ggpht.com/',
	'http://akamaihd.net/',
	'http://id.wikipedia.org/',
	'http://pixabay.com/',
	'http://netvibes.com/',
	'http://yandex.ru/',
	'http://yelp.com/',
	'http://parallels.com/',
	'http://yahoo.co.jp/',
	'http://dw.com/',
	'http://bp3.blogger.com/',
	'http://britannica.com/',
	'http://instructables.com/',
	'http://detik.com/',
	'http://amazon.fr/',
	'http://buzzfeed.com/',
	'http://nhk.or.jp/',
	'http://naver.jp/',
	'http://nokia.com/',
	'http://groups.google.com/',
	'http://lemonde.fr/',
	'http://pexels.com/',
	'http://gen.xyz/',
	'http://addtoany.com/',
	'http://ovh.com/',
	'http://quora.com/',
	'http://photos1.blogger.com/',
	'http://secureserver.net/',
	'http://gizmodo.com/',
	'http://imageshack.us/',
	'http://hp.com/',
	'http://ietf.org/',
	'http://amazon.es/',
	'http://cisco.com/',
	'http://playstation.com/',
	'http://oup.com/',
	'http://stackoverflow.com/',
	'http://wp.com/',
	'http://depositfiles.com/',
	'http://weibo.com/',
	'http://ted.com/',
	'http://rtve.es/',
	'http://list-manage.com/',
	'http://m.wikipedia.org/',
	'http://google.com.tw/',
	'http://tes.com/',
	'http://bandcamp.com/',
	'http://mozilla.com/',
	'http://walmart.com/',
	'http://unesco.org/',
	'http://ign.com/',
	'http://abc.net.au/',
	'http://ja.wikipedia.org/',
	'http://express.co.uk/',
	'http://over-blog-kiwi.com/',
	'http://noaa.gov/',
	'http://instagram.com/'
];

async function getWebsites() {
	return urls.slice(0,10);
	// return urls;
	// return ['https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html', 'https://red-badger.com/'];
}

export default getWebsites;
