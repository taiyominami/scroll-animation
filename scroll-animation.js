window.onload = function () {
  console.log("🚀 Scroll animation script loaded");

  const frames = [
    "https://freight.cargo.site/t/original/i/B2282347432773749505232004697254/frame_000.jpg",
"https://freight.cargo.site/t/original/i/H2282347432792196249305714248870/frame_001.jpg",
"https://freight.cargo.site/t/original/i/O2282347432810642993379423800486/frame_002.jpg",
"https://freight.cargo.site/t/original/i/N2282347432829089737453133352102/frame_003.jpg",
"https://freight.cargo.site/t/original/i/D2282347432847536481526842903718/frame_004.jpg",
"https://freight.cargo.site/t/original/i/O2282347432865983225600552455334/frame_005.jpg",
"https://freight.cargo.site/t/original/i/Y2282347432884429969674262006950/frame_006.jpg",
"https://freight.cargo.site/t/original/i/V2282347432902876713747971558566/frame_007.jpg",
"https://freight.cargo.site/t/original/i/O2282347432921323457821681110182/frame_008.jpg",
"https://freight.cargo.site/t/original/i/E2282347432939770201895390661798/frame_009.jpg",
"https://freight.cargo.site/t/original/i/S2282347432958216945969100213414/frame_010.jpg",
"https://freight.cargo.site/t/original/i/H2282347432976663690042809765030/frame_011.jpg",
"https://freight.cargo.site/t/original/i/A2282347432995110434116519316646/frame_012.jpg",
"https://freight.cargo.site/t/original/i/P2282347433013557178190228868262/frame_013.jpg",
"https://freight.cargo.site/t/original/i/G2282347433032003922263938419878/frame_014.jpg",
"https://freight.cargo.site/t/original/i/V2282347433050450666337647971494/frame_015.jpg",
"https://freight.cargo.site/t/original/i/W2282347433068897410411357523110/frame_016.jpg",
"https://freight.cargo.site/t/original/i/H2282347433087344154485067074726/frame_017.jpg",
"https://freight.cargo.site/t/original/i/S2282347433105790898558776626342/frame_018.jpg",
"https://freight.cargo.site/t/original/i/B2282347433124237642632486177958/frame_019.jpg",
"https://freight.cargo.site/t/original/i/X2282347433142684386706195729574/frame_020.jpg"
"https://freight.cargo.site/t/original/i/I2282347433161131130779905281190/frame_021.jpg",
"https://freight.cargo.site/t/original/i/S2282347433179577874853614832806/frame_022.jpg",
"https://freight.cargo.site/t/original/i/X2282347433198024618927324384422/frame_023.jpg",
"https://freight.cargo.site/t/original/i/M2282347433216471363001033936038/frame_024.jpg",
"https://freight.cargo.site/t/original/i/B2282347433234918107074743487654/frame_025.jpg",
"https://freight.cargo.site/t/original/i/C2282347433253364851148453039270/frame_026.jpg",
"https://freight.cargo.site/t/original/i/C2282347433271811595222162590886/frame_027.jpg",
"https://freight.cargo.site/t/original/i/K2282347433290258339295872142502/frame_028.jpg",
"https://freight.cargo.site/t/original/i/S2282347433308705083369581694118/frame_029.jpg",
"https://freight.cargo.site/t/original/i/W2282347433327151827443291245734/frame_030.jpg"
"https://freight.cargo.site/t/original/i/H2282347433345598571517000797350/frame_031.jpg",
"https://freight.cargo.site/t/original/i/A2282347433364045315590710348966/frame_032.jpg",
"https://freight.cargo.site/t/original/i/I2282347433382492059664419900582/frame_033.jpg",
"https://freight.cargo.site/t/original/i/L2282347433400938803738129452198/frame_034.jpg",
"https://freight.cargo.site/t/original/i/V2282347433419385547811839003814/frame_035.jpg",
"https://freight.cargo.site/t/original/i/M2282347433437832291885548555430/frame_036.jpg",
"https://freight.cargo.site/t/original/i/D2282347433456279035959258107046/frame_037.jpg",
"https://freight.cargo.site/t/original/i/F2282347433474725780032967658662/frame_038.jpg",
"https://freight.cargo.site/t/original/i/Y2282347433493172524106677210278/frame_039.jpg",
"https://freight.cargo.site/t/original/i/T2282347433511619268180386761894/frame_040.jpg"
"https://freight.cargo.site/t/original/i/M2282347433530066012254096313510/frame_041.jpg",
"https://freight.cargo.site/t/original/i/Q2282347433548512756327805865126/frame_042.jpg",
"https://freight.cargo.site/t/original/i/X2282347433566959500401515416742/frame_043.jpg",
"https://freight.cargo.site/t/original/i/M2282347433585406244475224968358/frame_044.jpg",
"https://freight.cargo.site/t/original/i/O2282347433603852988548934519974/frame_045.jpg",
"https://freight.cargo.site/t/original/i/Z2282347433622299732622644071590/frame_046.jpg",
"https://freight.cargo.site/t/original/i/C2282347433640746476696353623206/frame_047.jpg",
"https://freight.cargo.site/t/original/i/W2282347433659193220770063174822/frame_048.jpg",
"https://freight.cargo.site/t/original/i/J2282347433677639964843772726438/frame_049.jpg",
"https://freight.cargo.site/t/original/i/O2282347433696086708917482278054/frame_050.jpg"
"https://freight.cargo.site/t/original/i/J2282347433714533452991191829670/frame_051.jpg",
"https://freight.cargo.site/t/original/i/F2282347433732980197064901381286/frame_052.jpg",
"https://freight.cargo.site/t/original/i/D2282347433751426941138610932902/frame_053.jpg",
"https://freight.cargo.site/t/original/i/V2282347433769873685212320484518/frame_054.jpg",
"https://freight.cargo.site/t/original/i/N2282347433788320429286030036134/frame_055.jpg",
"https://freight.cargo.site/t/original/i/L2282347433806767173359739587750/frame_056.jpg",
"https://freight.cargo.site/t/original/i/B2282347433825213917433449139366/frame_057.jpg",
"https://freight.cargo.site/t/original/i/D2282347433843660661507158690982/frame_058.jpg",
"https://freight.cargo.site/t/original/i/O2282347433862107405580868242598/frame_059.jpg",
"https://freight.cargo.site/t/original/i/P2282347433880554149654577794214/frame_060.jpg"
"https://freight.cargo.site/t/original/i/Q2282347433899000893728287345830/frame_061.jpg",
"https://freight.cargo.site/t/original/i/T2282347433917447637801996897446/frame_062.jpg",
"https://freight.cargo.site/t/original/i/Y2282347433935894381875706449062/frame_063.jpg",
"https://freight.cargo.site/t/original/i/B2282347433954341125949416000678/frame_064.jpg",
"https://freight.cargo.site/t/original/i/F2282347433972787870023125552294/frame_065.jpg",
"https://freight.cargo.site/t/original/i/Z2282347433991234614096835103910/frame_066.jpg",
"https://freight.cargo.site/t/original/i/F2282347434009681358170544655526/frame_067.jpg",
"https://freight.cargo.site/t/original/i/R2282347434028128102244254207142/frame_068.jpg",
"https://freight.cargo.site/t/original/i/O2282347434046574846317963758758/frame_069.jpg",
"https://freight.cargo.site/t/original/i/I2282347434065021590391673310374/frame_070.jpg"
"https://freight.cargo.site/t/original/i/X2282347434083468334465382861990/frame_071.jpg",
"https://freight.cargo.site/t/original/i/I2282347434101915078539092413606/frame_072.jpg",
"https://freight.cargo.site/t/original/i/Q2282347434120361822612801965222/frame_073.jpg",
"https://freight.cargo.site/t/original/i/C2282347434138808566686511516838/frame_074.jpg",
"https://freight.cargo.site/t/original/i/L2282347434157255310760221068454/frame_075.jpg",
"https://freight.cargo.site/t/original/i/H2282347434175702054833930620070/frame_076.jpg",
"https://freight.cargo.site/t/original/i/L2282347434194148798907640171686/frame_077.jpg",
"https://freight.cargo.site/t/original/i/Y2282347434212595542981349723302/frame_078.jpg",
"https://freight.cargo.site/t/original/i/C2282347434231042287055059274918/frame_079.jpg",
"https://freight.cargo.site/t/original/i/L2282347434249489031128768826534/frame_080.jpg"
"https://freight.cargo.site/t/original/i/X2282347434267935775202478378150/frame_081.jpg",
"https://freight.cargo.site/t/original/i/B2282347434286382519276187929766/frame_082.jpg",
"https://freight.cargo.site/t/original/i/D2282347434304829263349897481382/frame_083.jpg",
"https://freight.cargo.site/t/original/i/J2282347434323276007423607032998/frame_084.jpg",
"https://freight.cargo.site/t/original/i/Q2282347434341722751497316584614/frame_085.jpg",
"https://freight.cargo.site/t/original/i/D2282347434360169495571026136230/frame_086.jpg",
"https://freight.cargo.site/t/original/i/Y2282347434378616239644735687846/frame_087.jpg",
"https://freight.cargo.site/t/original/i/B2282347434397062983718445239462/frame_088.jpg",
"https://freight.cargo.site/t/original/i/I2282347434415509727792154791078/frame_089.jpg",
"https://freight.cargo.site/t/original/i/A2282347434433956471865864342694/frame_090.jpg"
"https://freight.cargo.site/t/original/i/Q2282347434452403215939573894310/frame_091.jpg",
"https://freight.cargo.site/t/original/i/H2282347434470849960013283445926/frame_092.jpg",
"https://freight.cargo.site/t/original/i/J2282347434489296704086992997542/frame_093.jpg",
"https://freight.cargo.site/t/original/i/U2282347434507743448160702549158/frame_094.jpg",
"https://freight.cargo.site/t/original/i/A2282347434526190192234412100774/frame_095.jpg",
"https://freight.cargo.site/t/original/i/K2282347434544636936308121652390/frame_096.jpg",
"https://freight.cargo.site/t/original/i/C2282347434563083680381831204006/frame_097.jpg",
"https://freight.cargo.site/t/original/i/O2282347434581530424455540755622/frame_098.jpg",
"https://freight.cargo.site/t/original/i/L2282347434599977168529250307238/frame_099.jpg",
"https://freight.cargo.site/t/original/i/W2282347434618423912602959858854/frame_100.jpg"
"https://freight.cargo.site/t/original/i/J2282347434636870656676669410470/frame_101.jpg",
"https://freight.cargo.site/t/original/i/W2282347434655317400750378962086/frame_102.jpg",
"https://freight.cargo.site/t/original/i/A2282347434673764144824088513702/frame_103.jpg",
"https://freight.cargo.site/t/original/i/S2282347434692210888897798065318/frame_104.jpg",
"https://freight.cargo.site/t/original/i/C2282347434710657632971507616934/frame_105.jpg",
"https://freight.cargo.site/t/original/i/F2282347434729104377045217168550/frame_106.jpg",
"https://freight.cargo.site/t/original/i/V2282347434747551121118926720166/frame_107.jpg",
"https://freight.cargo.site/t/original/i/F2282347434765997865192636271782/frame_108.jpg",
"https://freight.cargo.site/t/original/i/O2282347434784444609266345823398/frame_109.jpg",
"https://freight.cargo.site/t/original/i/G2282347434802891353340055375014/frame_110.jpg"
"https://freight.cargo.site/t/original/i/R2282347434821338097413764926630/frame_111.jpg",
"https://freight.cargo.site/t/original/i/S2282347434839784841487474478246/frame_112.jpg",
"https://freight.cargo.site/t/original/i/V2282347434858231585561184029862/frame_113.jpg",
"https://freight.cargo.site/t/original/i/D2282347434876678329634893581478/frame_114.jpg",
"https://freight.cargo.site/t/original/i/W2282347434895125073708603133094/frame_115.jpg",
"https://freight.cargo.site/t/original/i/Q2282347434913571817782312684710/frame_116.jpg",
"https://freight.cargo.site/t/original/i/H2282347434932018561856022236326/frame_117.jpg",
"https://freight.cargo.site/t/original/i/F2282347434950465305929731787942/frame_118.jpg",
"https://freight.cargo.site/t/original/i/M2282347434968912050003441339558/frame_119.jpg",
"https://freight.cargo.site/t/original/i/O2282347434987358794077150891174/frame_120.jpg"
"https://freight.cargo.site/t/original/i/T2282347435005805538150860442790/frame_121.jpg",
"https://freight.cargo.site/t/original/i/G2282347435024252282224569994406/frame_122.jpg",
"https://freight.cargo.site/t/original/i/O2282347435042699026298279546022/frame_123.jpg",
"https://freight.cargo.site/t/original/i/C2282347435061145770371989097638/frame_124.jpg",
"https://freight.cargo.site/t/original/i/K2282347435079592514445698649254/frame_125.jpg",
"https://freight.cargo.site/t/original/i/W2282347435098039258519408200870/frame_126.jpg",
"https://freight.cargo.site/t/original/i/M2282347435116486002593117752486/frame_127.jpg",
"https://freight.cargo.site/t/original/i/N2282347435134932746666827304102/frame_128.jpg",
"https://freight.cargo.site/t/original/i/G2282347435153379490740536855718/frame_129.jpg",
"https://freight.cargo.site/t/original/i/N2282347435171826234814246407334/frame_130.jpg"
"https://freight.cargo.site/t/original/i/M2282347435190272978887955958950/frame_131.jpg",
"https://freight.cargo.site/t/original/i/A2282347435208719722961665510566/frame_132.jpg",
"https://freight.cargo.site/t/original/i/B2282347435227166467035375062182/frame_133.jpg",
"https://freight.cargo.site/t/original/i/A2282347435245613211109084613798/frame_134.jpg",
"https://freight.cargo.site/t/original/i/N2282347435264059955182794165414/frame_135.jpg",
"https://freight.cargo.site/t/original/i/O2282347435282506699256503717030/frame_136.jpg",
"https://freight.cargo.site/t/original/i/Y2282347435300953443330213268646/frame_137.jpg",
"https://freight.cargo.site/t/original/i/I2282347435319400187403922820262/frame_138.jpg",
"https://freight.cargo.site/t/original/i/E2282347435337846931477632371878/frame_139.jpg",
"https://freight.cargo.site/t/original/i/J2282347435356293675551341923494/frame_140.jpg"
"https://freight.cargo.site/t/original/i/F2282347435374740419625051475110/frame_141.jpg",
"https://freight.cargo.site/t/original/i/X2282347435393187163698761026726/frame_142.jpg",
"https://freight.cargo.site/t/original/i/L2282347435411633907772470578342/frame_143.jpg",
"https://freight.cargo.site/t/original/i/Y2282347435430080651846180129958/frame_144.jpg",
"https://freight.cargo.site/t/original/i/T2282347435448527395919889681574/frame_145.jpg",
"https://freight.cargo.site/t/original/i/J2282347435466974139993599233190/frame_146.jpg",
"https://freight.cargo.site/t/original/i/P2282347435485420884067308784806/frame_147.jpg",
"https://freight.cargo.site/t/original/i/L2282347435503867628141018336422/frame_148.jpg",
"https://freight.cargo.site/t/original/i/A2282347435522314372214727888038/frame_149.jpg",
"https://freight.cargo.site/t/original/i/B2282347435540761116288437439654/frame_150.jpg"
"https://freight.cargo.site/t/original/i/F2282347435559207860362146991270/frame_151.jpg",
"https://freight.cargo.site/t/original/i/Q2282347435577654604435856542886/frame_152.jpg",
"https://freight.cargo.site/t/original/i/C2282347435596101348509566094502/frame_153.jpg",
"https://freight.cargo.site/t/original/i/X2282347435614548092583275646118/frame_154.jpg",
"https://freight.cargo.site/t/original/i/L2282347435632994836656985197734/frame_155.jpg",
"https://freight.cargo.site/t/original/i/I2282347435651441580730694749350/frame_156.jpg",
"https://freight.cargo.site/t/original/i/D2282347435669888324804404300966/frame_157.jpg",
"https://freight.cargo.site/t/original/i/T2282347435688335068878113852582/frame_158.jpg",
"https://freight.cargo.site/t/original/i/G2282347435706781812951823404198/frame_159.jpg",
"https://freight.cargo.site/t/original/i/Y2282347435725228557025532955814/frame_160.jpg"
"https://freight.cargo.site/t/original/i/E2282347435743675301099242507430/frame_161.jpg",
"https://freight.cargo.site/t/original/i/O2282347435762122045172952059046/frame_162.jpg"

  ];

  const scrollEl = document.getElementById('scroll-wrapper'); // The scroll container
const frameEl = document.getElementById('animation-frame'); // The img element for animation

let currentFrameIndex = 0;
const totalFrames = 163; // Updated this to 163

// Function to update the frame based on scroll position
function updateFrame() {
  const scrollTop = scrollEl.scrollTop;
  const maxScroll = scrollEl.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;
  const index = Math.min(totalFrames - 1, Math.floor(scrollFraction * totalFrames));

  if (index !== currentFrameIndex) {
    currentFrameIndex = index;
    frameEl.src = frames[index]; // Change the image source
    console.log(`🖼 Frame ${index}:`, frames[index]); // Log the current frame
  }

  requestAnimationFrame(updateFrame); // Continue updating the frame as the user scrolls
}

// Start animation loop
updateFrame();
