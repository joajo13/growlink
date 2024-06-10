export const Avatar = ({imgSrc = 'default'}) => {
  return (
    <>
      <div className="avatar">
        <div className="rounded-xl">
          <img src={`/resources/users-pfp/${imgSrc}`} className="object-contain w-6 h-6"/>
        </div>
      </div>
    </>
  );
};
