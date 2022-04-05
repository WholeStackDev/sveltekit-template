import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const counter = writable(0);

if(browser) {
    if(localStorage.counter) counter.set(Number(localStorage.counter));

    counter.subscribe(x => localStorage.counter = x);
}
