
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faEnvelope,
    faEnvelopeSquare,
    faStar,
    faCaretDown,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

import {
    faLinkedin,
    faGithubSquare
} from '@fortawesome/free-brands-svg-icons';

export default {
    register() {
        library.add(
            faEnvelope,
            faEnvelopeSquare,
            faStar,
            faCaretDown,
            faLinkedin,
            faGithubSquare,
            faTimesCircle
        );
    },
};
