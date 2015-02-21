jest.dontMock('../Grid');

describe('Grid', function () {
    var React = require('react/addons');
    var Grid = require('../Grid');
    var TestUtils = React.addons.TestUtils;

    it('Should add container class to element', function () {
        var grid = TestUtils.renderIntoDocument(<Grid></Grid>);
        expect(grid.getDOMNode().className).toEqual('container');
    });

    it('Should not replace class', function () {
        var grid = TestUtils.renderIntoDocument(<Grid className="foo"></Grid>);
        var className = grid.getDOMNode().className;
        expect(className).toContain('foo');
        expect(className).toContain('container');
    });

    it('Should wrap children nodes', function () {
        // @todo: complete test
        var grid = TestUtils.renderIntoDocument(<Grid><span>test</span></Grid>);
    })
});