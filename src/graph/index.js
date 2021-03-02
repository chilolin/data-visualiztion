class Graph {
    async setGraph(id, array, num) {
        await this.timer(num);
        const element = document.getElementById(id);
        const button = document.getElementById(`${id}-button`);
        const oldGraph = document.getElementById(`${id}-graph`);
        const newGraph = this.createGraph(`${id}-graph`, array);
        if (oldGraph) {
            element.replaceChild(newGraph, oldGraph);
        } else {
            element.insertBefore(newGraph, button);
        }
    }

    createGraph(id, array) {
        const graph = document.createElement('div');
        graph.id = id;
        array.forEach(function(value, index) {
            const createBar = new Graph().createBar;
            const bar = createBar(`${String(id)}-${String(index)}`, value);
            graph.appendChild(bar);
        })

        return graph;
    }

    createBar(id, length) {
        const bar = document.createElement('div');
        bar.id = id;
        bar.style = `display: inline-block; width: 1px; height: ${String(1 * length)}px; background-color: grey; border: solid 1px black;`;

        return bar;
    }

    timer(num) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, num);
        });
    }
}