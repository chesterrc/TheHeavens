import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import {jest, expect, test, describe} from '@jest/globals';
import { SkyTime } from "./SkyTime";


describe("SkyTimes tests", () => {
    const getTime = jest.fn();



    test("renders sun canvas during daytime", () => {
        render(<SkyTime />);

         expect(document.getElementById("da-sun")).toBeInTheDocument();
    });
});