(function () {
    const canvas = document.querySelector('.bg-canvas');
    const ctx = canvas.getContext('2d');
    const video = document.querySelector('.bg-video');

    video.addEventListener('play', draw);
		
    function draw() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      if (video.paused || video.ended) return false;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      requestAnimationFrame(draw);
    }
  })();