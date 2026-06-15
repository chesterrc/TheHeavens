import { render } from '@testing-library/react';
import {jest, expect, test, describe} from '@jest/globals';

import HomePage from "./home";
import { SkyTime } from "./SkyTime/SkyTime";

jest.mock("./SkyTime/SkyTime");

describe("tests for the home page", () => {

    test("Should render the SkyTime on load", () => {
        render(<HomePage />);

        expect(SkyTime).toHaveBeenCalled();
    });
})