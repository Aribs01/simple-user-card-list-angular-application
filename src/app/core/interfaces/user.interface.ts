export interface ResponseInterface<T> {
  data: T;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support?: SupportMessageInterface;
}

export interface UserInterface {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface SupportMessageInterface {
  url: string;
  text: string;
}
