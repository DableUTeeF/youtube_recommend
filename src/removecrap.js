channels = [
    'NASASpaceflight',
    'PickFingerstyle',
    'relaxdaily',
    '3Blue1Brown',
    '10 Percent True - Tales from the Cockpit',
    'A.I.Channel',
    'A.I.Games',
    'AI บ้านบ้าน',
    'Airspace',
    'Alpharad',
    'Andrej Karpathy',
    'Anton Petrov',
    'Arxiv Insights',
    'AVIATION E-SPORT',
    'Beyond the press',
    'Brick Immortar',
    'BrotherMunro',
    'blackpenredpen',
    'C.W. Lemoine',
    'Casual Navigation',
    'Citra Emulator',
    'ck49',
    'Code Bullet',
    'CybertronVGC',
    'DeepMind',
    'Dolph C. Volker',
    'Doomkemon',
    'dota2',
    'Drachinifel',
    'Eagle Dynamics: Digital Combat Simulator',
    'Engineering Explained',
    'Fermilab',
    'Forgotten Weapons',
    'Geographics',
    'GlowingAmraam',
    'Growling Sidewinder',
    'guitargt fingerstyle',
    'Heatblur Simulations',
    'Helpful Vancouver Vet',
    'HokiHoshi',
    'HUMANKIND',
    'Imperial Knowledge',
    'InRangeTV',
    'Inquisitive Otter',
    'Jaiden Animations',
    'Jaiden',
    'J.O.E. VGM',
    'Jim Browning',
    'JunsKitchen',
    'Karol Majek',
    'Kittisaurus',
    'Kyogre',
    'Lady of Scrolls',
    'LeiosOS',
    'Lex',
    'Mark Rober',
    'Mathologer',
    'Matt Lowne',
    'Matt Wagner',
    'Megaprojects',
    'Mentour Pilot',
    'Microsoft Flight Simulator',
    'Military History in a Minute',
    'Military History Visualized',
    'MIT OpenCourseWare',
    'navyreviewer',
    'Nemean',
    'NileRed',
    'NileBlue',
    'Nintendo of America',
    'nipanartofmedia',
    'Nobu Matsumura',
    "Nutsinee's Vlog Book",
    'OpenAI',
    'OverSimplified',
    'PBS Space Time',
    'PBS Eons',
    'Physics Explained',
    'PotatoMcWhiskey',
    'Practical Engineering',
    'RAZBAM Simulations Official Channel',
    'Real Engineering',
    'Real Science',
    'Rebelzize',
    'Reducible',
    'RekiFr',
    'SaveAFox',
    'SmallAnt',
    'SmallAnt Clips',
    'SmallAnt VODS',
    'Smarter Every Day 2',
    'SmarterEveryDay',
    'SpaceX',
    'Squash Clay',
    'Tactical Pascale',
    'TESRSkywindOfficial',
    'The Armchair Historian',
    'The B1M',
    'The Efficient Engineer',
    'The Official Pokémon YouTube channel',
    'The Ready Room',
    'The Soul of Wind',
    'Think Twice',
    'Two Minute Papers',
    'VASAviation -',
    'Vinsonte',
    'Welch Labs',
    'WolfeyVGC',
    'WolfeyVods',
    'WolfeyVGC Clips',
    'Yannic Kilcher',
    'yovo68',
    'SQUARE ENIX',
    'スクウェア・エニックス',
    '圧倒的不審者の極み!'
];

shit = [
    'False Swipe Gaming', 'TOP NEWS LIVE', 'Megaprojects'
];

// window.setInterval(removecraps, 200);
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        removecraps()
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

// todo: add 6 months and minutes instead
// todo: add up next
var classname = "ytd-rich-item-renderer";
var mobile = false;
if (navigator.userAgent.toLowerCase().includes("android")){
    classname = "ytm-rich-item-renderer";
    mobile = true;
}


function removecrapupnext(mobile){
    if (!mobile){
        grids = document.getElementsByTagName("ytd-compact-video-renderer")
    }
}

function removecrap(date, channel, grid){
    if (typeof channel === 'undefined') {
        return
    }
    if (shit.includes(channel) || channel.toLowerCase().includes("news")){
        grid.remove();
        // i -= 1;
    }
    else if (!channels.includes(channel)){
        if (date.includes("minute") || date.includes("hour") || date.includes("day") || date.includes("week") || date.includes("month")){
            grid.remove();
            // i -= 1;
        }
    }
}

function removedesktopcrap(grid, grid_inner, watching){
    if (grid_inner[grid_inner.length - 1] === 'Fundraiser'){
        idx = 4
        dtx = 2
    }
    else{
        idx = 3
        dtx = 1
    }
    channel = grid_inner[grid_inner.length - idx];
    if (grid_inner[grid_inner.length - 1].toLowerCase() === 'live now'){
        date = "12 hours ago";
    }
    else if (grid_inner[0] === "LIVE"){
        date = "12 hours ago";
    }
    else if (watching){
        date = "12 hours ago";
    }
    else{
        date = grid_inner[grid_inner.length - dtx];
    }
    removecrap(date, channel, grid);
}

function removemobilecrap(grid, grid_inner){
    grid_inner_info = grid_inner[grid_inner.length - 1].split("•");
    if (grid_inner[0] === "LIVE"){
        date = "12 hours ago";
        channel = grid_inner_info[0];
    }
    else {
        if (grid_inner[grid_inner.length - 2] === 'Fundraiser'){
            date = grid_inner_info[grid_inner_info.length - 1];
            channel = grid_inner[grid_inner.length - 3];
            }
        else{
            date = grid_inner_info[grid_inner_info.length - 1];
            channel = grid_inner_info[0];
            }    
    }
    removecrap(date, channel, grid);
}

function removecraps(){
    grids = document.getElementsByTagName(classname);
    current_site = window.location.href.split("/");
    if (current_site.length <= 4){
        for (var i = 0; i < grids.length; i++) { 
            if (i >= grids.length){
                break;
            }
            grid = grids[i];
            grid_inner = grid.innerText.split('\n');
            if (grid_inner[grid_inner.length - 1]==="New"){
                grid_inner.splice(grid_inner.length-1)
            }
            if (!mobile){
                removedesktopcrap(grid, grid_inner, false);
            }
            else{
                removemobilecrap(grid, grid_inner);
            }
        }
        if (!mobile && window.location.href.includes('watch')){
            grids = document.getElementsByTagName("ytd-compact-video-renderer");
            for (var i = 0; i < grids.length; i++) { 
                if (i >= grids.length){
                    break;
                }
                grid = grids[i];
                grid_inner = grid.innerText.split('\n');
                if (grid_inner.length == 5){
                    if (!channels.includes(grid_inner[3])){
                        removecrap("12 hours ago", grid_inner[3], grid);
                    }
                }
            }
        }
    }
    else{    
        
    }    
    if (mobile){
        grids = document.getElementsByTagName('ytm-rich-item-renderer');
        for (var i = 0; i < grids.length; i++) { 
            if (i >= grids.length){
                break;
            }
            grid = grids[i];
            grid_inner = grid.innerText.split('\n');
            if (grid_inner[4] === "Recommended for you"){
                grid.remove();
            }
        }
    }
}