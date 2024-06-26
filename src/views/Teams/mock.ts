export const TEAMS = [
  {
    id: 1,
    name: 'Axa',
    image: '/company-logos/axa.svg',
    description:
      'AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc',
    campaigns_count: 20,
    leads_count: 1500,
    is_favorited: true,
    is_archived: false,
    created_at: '28 July 2018',
  },
  {
    id: 2,
    name: 'Indeed - US',
    image: '/company-logos/indeed.svg',
    description:
      'Indeed is an American worldwide employment-related search engine for job stuff and other random stuff',
    campaigns_count: 15,
    leads_count: 7130,
    is_favorited: false,
    is_archived: false,
    created_at: '15 October 2018',
  },
  {
    id: 3,
    name: 'Indeed - EU',
    image: '/company-logos/indeed.svg',
    description:
      'Indeed is an American worldwide employment-related search engine for job stuff and other random stuff',
    campaigns_count: 18,
    leads_count: 3500,
    is_favorited: false,
    is_archived: false,
    created_at: '1 October 2018',
  },
  {
    id: 4,
    name: 'Workday - US',
    image: '/company-logos/workday.svg',
    description:
      'Workday Inc is an on demand financial management and human capital management something',
    campaigns_count: 16,
    leads_count: 2000,
    is_favorited: false,
    is_archived: false,
    created_at: '08 May 2017',
  },
  {
    id: 5,
    name: 'Workday - AU',
    image: '/company-logos/workday.svg',
    description:
      'Workday Inc is an on demand financial management and human capital management something',
    campaigns_count: 12,
    leads_count: 1500,
    is_favorited: false,
    is_archived: false,
    created_at: '13 February 2017',
  },
  {
    id: 6,
    name: 'Time',
    image: '/company-logos/time.svg',
    description:
      'Time is an American weekly news magazine and new website published in New York and like a bunch of other places and stuff',
    campaigns_count: 13,
    leads_count: 10000,
    is_favorited: true,
    is_archived: false,
    created_at: '1 December 2016',
  },
  {
    id: 7,
    name: 'Zendesk',
    image: '/company-logos/zendesk.svg',
    description:
      'Zendesk Inc is a customer service software company headquartered in San Francisco and they do things I guess',
    campaigns_count: 17,
    leads_count: 1200,
    is_favorited: true,
    is_archived: false,
    created_at: '28 July 2015',
  },
  {
    id: 8,
    name: 'Uber',
    image: '/company-logos/uber.svg',
    description:
      'Uber is a transportation network company headquartered in San Francisco, California. They drive people around I guess',
    campaigns_count: 10,
    leads_count: 3200,
    is_favorited: false,
    is_archived: true,
    archived_on: '19 September 2018',
  },
  {
    id: 9,
    name: 'Grab',
    image: '/company-logos/grab.svg',
    description:
      'GrabTaxi Holdings Pte Ltd is a Singapore-based technology company that offers rides and other stuff but mostly rides to people',
    campaigns_count: 23,
    leads_count: 2000,
    is_favorited: false,
    is_archived: true,
    archived_on: '22 January 2018',
  },
];

export const ACTIVITIES = [
  {
    id: 1,
    person: {
      id: 1,
      name: 'Julie',
      avatar: '/user-avatars/avatar-1.svg',
    },
    action: 'increased_quota',
    target: 'Indeed - US',
    created_at: '2 hours ago',
  },
  {
    id: 2,
    person: {
      id: 2,
      name: 'Emily',
      avatar: '/user-avatars/avatar-2.svg',
    },
    action: 'added_leads',
    target: 'Linkedin',
    created_at: '4 hours ago',
  },
  {
    id: 3,
    person: {
      id: 2,
      name: 'Emily',
      avatar: '/user-avatars/avatar-2.svg',
    },
    action: 'archived_team',
    target: 'Uber',
    created_at: '5 hours ago',
  },
  {
    id: 4,
    person: {
      id: 1,
      name: 'Julie',
      avatar: '/user-avatars/avatar-1.svg',
    },
    action: 'archived_team',
    target: 'Grab',
    created_at: '6 hours ago',
  },
  {
    id: 5,
    person: {
      id: 1,
      name: 'Anthony',
      avatar: '/user-avatars/avatar-3.svg',
    },
    action: 'added_leads',
    target: 'Workday - AU',
    created_at: '7 hours ago',
  },
];
