export interface SignInResponseProps {
  type: string;
  value: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export interface UserProps {
  type: string;
  value: string;
  id: number;
  name: string;
  email: string;
}
