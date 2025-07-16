function toggle(el) {
  const desc = el.querySelector('.description');
  if (desc) {
    desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
  }

  // Alternar clases para estado visual
  if (el.classList.contains('completed')) {
    el.classList.remove('completed');
    el.classList.add('in-progress');
  } else if (el.classList.contains('in-progress')) {
    el.classList.remove('in-progress');
  } else {
    el.classList.add('completed');
  }
}
