/*
Consegna

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

BONUS

Facciamo accendi e spegni:

Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...

*/ 

const buttonEl = document.querySelector('button');
console.log(buttonEl);

const imgOffEl = document.querySelector('.lamp_off');
console.log(imgOffEl);

const imgOnEl = document.querySelector('.lamp_on');
console.log(imgOnEl);

buttonEl.addEventListener('click', function(){
    console.log('You clicked the button');
    imgOffEl.style.display = 'none'
    imgOnEl.style.display = 'inline-block';
})
