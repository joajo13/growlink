import { CardHome } from "../cards/home-post-card/card-home";
import { getAll } from '../../../services/posts/getAll';

export async function CardHomeList() {
  const response = await getAll();
  const posts = response.data.data;

  return (
    <ul>
      {posts.map((post, index) => {
        const {
          title,
          weeks,
          coverImage,
          strainsImgPath,
          userImgPath,
          user,
          strains,
          currentWeekType,
          isLiked,
          topComments,
        } = post;

        return (
          <CardHome
            key={index}
            currentWeekType={currentWeekType}
            coverImage={coverImage}
            strainsImgPath={strainsImgPath}
            title={title}
            userImgPath={userImgPath}
            user={user}
            weeks={weeks}
            strains={strains}
            isLiked={isLiked}
            topComments={topComments}
          />
        );
      })}
    </ul>
  );
}
