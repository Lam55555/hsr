products = {
    nbz: [
        {
            productName: "Introduction to the game",
            image: "/img/category_introgame.jpg",
            link: "/guide/newbiezone/Introductiongame/introgame.html"
        },

        {
            productName: "Reroll guide",
            image: "/img/category_rerollguide.jpg",
            link: "/guide/newbiezone/Rerollguide/rrguide.html"
        },

        {
            productName: "Free Characters",        
            image: "/img/category_freechars.jpg",
            link: "/guide/newbiezone/Freechar/freechar.html"
        },

        {
            productName: "Early progession tips",
            image: "/img/category_earlyprog.jpg",
            link: "/guide/newbiezone/earlyprogession/ept.html"
        },

        {
            productName: "Early gearing",
            image: "/img/category_earlygear.jpg",
            link: "/guide/newbiezone/earlygear/eg.html"
        },

        {
            productName: "Team building",
            image: "/img/category_team.jpg",
            link: "/guide/newbiezone/teambuild/teambuild.html"
        },

        {   
            productName: "Daily farming route",
            image:"/img/category_rota.jpg",
            link: "/guide/newbiezone/Dailyfarm/df.html"
        },

        {   
            productName: "What Relics Sets to farm?",
            image:"/img/category_relicfarm.jpg" ,
            link: "/guide/newbiezone/Relicsfarm/relicsfarm.html"
        },

        {   
            productName: "Best battle pass light cone",
            image:"/img/category_bpcone.jpg" ,
            link: "/guide/newbiezone/bestBPlightcone/bpcone.html"
        },
    ],

    gg: [
        {
            productName: "Combat and exploration",
            image: "/img/category_combat.jpg",
            link: "/guide/gameguide/combatexploration/cbept.html"
        },
        
        {
            productName: "Game modes",
            image: "/img/category_gamemodes.jpg",
            link: "/guide/gameguide/gamemodes/gm.html"
        },
                
        {
            productName: "Game systems",
            image: "/img/category_gamesystems.jpg",
            link: "/guide/gameguide/gamesystem/gst.html"
        },
                
        {
            productName: "Gacha system",
            image: "/img/category_gacha.jpg",
            link: "/guide/gameguide/gachasystem/gachasys.html"
        },
                
        {
            productName: "Summon income",
            image: "/img/category_income.jpg",
            link: "/guide/gameguide/Summonincome/summon.html"
        },
                
        {
            productName: "Achivement Tracker",
            image: "/img/category_achie.jpg",
            link: "/guide/gameguide/AchievementTracker/achieve.html"
        },

    ],

    fgh: [
        {
            productName:"Forgotten hall",
            image:"/img/category_fhm.jpg",
            link:"/guide/gamemode/forgottenhall/fgh.html",
        },
        
        {
            productName:"Memory of Chaos",
            image:"/img/category_fh.jpg",
            link:"/guide/gamemode/MoC/MoC.html",
        },
    ],

    pft: [

        {
            productName:"Pure Fiction",
            image:"/img/category_pf.jpg",
            link:"/guide/gamemode/MoC/MoC.html",
        },

        {
            productName:"Pure Fiction Analytics",
            image:"/img/category_pf.jpg",
            link:"/guide/gamemode/MoC/MoC.html",
        },
    ],

    su: [

        {
            productName:"Simulated Universe",
            image:"/img/category_sim.jpg",
            link:"/guide/gamemode/MoC/MoC.html",  
        },
        
        {
            productName:"Simulated Universe Builds",
            image:"/img/category_sim.jpg",
            link:"/guide/gamemode/MoC/MoC.html",  
        },
        
        {
            productName:"Swarm Disater",
            image:"/img/category_swarm.jpg",
            link:"/guide/gamemode/MoC/MoC.html",  
        },
        
        {
            productName:"Swarm Disater Analytics",
            image:"/img/category_swarm2.jpg",
            link:"/guide/gamemode/MoC/MoC.html",  
        },
        
    ],

    eqm: [

        {
            productName:"Relics - Introduction",
            image:"/img/category_relicinfo.jpg",
            link:"/guide/gamemode/MoC/MoC.html", 
        },
        
        {
            productName:"Relic - sets",
            image:"/img/category_relics.jpg",
            link:"/guide/gamemode/MoC/MoC.html", 
        },
        
        {
            productName:"Relic -  stats",
            image:"/img/category_relicstats.jpg",
            link:"/guide/gamemode/MoC/MoC.html", 
        },
        
        {
            productName:"Light Cones",
            image:"/img/category_cones_guide.jpg",
            link:"/guide/gamemode/MoC/MoC.html", 
        },
        
    ],

    dtb: [

        {
            productName:"Eidolon for Trailblazer",
            image:"/img/category_shadows.jpg",
            link:"/guide/gamemode/MoC/MoC.html", 
        },
        
        {
            productName:"Items",
            image:"/img/category_itemslist.jpg",
            link:"/guide/gamemode/MoC/MoC.html", 
        },

        
        {
            productName:"Nameless Honor(BP)",
            image:"/img/category_nameless.jpg",
            link:"/guide/gamemode/MoC/MoC.html", 
        },


    ],

    lore: [

        {
            productName:"Alien space(manga)",
            image:"/img/category_manga.jpg",
            link:"/guide/gamemode/MoC/MoC.html", 
        }
]
}

for(let i of products.nbz) {
    let image = document.createElement('img')
    image.classList.add("img-guide")
    image.setAttribute('src',i.image)

    let divanh = document.createElement('div')
    divanh.classList.add('divanh')
    divanh.appendChild(image) 

    let divtext = document.createElement("div")
    divtext.innerText = i.productName
    divtext.classList.add("text-guide")

    let divlon = document.createElement("div")
    divlon.classList.add("divlon")
    divlon.appendChild(divanh)
    divlon.appendChild(divtext)

    let  link = document.createElement('a')
    link.setAttribute('href',i.link)
    link.classList.add("ctn")
    link.appendChild(divlon)

    document.getElementById("nbz").appendChild(link)
}

for(let i of products.gg) {
    let image = document.createElement('img')
    image.classList.add("img-guide")
    image.setAttribute('src',i.image)

    let divanh = document.createElement('div')
    divanh.classList.add('divanh')
    divanh.appendChild(image) 

    let divtext = document.createElement("div")
    divtext.innerText = i.productName
    divtext.classList.add("text-guide")

    let divlon = document.createElement("div")
    divlon.classList.add("divlon")
    divlon.appendChild(divanh)
    divlon.appendChild(divtext)

    let  link = document.createElement('a')
    link.setAttribute('href',i.link)
    link.classList.add("ctn")
    link.appendChild(divlon)

    document.getElementById("gg").appendChild(link)
}

for(let i of products.fgh) {
    let image = document.createElement('img')
    image.classList.add("img-guide")
    image.setAttribute('src',i.image)

    let divanh = document.createElement('div')
    divanh.classList.add('divanh')
    divanh.appendChild(image) 

    let divtext = document.createElement("div")
    divtext.innerText = i.productName
    divtext.classList.add("text-guide")

    let divlon = document.createElement("div")
    divlon.classList.add("divlon")
    divlon.appendChild(divanh)
    divlon.appendChild(divtext)

    let  link = document.createElement('a')
    link.setAttribute('href',i.link)
    link.classList.add("ctn")
    link.appendChild(divlon)

    document.getElementById("fgh").appendChild(link)
}

for(let i of products.pft) {
    let image = document.createElement('img')
    image.classList.add("img-guide")
    image.setAttribute('src',i.image)

    let divanh = document.createElement('div')
    divanh.classList.add('divanh')
    divanh.appendChild(image) 

    let divtext = document.createElement("div")
    divtext.innerText = i.productName
    divtext.classList.add("text-guide")

    let divlon = document.createElement("div")
    divlon.classList.add("divlon")
    divlon.appendChild(divanh)
    divlon.appendChild(divtext)

    let  link = document.createElement('a')
    link.setAttribute('href',i.link)
    link.classList.add("ctn")
    link.appendChild(divlon)

    document.getElementById("pft").appendChild(link)
}

for(let i of products.su) {
    let image = document.createElement('img')
    image.classList.add("img-guide")
    image.setAttribute('src',i.image)

    let divanh = document.createElement('div')
    divanh.classList.add('divanh')
    divanh.appendChild(image) 

    let divtext = document.createElement("div")
    divtext.innerText = i.productName
    divtext.classList.add("text-guide")

    let divlon = document.createElement("div")
    divlon.classList.add("divlon")
    divlon.appendChild(divanh)
    divlon.appendChild(divtext)

    let  link = document.createElement('a')
    link.setAttribute('href',i.link)
    link.classList.add("ctn")
    link.appendChild(divlon)

    document.getElementById("su").appendChild(link)
}

for(let i of products.eqm) {
    let image = document.createElement('img')
    image.classList.add("img-guide")
    image.setAttribute('src',i.image)

    let divanh = document.createElement('div')
    divanh.classList.add('divanh')
    divanh.appendChild(image) 

    let divtext = document.createElement("div")
    divtext.innerText = i.productName
    divtext.classList.add("text-guide")

    let divlon = document.createElement("div")
    divlon.classList.add("divlon")
    divlon.appendChild(divanh)
    divlon.appendChild(divtext)

    let  link = document.createElement('a')
    link.setAttribute('href',i.link)
    link.classList.add("ctn")
    link.appendChild(divlon)

    document.getElementById("eqm").appendChild(link)
}

for(let i of products.dtb) {
    let image = document.createElement('img')
    image.classList.add("img-guide")
    image.setAttribute('src',i.image)

    let divanh = document.createElement('div')
    divanh.classList.add('divanh')
    divanh.appendChild(image) 

    let divtext = document.createElement("div")
    divtext.innerText = i.productName
    divtext.classList.add("text-guide")

    let divlon = document.createElement("div")
    divlon.classList.add("divlon")
    divlon.appendChild(divanh)
    divlon.appendChild(divtext)

    let  link = document.createElement('a')
    link.setAttribute('href',i.link)
    link.classList.add("ctn")
    link.appendChild(divlon)

    document.getElementById("dtb").appendChild(link)
}

for(let i of products.lore) {
    let image = document.createElement('img')
    image.classList.add("img-guide")
    image.setAttribute('src',i.image)

    let divanh = document.createElement('div')
    divanh.classList.add('divanh')
    divanh.appendChild(image) 

    let divtext = document.createElement("div")
    divtext.innerText = i.productName
    divtext.classList.add("text-guide")

    let divlon = document.createElement("div")
    divlon.classList.add("divlon")
    divlon.appendChild(divanh)
    divlon.appendChild(divtext)

    let  link = document.createElement('a')
    link.setAttribute('href',i.link)
    link.classList.add("ctn")
    link.appendChild(divlon)

    document.getElementById("lore").appendChild(link)
}

const nbzone = document.getElementById('nbz')
const gguide = document.getElementById('gg')
const fghall = document.getElementById('fgh')
const pftion = document.getElementById('pft')
const suniverse = document.getElementById('su')
const eqment = document.getElementById('eqm')
const dtbase = document.getElementById('dtb')
const str = document.getElementById('lore')

function nbz(){
    gguide.style.display='none'
    fghall.style.display='none'
    pftion.style.display='none'
    suniverse.style.display='none'
    eqment.style.display='none'
    dtbase.style.display='none'
    str.style.display='none'
}

function gg(){
    nbzone.style.display='none'
    fghall.style.display='none'
    pftion.style.display='none'
    suniverse.style.display='none'
    eqment.style.display='none'
    dtbase.style.display='none'
    str.style.display='none'
}

function gmg(){
    nbzone.style.display='none'
    gguide.style.display='none'
    eqment.style.display='none'
    dtbase.style.display='none'
    str.style.display='none'
}

function eqm(){
    nbzone.style.display='none'
    gguide.style.display='none'
    fghall.style.display='none'
    pftion.style.display='none'
    suniverse.style.display='none'
    dtbase.style.display='none'
    str.style.display='none'
}

function dtb(){
    nbzone.style.display='none'
    gguide.style.display='none'
    fghall.style.display='none'
    pftion.style.display='none'
    suniverse.style.display='none'
    eqment.style.display='none'
    str.style.display='none'
}

function lore(){
    nbzone.style.display='none'
    gguide.style.display='none'
    fghall.style.display='none'
    pftion.style.display='none'
    suniverse.style.display='none'
    eqment.style.display='none'
    dtbase.style.display='none'
}
