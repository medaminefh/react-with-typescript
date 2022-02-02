type ComponentPropsType = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfilePropsType>;
};

type ProfilePropsType = {
  name: string;
};

export function ComponentType({
  isLoggedIn,
  component: Component,
}: ComponentPropsType) {
  if (isLoggedIn) {
    return <Component name="Med Amine Fh" />;
  } else {
    return <h2>You Need to Login 😊 </h2>;
  }
}

export const Profile = ({ name }: ProfilePropsType) => {
  return <h2>Hello there, Your Name is {name}</h2>;
};
