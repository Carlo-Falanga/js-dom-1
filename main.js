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

const buttonOnEl = document.querySelector('.turn_on');
console.log(buttonOnEl);

const buttonOffEl = document.querySelector('.turn_off')
console.log(buttonOffEl);

const imgOffEl = document.querySelector('.lamp_off');
console.log(imgOffEl);

const imgOnEl = document.querySelector('.lamp_on');
console.log(imgOnEl);

buttonOnEl.addEventListener('click', function(){
    imgOffEl.style.display = 'none'
    imgOnEl.style.display = 'inline-block';
    buttonOnEl.style.display = 'none'
    buttonOffEl.style.display = 'inline-block'
    console.log('You turned on the light');
})

buttonOffEl.addEventListener('click', function(){
    imgOffEl.style.display = 'inline-block';
    imgOnEl.style.display = 'none'
    buttonOffEl.style.display = 'none'
    buttonOnEl.style.display = 'inline-block'
    console.log('You turned off the light');
    
})
