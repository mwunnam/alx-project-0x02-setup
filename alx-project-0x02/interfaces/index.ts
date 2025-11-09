
export interface headerInterface = {
  
};

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostCardProps {
  id?: number;
  title: string;
  content: string;
  userId: number;
}

export interface UserCardProps {
  name: string,
  email: string,
  address: string,
}
