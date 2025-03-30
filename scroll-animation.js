
console.log("🚀 Scroll animation script loaded");

const frames = ['https://freight.cargo.site/t/original/i/B2282347432773749505232004697254/frame_000.jpg', 'https://freight.cargo.site/t/original/i/H2282347432792196249305714248870/frame_001.jpg', 'https://freight.cargo.site/t/original/i/O2282347432810642993379423800486/frame_002.jpg', 'https://freight.cargo.site/t/original/i/N2282347432829089737453133352102/frame_003.jpg', 'https://freight.cargo.site/t/original/i/D2282347432847536481526842903718/frame_004.jpg', 'https://freight.cargo.site/t/original/i/O2282347432865983225600552455334/frame_005.jpg', 'https://freight.cargo.site/t/original/i/Y2282347432884429969674262006950/frame_006.jpg', 'https://freight.cargo.site/t/original/i/V2282347432902876713747971558566/frame_007.jpg', 'https://freight.cargo.site/t/original/i/O2282347432921323457821681110182/frame_008.jpg', 'https://freight.cargo.site/t/original/i/E2282347432939770201895390661798/frame_009.jpg'];

const frameEl = document.getElementById("animation-frame");
const totalFrames = frames.length;

frameEl.src = frames[0];

function updateFrame() {
  const scrollTop = document.getElementById("scroll-wrapper").scrollTop;
  const maxScroll = document.getElementById("scroll-wrapper").scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;
  const index = Math.min(totalFrames - 1, Math.floor(scrollFraction * totalFrames));
  frameEl.src = frames[index];
  console.log(`🔁 Frame ${index}:`, frames[index]);
}

document.getElementById("scroll-wrapper").addEventListener("scroll", updateFrame);
window.addEventListener("load", updateFrame);
