import { CardHome } from "./card-home";

export const CardHomeList = ({posts}) => {
  return (
    <ul>
        {posts.map((post, index) => {
            const {
              title,
              weeks,
              imgPath,
              strainsImgPath,
              userImgPath,
              user,
              strains,
              currentWeekType,
              isLiked,
              topComments
            } = post;
            
            return (
              <CardHome 
                key={index} 
                currentWeekType={currentWeekType}
                imgPath={imgPath}
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
  )
}