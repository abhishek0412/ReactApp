import avatar from "../../../assets/default-avatar.svg";
export function Person({ name, nickName, images }) {
  const img =
    (images && images[0] && images[0].small && images[0].small.url) ?? avatar;
  return (
    <div>
      <h4>{name}</h4>
      <h4>Nickname : {nickName || "Wake&Bake"}</h4>
      <img
        style={{ width: "50px" }}
        src={img}
        alt={name}
      />
    </div>
  );
}
