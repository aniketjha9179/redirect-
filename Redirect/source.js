chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { redirectUrl: "https://app.100xdevs.com/courses/" };
  },
  {
    urls: [
      "*://www.instagram.com/*",
      "*://www.pornhub.com/*",
      "*://www.qorno.com/*",
      "*://www.bhojpurisex.site/*",
      "*://xnxx.health/search/sex+video/*",
      "*://xhamster.desi/tags/bhojpuri-sex",
      "*://onlyindianx.cc/mv/sex-sex-bhojpuri-movie-chutiya-madarchod/",
      "*://www.xxxin.mobi/sex/bhojpuri-sex-hot/"

    ]
  },
  ["blocking"]
);