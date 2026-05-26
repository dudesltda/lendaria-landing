(function () {
  var seenContentImages = 0;

  function isLogo(img) {
    var src = img.getAttribute('src') || '';
    return /\/logo\/|mark-|lockup-|favicon/.test(src);
  }

  function isContentImage(img) {
    return !isLogo(img) && !img.closest('nav, header');
  }

  function tuneImage(img) {
    if (img.__lendariaPerfTuned) return;
    img.__lendariaPerfTuned = true;

    if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');

    if (!isContentImage(img)) return;

    seenContentImages += 1;
    if (seenContentImages === 1) {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'eager');
      if (!img.hasAttribute('fetchpriority')) img.setAttribute('fetchpriority', 'high');
      return;
    }

    if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
  }

  function tuneVideo(video) {
    if (video.__lendariaPerfTuned) return;
    video.__lendariaPerfTuned = true;
    if (!video.hasAttribute('preload')) video.setAttribute('preload', 'metadata');
  }

  function tuneNode(node) {
    if (!node || node.nodeType !== 1) return;
    if (node.tagName === 'IMG') tuneImage(node);
    if (node.tagName === 'VIDEO') tuneVideo(node);
    node.querySelectorAll && node.querySelectorAll('img').forEach(tuneImage);
    node.querySelectorAll && node.querySelectorAll('video').forEach(tuneVideo);
  }

  new MutationObserver(function (records) {
    records.forEach(function (record) {
      record.addedNodes.forEach(tuneNode);
    });
  }).observe(document.documentElement, { childList: true, subtree: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { tuneNode(document); }, { once: true });
  } else {
    tuneNode(document);
  }
})();
