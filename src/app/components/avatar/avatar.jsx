import Image from "next/image";

export const Avatar = ({imgSrc = 'default'}) => {
  return (
    <>
      <div className="avatar">
        <div className="rounded-xl">
          <Image width={100} height={100} alt="profile-pfp" src={`/resources/users-pfp/${imgSrc}`} className="object-contain w-6 h-6"/>
        </div>
      </div>
    </>
  );
};
