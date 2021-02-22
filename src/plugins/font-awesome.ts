import FontAwesomeIcon from '@/libs/FontAwesomeIcon.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faTwitter, faInstagram);

export { FontAwesomeIcon };
