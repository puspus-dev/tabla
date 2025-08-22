(function() {
if (localStorage.getItem(KEY) === '1') document.documentElement.classList.add('kb-dark');
const prefs = JSON.parse(localStorage.getItem(PREFS) || '{}');
applyPrefs(prefs);


const btn = document.createElement('button');
btn.id = 'kb-toggle';
btn.textContent = document.documentElement.classList.contains('kb-dark') ? 'Világos mód' : 'Sötét mód';
btn.addEventListener('click', () => {
const dark = document.documentElement.classList.toggle('kb-dark');
localStorage.setItem(KEY, dark ? '1' : '0');
btn.textContent = dark ? 'Világos mód' : 'Sötét mód';
});


const menuBtn = document.createElement('button');
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
if (name) saveCustomTheme(name);
rebuildSelector();
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