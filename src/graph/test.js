import Graph from './index';

describe('Graph クラス', function() {
    it('graph メソッド', function() {
        const id = 'test-graph';
        const array = [2, 3, 5, 8];
        const graph = Graph.graph(id, array);
        expect(graph.id).toEqual('test-graph');
    });

    it('bar メソッド', function() {
        const id = 'bar-id';
        const length = 5;
        const bar = Graph.bar(id, length);
        expect(bar.id).toEqual('bar-id');
    });
});