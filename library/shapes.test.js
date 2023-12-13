const {circle, square, triangle} = require('./shapes')

describe('circle', () => {
    test('renders correctly', () => {
        const shape =new circle();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

describe('square', () => {
    test('renders correctly', () => {
        const shape =new square();
        let color = ('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

describe('triangle', () => {
    test('renders correctly', () => {
        const shape =new triangle();
        let color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});