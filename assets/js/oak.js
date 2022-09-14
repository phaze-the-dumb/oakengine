let objects = [];
let imports = [
    'oak/math.js',
    'oak/material.js',

    'oak/gameobject.js',
    'oak/transform.js',
    'oak/collider.js',
    'oak/components.js',
    'oak/render.js',
    'oak/movement.js',

    'main.js',
]

let loadImport = (i = 0) => {
    let s = document.createElement('script');
    s.src = '/assets/js/'+imports[i];

    document.body.appendChild(s);

    s.onload = () => {
        if(imports[i + 1])
            loadImport(i + 1);
    }
}

loadImport();