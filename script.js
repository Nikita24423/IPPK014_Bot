const stack = [];

function show(id) {
  const current = document.querySelector('.screen.active');
  const next = document.getElementById(id);
  if (!next || next === current) return;
  if (current) {
    current.classList.remove('active');
    stack.push(current.id);
  }
  next.classList.add('active');
  window.scrollTo({ top: 0 });
}

function back() {
  const current = document.querySelector('.screen.active');
  if (!stack.length) { show('home'); return; }
  const prevId = stack.pop();
  current && current.classList.remove('active');
  const prev = document.getElementById(prevId) || document.getElementById('home');
  prev.classList.add('active');
  window.scrollTo({ top: 0 });
}

window.addEventListener('hashchange', () => {
  const id = location.hash.replace('#', '') || 'home';
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id) || document.getElementById('home');
  target.classList.add('active');
});

if (location.hash) {
  const id = location.hash.replace('#', '');
  document.querySelector('.screen.active')?.classList.remove('active');
  document.getElementById(id)?.classList.add('active');
}
