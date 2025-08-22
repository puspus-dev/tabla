(function() {
font: 'Courier New, monospace'
},
minimal: {
accent: '#111827',
good: '#6ee7b7',
warn: '#fcd34d',
bad: '#f87171',
font: 'Helvetica, Arial, sans-serif'
}
};


function applyPrefs(prefs) {
for (const [k, v] of Object.entries(prefs)) {
if (k !== 'theme') document.documentElement.style.setProperty(`--kb-${k}`, v);
}
if (prefs.font) document.documentElement.style.setProperty('--kb-font', prefs.font);
}


function setTheme(name) {
const prefs = JSON.parse(localStorage.getItem(PREFS) || '{}');
if (THEMES[name]) {
const themePrefs = { theme: name, ...THEMES[name] };
localStorage.setItem(PREFS, JSON.stringify(themePrefs));
applyPrefs(themePrefs);
}
}


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
Object.keys(THEMES).forEach(theme => {
const b = document.createElement('button');
b.textContent = theme;
b.addEventListener('click', () => {
setTheme(theme);
selector.style.display = 'none';
});
selector.appendChild(b);
});


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