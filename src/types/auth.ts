export interface SignInResponseProps {
  type: string;
  value: string;
  user: {
    id: number;
    email: string;
  };
}
