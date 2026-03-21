import { describe } from '@jest/globals';
import { render } from '@testing-library/react';
import { EarthPage } from './earthPage';


describe("Earth Page", () => {

    it("", () => {
        render(EarthPage());

        expect(EarthPage).toHaveBeenCalled()
    });
});