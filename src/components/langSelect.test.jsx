import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cookies from 'js-cookie';
import LangSelect from './LangSelect';

jest.mock('js-cookie', () => ({
    get: jest.fn(),
    set: jest.fn(),
}));

jest.mock('../../i18n', () => ({
    locales: ['en', 'pl', 'de'],
    defaultLocale: 'pl',
}));

describe('LangSelect Component', () => {
    beforeEach(() => {
        Cookies.get.mockClear();
        Cookies.set.mockClear();
        delete window.location;
        window.location = { search: '' }; // Mock window.location.search
    });

    it('renders correctly with available languages', () => {
        render(<LangSelect />);
        const options = screen.getAllByRole('option');

        expect(options.length).toBe(3); // 'en', 'pl', 'de'
        expect(options[0].textContent).toBe('EN');
        expect(options[1].textContent).toBe('PL');
        expect(options[2].textContent).toBe('DE');
    });

    it('sets default language to "pl" if no cookie exists', () => {
        Cookies.get.mockReturnValue(undefined); // No cookie
        render(<LangSelect />);

        expect(screen.getByDisplayValue('PL')).toBeInTheDocument();
    });

    it('uses language from cookie if it exists', () => {
        Cookies.get.mockReturnValue('en'); // Cookie set to 'en'
        render(<LangSelect />);

        expect(screen.getByDisplayValue('EN')).toBeInTheDocument();
    });

    it('changes language when a new option is selected', () => {
        render(<LangSelect />);
        const select = screen.getByRole('button');

        fireEvent.mouseDown(select);
        const enOption = screen.getByText('EN');
        fireEvent.click(enOption);

        expect(Cookies.set).toHaveBeenCalledWith('NEXT_LOCALE_', 'en', { expires: 360 });
        expect(window.location.search).toBe('?lang=en');
    });

    it('updates cookie and URL search when ?lang param exists', () => {
        window.location.search = '?lang=de';
        render(<LangSelect />);

        expect(Cookies.set).toHaveBeenCalledWith('NEXT_LOCALE_', 'de', { expires: 360 });
        expect(screen.getByDisplayValue('DE')).toBeInTheDocument();
    });

    it('defaults to defaultLocale if lang param is invalid', () => {
        window.location.search = '?lang=invalid';
        render(<LangSelect />);

        expect(window.location.search).toBe('?lang=pl');
        expect(Cookies.set).toHaveBeenCalledWith('NEXT_LOCALE_', 'pl', { expires: 360 });
    });
});