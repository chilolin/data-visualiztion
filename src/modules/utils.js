export const setSort = (name, eventListner, addNames) => {
    const wrapper = document.createElement('div');
    wrapper.id = name;
    const sortElement = document.createElement('div');
    sortElement.id = `${name}-sort`;
    const sortButton = document.createElement('button');
    sortButton.type = "button";
    sortButton.id = `${name}-sort-button`;
    sortButton.textContent = `${name}ソート開始`;
    sortButton.addEventListener("click", eventListner);

    sortElement.appendChild(sortButton);
    wrapper.appendChild(sortElement);
    if (addNames) {
        addNames.forEach((name) => {
            const addElement = document.createElement('div');
            addElement.id = name;
            wrapper.appendChild(addElement);
        })
    }
    document.body.appendChild(wrapper);
};

export const setGraph = async (id, array, num) => {
    await timer(num);
    const element = document.getElementById(id);
    const button = document.getElementById(`${id}-button`);
    const oldGraph = document.getElementById(`${id}-graph`);
    const newGraph = createGraph(`${id}-graph`, array);
    if (oldGraph) {
        element.replaceChild(newGraph, oldGraph);
    } else {
        element.insertBefore(newGraph, button);
    }
};

const createGraph = (id, array) => {
    const graph = document.createElement('div');
    graph.id = id;
    array.forEach(function(value, index) {
        const bar = createBar(`${String(id)}-${String(index)}`, value);
        graph.appendChild(bar);
    })

    return graph;
};
const createBar = (id, length) => {
    const bar = document.createElement('div');
    bar.id = id;
    bar.style = `display: inline-block; width: 1px; height: ${String(1 * length)}px; background-color: grey; border: solid 1px black;`;

    return bar;
};
const timer = (num) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, num);
    });
};

export const createArr = (num) => {
    const arr = [];

    for(let i = 1; i <= num; i++) {
        arr.push(i);
    }

    for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
};

