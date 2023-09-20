
const Get_width =  {
     
    resize:function() {
        //動画呼び出し場所
        target = document.getElementById("output");
        //曲名呼び出し場所
        title1 = document.getElementById("title1");
        if (window.matchMedia( "(max-width: 567px)" ).matches) {
            target.innerHTML = str2;
            title1.innerHTML = song_title;
        } else if (window.matchMedia( "(max-width: 767px)" ).matches) {
            target.innerHTML = str2;
            title1.innerHTML = song_title;
 
        } else if (window.matchMedia( "(max-width: 768px)" ).matches) {
            str3 = str2.replace(height="300",height="512")
            target.innerHTML = str3;
            title1.innerHTML = song_title;
        } else if (window.matchMedia( "(max-width: 812px)" ).matches) {
            str3 = str2.replace(height="300",height="375")
            target.innerHTML = str3;
            title1.innerHTML = song_title
        } else if (window.matchMedia( "(max-width: 820px)" ).matches) {
            str3 = str2.replace(height="300",height="512")
            target.innerHTML = str3;
            title1.innerHTML = song_title;
        } else if (window.matchMedia( "(max-width: 896px)" ).matches) {
            str3 = str2.replace(height="300",height="390")
            target.innerHTML = str3;
            title1.innerHTML = song_title;
        } else if (window.matchMedia( "(max-width: 1024px)" ).matches) {
            str3 = str2.replace(height="300",height="512")
            target.innerHTML = str3;
            title1.innerHTML = song_title;
        } else if (window.matchMedia( "(max-width: 1280px)" ).matches) {
            str3 = str2.replace(height="300",height="696")
            target.innerHTML = str3;
            title1.innerHTML = song_title;
        } else if (window.matchMedia( "(max-width: 1366px)" ).matches) {
            str3 = str2.replace(height="300",height="400")
            target.innerHTML = str3;
            title1.innerHTML = song_title;
        } else if (window.matchMedia( "(min-width: 1440px)" ).matches) {
            str3 = str2.replace(height="300",height="696")
            target.innerHTML = str3;
            title1.innerHTML = song_title;
        } else if (window.matchMedia( "(min-width: 1920px)" ).matches) {
            str3 = str2.replace(height="300",height="696")
            target.innerHTML = str3;
            title1.innerHTML = song_title;
                        
        }
        
    }
}


//aespa Song Title.
const aespa = {
    //Black Mamba
    URL0: '<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/ZeerrnuLi5E" frameborder="0"&autoplay="1"&mute="1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Forever
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/wog1R1d4zls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Savage
    URL2:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/WPdWvnAAurg"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Next Level
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/4TWR90KJl84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Dreams Come True
    URL4:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/H69tJmsgd9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Girls
    URL5:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/dYRITmpFbJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Hold On Tight
    URL6:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/fvtzZFhrKLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Lucid Dream
    URL7:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/5DhAts7WcPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //YEPPI YEPPI
    URL8:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/syYqQoE5Rbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //ICONIC
    URL9:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/gj-lvvYQdiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //I'll Make You Cry
    URL10: '<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/NBunx0VMvos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Illusion
    URL11:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/BpCvYeK5hcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Lingo
    URL12:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/rxtdwssXyOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Life's Too Short
    URL13:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/z2ZjutyxmjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Welcome To MY World (Feat. nævis)
    URL14:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/0xdB_vo4r2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //I'm Unhappy
    URL15:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/CC7OrEx5H4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Salty & Sweet
    URL16:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/bL0Uxth2Edg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //Thirsty
    URL17:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/i0RCcSBPjuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    URL18:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/Os_heh8vPfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    URL19:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/cWsZCogtH98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    URL20:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/gfk3QLU1x0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',


    URL01_op:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/06JDmBaYYtg?autoplay=1&mute=1&loop=1&playlist=06JDmBaYYtg&rel=0"&modestbranding=1&controls=0" frameborder="0"></iframe>',
    song_t0_op:'(Teaser) [BE ORIGINAL] aespa / Spicy',

    song_t0: 'aespa / Black Mamba',
    song_t1: 'aespa / Forever',
    song_t2: 'aespa / Savage',
    song_t3: 'aespa / Next Level',
    song_t4: 'aespa / Dreams Come True',
    song_t5: 'aespa / Girls',
    song_t6: 'aespa / Hold On Tight',
    song_t7: 'aespa / Lucid Dream',
    song_t8: 'aespa / YEPPI YEPPI',
    song_t9: 'aespa / ICONIC',
    song_t10: 'aespa / I\'ll Make You Cry',
    song_t11: 'aespa / Illusion',
    song_t12: 'aespa / Lingo',
    song_t13: 'aespa / Life\'s Too Short',
    song_t14:'aespa / Welcome To MY World (Feat. nævis)',
    song_t15:'aespa / I\'m Unhappy',
    song_t16:'aespa / Salty & Sweet',
    song_t17:'aespa / Thirsty',
    song_t18:'aespa / Spicy',
    song_t19:'aespa / Til We Meet Again',
    song_t20:'aespa / Better Things',
}

//EVERGLOW URL & Song Title.
const EVERGLOW = {
    //SLAY
    URL0:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/jI5p2ePoVcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0: 'EVERGLOW / SLAY',
}

//God the beat URL & Song Title.
const God_the_beat = {
    //Stamp On IT
    URL0:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/likYKQXBLbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0: 'God the beat / Stamp On It',
}

//(G)I-DLE
const g_i_dle = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/7HDeem-JaSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0:'(G)I-DLE / 퀸카 (Queencard)',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/pCh3Kp6qxo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t1:'(G)I-DLE / I DO',
}

//Nature URL & Song Title.
const nature = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/EP0BkYmP7HY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0: 'NATURE / RICA RICA',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/bEwIlxtw9w4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t1: 'NATURE / RIMBO!',
    URL2:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/IRUNTOqCmAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t2: 'NATURE / Girls',
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/QRN12TaTFlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t3:'NATURE / OOPSIE (My Bad)',
}

//xg URL & Song Title
const xg = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/aVatpxBTfZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0: 'XG / MASCARA',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/L7spCJxloLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t1: 'XG / SHOOTING STAR',
    URL2: '<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/Xiai4BRzZpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t2:'XG / GRL GVNG',
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/IPxDgf-g9Kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t3:'XG / TGIF ',
    URL4:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/cQTo9O85Zro?si=Wb7xFCGlH7WLoety" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t4:'XG / NEW DANCE',


}

//ITZY
const ITZY = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/fE2h3lGlOsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0:'ITZY / WANNABE',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/pNfTK39k55U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t1:'ITZY / DALLA DALLA',
    URL2:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/zndvqTc4P9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t2:'ITZY / ICY',
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/wTowEKjDGkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t3:'ITZY / Not Shy',
    URL4:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/_ysomCGaZLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t4:'In the morning',
    URL5:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/MjCZfZfucEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t5:'ITZY / LOCO',
    URL6:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/Hbb5GPxXF1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t6:'ITZY / SNEAKERS',
    URL7:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/RmTq3cJqyCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t7:'ITZY / BET ON ME',
    URL8:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/FcQ6oB1JPiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t8:'ITZY / None of My Business',
    URL9:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/0bIRwBpBcZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t9:'ITZY / CAKE',
}

//IVE URL & Song Title
const ive = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/--FmExEAsM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0:'IVE / ELEVEN',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/Y8JFxS1HlDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t1:'IVE / LOVE DIVE',
    URL2:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/F0B7HDiY-10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t2:'IVE / After LIKE',
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/pG6iaOMV46I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t3:'IVE / Kitsch',
    URL4:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/6ZUIwj3FgUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t4:'IVE / I AM',
    URL5:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/DriF-yior0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t5:'IVE / Shine With Me',
    URL6:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/qD1kP_nJU3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t6:'IVE / WAVE',
    URL7:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/JwUHl89V6kI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t7:'IVE / Blue Blood',
    URL8:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/ZcAqv354JeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t8:'IVE / I WANT',
}

//LE SSERAFIM
const LE_SSERAFIM = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/4vbDFu0PUew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0:'LE SSERAFIM / FEARLESS',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/oA8QPRqdVYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t1:'LE SSERAFIM / ANTIFRAGILE',
    URL2:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/1LCCten5wc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t2:'LE SSERAFIM / Choices',
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/Jn6a_ZSBvbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t3:'LE SSERAFIM / BLUE FLAME',
    URL4:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/UBURTj20HXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t4:'LE SSERAFIM / UNFORGIVEN (feat. Nile Rodgers)',
    URL5:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/dZs_cLHfnNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t5:'LE SSERAFIM / Eve, Psyche & the Bluebeard\'s wife',
} 

//kep1er
const kep1er = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/w9ueRzymcU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0:'Kep1er / Giddy',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/n0j5NPptyM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t1:'Kep1er / WA DA DA',
    URL2:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/tJG13dtV464" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t2:'Kep1er / I do! Do you?',
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/hr-325mclek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t3:'kep1er / Up!',
    URL4:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/eK4i2oN8jCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t4:'Kep1er / Wing Wing',
    URL5:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/cHF0-s0kBME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t5:'Kep1er / RESCUE TAYO',
}

//NMIXX
const NMIXX = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/EDnwWcFpObo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0:'NMIXX / Love Me Like This',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/5eh6Vj_vVg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t1:'NMIXX / Young, Dumb, Stupid',
    URL2:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/3GWscde8rM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t2:'NMIXX / O.O',
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/YJVlzCMZMzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t3:'NMIXX / Just Did It',
}

//NewJeans
const NewJeans = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/tVIXY14aJms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0:'NewJeans / Hurt',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube.com/embed/11cta61wi0g"&autoplay=1&mute=0 frameborder="0"</iframe>',
    song_t1:'NewJeans / Hype Boy',
    URL2:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/ArmDp-zijuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t2:'NewJeans / Super Shy',
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/jOTfBlKSQYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t3:'NewJeans / ETA',
    URL4:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/dJdqn5v4Dkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t4:'NewJeans / ASAP',
    URL5:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/js1CtxSY38I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t5:'NewJeans / Attention',
    URL6:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/VOmIplFAGeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t6:'NewJeans / Cookie',
}

//YENA
const YENA = {
    URL0:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/oJ2EmLEUIto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t0:'YENA (최예나) / WICKED LOVE ',
    URL1:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/5ncp-_GXBsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t1:'YENA (최예나) / SMARTPHONE',
    URL2:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/AWIpPQ6z-rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t2:'YENA (최예나) / Love War',
    URL3:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/y9kkXTucnLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t3:'YENA (최예나) / SMILEY (Feat. BIBI)',
    URL4:'<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/1XIi9ofX2kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    song_t4:'YENA (최예나) /Hate Rodrigo',
}

