import type { StaticImageData } from 'next/image';

import certificate from './certificate.png';
import promotion from './promotion.png';
import promotionReduced from './promotion-reduced.png';
import solartuff from './solartuff.png';
import structure from './structure.png';
import sus316b from './SUS316B.png';
import tripleShield from './triple-shield.png';

/**
 * Static image imports. Next reads each file's true pixel dimensions from these
 * objects, so `width`/`height` props can be omitted.
 */
export const images = {
    certificate: certificate as StaticImageData,
    promotion: promotion as StaticImageData,
    promotionReduced: promotionReduced as StaticImageData,
    solartuff: solartuff as StaticImageData,
    structure: structure as StaticImageData,
    sus316b: sus316b as StaticImageData,
    tripleShield: tripleShield as StaticImageData,
};