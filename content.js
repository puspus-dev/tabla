(function() {
menuBtn.id = 'kb-theme-menu';
menuBtn.textContent = '🎨 Téma';


const selector = document.createElement('div');
selector.id = 'kb-theme-selector';
selector.style.display = 'none';


function rebuildSelector() {
selector.innerHTML = '';
const allCustom = JSON.parse(localStorage.getItem(CUSTOM_THEMES) || '{}');
const combined = { ...THEMES, ...allCustom };
Object.keys(combined).forEach(theme => {
const b = document.createElement('button');
b.textContent = theme;
b.addEventListener('click', () => {
setTheme(theme);
selector.style.display = 'none';
});
selector.appendChild(b);
});


const saveBtn = document.createElement('button');
saveBtn.textContent = '+ Mentés';
saveBtn.addEventListener('click', () => {
const name = prompt('Adj nevet a saját témádnak:');
if (name) {
const currentPrefs = JSON.parse(localStorage.getItem(PREFS) || '{}');
saveCustomTheme(name, currentPrefs);
rebuildSelector();
}
});
selector.appendChild(saveBtn);
}


rebuildSelector();


menuBtn.addEventListener('click', () => {
selector.style.display = selector.style.display === 'none' ? 'flex' : 'none';
});


document.addEventListener('DOMContentLoaded', () => {
document.body.appendChild(btn);
document.body.appendChild(menuBtn);
document.body.appendChild(selector);
});
if (document.body) {
document.body.appendChild(btn);
document.body.appendChild(menuBtn);
document.body.appendChild(selector);
}
})();


---


## Újdonságok
- Az egész bővítmény **Tábla** néven fut.
- Minden fő e-Kréta oldalra, a **bejelentkezésre** és az **intézménykeresőre** is érvényes.
- Előre definiált témák és **egyéni témák mentése, előhívása**