import { strings } from '@/utils/strings';
import { links } from '@/utils/links';

const { sticky_header_part } = strings;

const { borrow, entrust, security, testimonials, history } = sticky_header_part;

const {
  borrow_a_dog,
  entrust_your_dog,
  trust_security,
  users_testimonials,
  our_history,
} = links;

export const StickyHeaderPartLinks = [
  { label: borrow, href: borrow_a_dog },
  { label: entrust, href: entrust_your_dog },
  { label: security, href: trust_security },
  { label: testimonials, href: users_testimonials },
  { label: history, href: our_history },
];