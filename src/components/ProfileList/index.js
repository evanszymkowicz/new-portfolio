import { ListTitle } from "./style";

const ProfileList = ({ title, children, className }) => {
  return (
    <article className={className}>
      <header>
        <ListTitle>{title}</ListTitle>
      </header>
      <ul>{children}</ul>
    </article>
  );
};

export default ProfileList;
