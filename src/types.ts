export interface UserInterface {
  id: number;
  name: string;
  avatar: string;
  notifications_count: number;
}

export interface TeamInterface {
  id: number;
  name: string;
  image: string;
  description: string;
  campaigns_count: number;
  leads_count: number;
  is_favorited: boolean;
  is_archived: boolean;
  created_at?: string;
  archived_on?: string;
}

interface ActivityUserInterface {
  id: number;
  name: string;
  avatar: string;
}

export interface ActivityInterface {
  id: number;
  person: ActivityUserInterface;
  action: string;
  target: string;
  created_at: string;
}
