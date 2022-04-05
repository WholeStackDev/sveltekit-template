import fs from 'fs';
import dayjs from 'dayjs';
import { browser } from '$app/env';

const log = (message) => {
    console.log(message);
    if(typeof message === 'object') message = JSON.stringify(message);
    if(!browser) fs.appendFile('log.txt', `${dayjs().format('MMMM D @ h:mm:ss A')} - ${message}\r\n`, () => {});
};

export { log };