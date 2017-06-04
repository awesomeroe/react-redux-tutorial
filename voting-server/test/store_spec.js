import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import makeStore from '../src/store';

describe('store', () => {
    it('is a Redux store that returns the initial state', () => {
        const store = makeStore();
        expect(store.getState()).to.equal(Map());
    });

    it('handles dispatch with the correct reducer', () =>{
        const store = makeStore();

        store.dispatch({
            type: 'SET_ENTRIES',
            entries: ['Trainspotting', '28 Days Later']
        });
        expect(store.getState()).to.equal(fromJS({
            entries: ['Trainspotting', '28 Days Later']
        }));
    });
});