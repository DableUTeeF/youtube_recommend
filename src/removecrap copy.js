channels = ['NASASpaceflight',
'PickFingerstyle',
'relaxdaily',
'3Blue1Brown',
'10 Percent True - Tales from the Cockpit',
'A.I.Channel',
'A.I.Games',
'AI บ้านบ้าน',
'Airspace',
'Arxiv Insights',
'AVIATION E-SPORT',
'Beyond the press',
'blackpenredpen',
'C.W. Lemoine',
'Casual Navigation',
'Citra Emulator',
'Code Bullet',
'DeepMind',
'dota2',
'Drachinifel',
'Eagle Dynamics: Digital Combat Simulator',
'Engineering Explained',
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
'J.O.E. VGM',
'Jim Browning',
'JunsKitchen',
'Karol Majek',
'Lady of Scrolls',
'LeiosOS',
'Lex',
'Mark Rober',
'Mathologer',
'Matt Wagner',
'Megaprojects',
'Microsoft Flight Simulator',
'mid or meepo',
'Military History in a Minute',
'Military History Visualized',
'MindYourDecisions',
'MIT OpenCourseWare',
'nipanartofmedia',
'Nobu Matsumura',
"Nutsinee's Vlog Book",
'OpenAI',
'Physics Explained',
'Practical Engineering',
'RAZBAM Simulations Official Channel',
'Real Engineering',
'Real Science',
'Rebelzize',
'Reducible',
'RekiFr',
'Smarter Every Day 2',
'SmarterEveryDay',
'SpaceX',
'Squash Clay',
'Tactical Pascale',
'TESRSkywindOfficial',
'The Efficient Engineer',
'The Ready Room',
'The Soul of Wind',
'Think Twice',
'Two Minute Papers',
'VASAviation -',
'Welch Labs',
'Yannic Kilcher',
'yovo68',
'SQUARE ENIX'];

setInterval(removecrap, 2000);

// todo: add 6 months and minutes instead
// todo: add up next
function removecrap(){
    grids = document.getElementsByClassName('ytd-rich-grid-renderer')
    for (var i = 10; i < grids.length; i++) { 
        if (grids[i].tagName.toLowerCase() === 'ytd-rich-item-renderer'){
            grid_inner = grids[i].innerText.split('\n');
            channel = grid_inner[grid_inner.length - 3];
            if (grid_inner[grid_inner.length - 1].toLowerCase() === 'live now'){
                date = "12 hours ago";
            }
            else{
                date = grid_inner[grid_inner.length - 1];
            }
            if (!channels.includes(channel)){
                if (date.includes("hour") || date.includes("day") || date.includes("week")){
                    grids[i].remove();
                    
                }
            }
        } 
    }
}