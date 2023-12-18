import { strings } from '@/utils/strings';
import { links } from '@/utils/links';

const { header, sticky_header_part } = strings;

const { borrow, entrust, security, testimonials, story } = sticky_header_part;

const { contact, member } = header;

const {
  borrow_a_dog,
  entrust_your_dog,
  trust_security,
  users_testimonials,
  our_story,
  contact_us,
  member_space,
} = links;

export const StickyHeaderPartLinks = [
  { label: borrow, href: borrow_a_dog },
  { label: entrust, href: entrust_your_dog },
  { label: security, href: trust_security },
  { label: testimonials, href: users_testimonials },
  { label: story, href: our_story },
];

export const AdditionalMobileLinks = [
  { label: contact, href: contact_us },
  { label: member, href: member_space },
];

export const MobileLinksFullList = [
  ...StickyHeaderPartLinks,
  ...AdditionalMobileLinks,
];
