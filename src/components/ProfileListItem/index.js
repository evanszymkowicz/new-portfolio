import { ListItem } from "../../style/shared";

const ProfileListItem = ({ children, onClick }) => {
  return (
    <ListItem>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      ) : (
        name
      )}
    </ListItem>
  );
};

export default ProfileListItem;
