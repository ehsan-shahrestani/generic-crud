import {isDevMode} from "@angular/core";

const devDomain = 'http://localhost:3000/'
const prodDomain = 'http://localhost:3000/'
export const DomainName = isDevMode() ? devDomain : prodDomain


