"use strict";
// StatusBadge.test.tsx
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var StatusBadge_1 = require("./StatusBadge");
describe('StatusBadge Component', function () {
    it('renders with the correct title', function () {
        var title = 'Active';
        var getByText = (0, react_2.render)(<StatusBadge_1.default title={title}/>).getByText;
        // Проверяем, что текст "Active" отображается внутри компонента Badge
        var badgeElement = getByText(title);
        expect(badgeElement).toBeInTheDocument();
        expect(badgeElement).toHaveTextContent('Active');
    });
    it('has the correct styles applied', function () {
        var title = 'Active';
        var getByText = (0, react_2.render)(<StatusBadge_1.default title={title}/>).getByText;
        var badgeElement = getByText(title);
        // Проверяем стили компонента
        expect(badgeElement).toHaveStyle("\n      cursor: pointer;\n      background: green;\n      border-radius: 1rem;\n      padding: 0 0.5rem;\n      width: fit-content;\n    ");
    });
});
