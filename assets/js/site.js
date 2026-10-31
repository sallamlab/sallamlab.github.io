/* Small enhancements: image lightbox and click-to-load YouTube embeds.
   The site works fully without JavaScript; this only adds convenience. */
(function () {
  // ---- Lightbox for gallery images ----
  var box = document.getElementById('lightbox');
  if (box) {
    var img = box.querySelector('img');
    var cap = box.querySelector('figcaption');
    var close = function () { box.hidden = true; img.src = ''; document.body.style.overflow = ''; };
    document.addEventListener('click', function (e) {
      var t = e.target;
      if (t.tagName === 'IMG' && t.closest('.gallery, .zoomable')) {
        var fig = t.closest('figure');
        img.src = t.getAttribute('data-full') || t.src;
        img.alt = t.alt || '';
        cap.textContent = fig && fig.querySelector('figcaption') ? fig.querySelector('figcaption').textContent : (t.alt || '');
        box.hidden = false;
        document.body.style.overflow = 'hidden';
      } else if (!box.hidden && (t === box || t.classList.contains('lightbox-close'))) {
        close();
      }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) close(); });
  }

  // ---- YouTube: show a thumbnail, load the player only when clicked ----
  var yts = document.querySelectorAll('.yt[data-id]');
  Array.prototype.forEach.call(yts, function (el) {
    var id = el.getAttribute('data-id');
    el.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)';
    el.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen = true;
      f.title = el.getAttribute('aria-label') || 'YouTube video';
      el.replaceWith(f);
    });
  });
})();
