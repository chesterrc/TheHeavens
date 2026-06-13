import { describe } from "node:test"; 
import { render } from '@testing-library/react';
import {expect, test} from '@jest/globals';

import HomePage from "./home";

describe("tests for the home page", () => {

    test("Should obtain the clock time for the sun movement", () => {
        render(<HomePage />);

    });
})