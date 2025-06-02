(function() {
  console.log("[ShortLoop+] v5.5 loaded");
  let video = document.querySelector("video");
  let lastScroll = 0;

  function autoScroll() {
    video = document.querySelector("video");
    if (!video) return requestAnimationFrame(autoScroll);

    if (!video.paused && video.currentTime > 0 && Math.abs(video.currentTime - video.duration) < 0.3 && Date.now() - lastScroll > 2000) {
      console.log("[ShortLoop+] Scrolling to next...");
      document.dispatchEvent(new KeyboardEvent("keydown", {key: "ArrowDown", code: "ArrowDown", bubbles: true}));
      lastScroll = Date.now();
    }

    if (video.currentTime < 1 && !video.paused) {
      console.log("[ShortLoop+] Reset scroll trigger.");
    }

    requestAnimationFrame(autoScroll);
  }

  autoScroll();
})();