const API_URL = 'https://taskmanager-iwtraining.firebaseio.com';

calendar();

document.getElementById('btn-agenda').addEventListener('click', () => {
    document.getElementById('main').innerHTML = '';
    calendar();

    location.assign('#agenda');

    document.getElementById('btn-agenda').classList.remove('btn-outline-primary');
    document.getElementById('btn-agenda').classList.add('btn-primary');
    document.getElementById('btn-config').classList.remove('btn-primary');
    document.getElementById('btn-config').classList.add('btn-outline-primary');
});

document.getElementById('btn-config').addEventListener('click', () => {
    config();

    location.assign('#config');

    document.getElementById('btn-config').classList.remove('btn-outline-primary');
    document.getElementById('btn-config').classList.add('btn-primary');
    document.getElementById('btn-agenda').classList.remove('btn-primary');
    document.getElementById('btn-agenda').classList.add('btn-outline-primary');
});