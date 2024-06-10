'use client';
import { CardHomeList } from "../components/cards/home-post-card/card-home-list";
import { useGetAllPosts } from "../../hooks/posts/useGetPosts";
import {HomeActionButton} from '../components/buttons/home-actions-button';

// const posts = [
//   {
//     title: "Title 1",
//     weeks: 12,
//     imgPath: "cover-1.jpg",
//     strainsImgPath: "strains-1.jpg",
//     userImgPath: "user-1.jpg",
//     user: "user1",
//     strains: [
//       {
//         name: "Strain 1",
//         productorPfp: "productor-1.png",
//       },
//       {
//         name: "Strain 2",
//         productorPfp: "productor-2.png",
//       },
//       {
//         name: "Strain 3",
//         productorPfp: "productor-3.png",
//       }
//     ],
//     currentWeekType: "flowering",
//     isLiked: true,
//     topComments: [
//       {
//         comment: "Nice",
//         user: "user1",
//       },
//       {
//         comment: "Nice",
//         user: "user2",
//       },
//       {
//         comment: "Nice",
//         user: "user3",
//       },
//     ],
//   },
//   {
//     title: "Title 2",
//     weeks: 8,
//     imgPath: "cover-2.jpg",
//     strainsImgPath: "strains-2.jpg",
//     userImgPath: "user-2.jpg",
//     user: "user2",
//     strains: [
//       {
//         name: "Strain 3",
//         productorPfp: "user-2.jpg",
//       },
//       {
//         name: "Strain 4",
//         productorPfp: "user-3.jpg",
//       },
//     ],
//     currentWeekType: "vegetation",
//     isLiked: false,
//     topComments: [
//       {
//         comment: "Nice",
//         user: "user1",
//       },
//       {
//         comment: "Nice",
//         user: "user2",
//       },
//       {
//         comment: "Nice",
//         user: "user3",
//       },
//     ],
//   },
//   {
//     title: "Title 3",
//     weeks: 6,
//     imgPath: "cover-3.jpg",
//     strainsImgPath: "strains-3.jpg",
//     userImgPath: "user-3.jpg",
//     user: "user3",
//     strains: [
//       {
//         name: "Strain 5",
//         productorPfp: "strain-5.jpg",
//       },
//       {
//         name: "Strain 6",
//         productorPfp: "productor-1.png",
//       },
//     ],
//     currentWeekType: "flowering",
//     isLiked: true,
//     topComments: [
//       {
//         comment: "Nice",
//         user: "user1",
//       },
//       {
//         comment: "Nice",
//         user: "user2",
//       },
//       {
//         comment: "Nice",
//         user: "user3",
//       },
//     ],
//   },
//   {
//     title: "Title 4",
//     weeks: 4,
//     imgPath: "cover-4.jpg",
//     strainsImgPath: "strains-4.jpg",
//     userImgPath: "user-4.jpg",
//     user: "user4",
//     strains: [
//       {
//         name: "Strain 7",
//         productorPfp: "productor-2.png",
//       },
//       {
//         name: "Strain 8",
//         productorPfp: "productor-3.png",
//       },
//     ],
//     currentWeekType: "vegetation",
//     isLiked: false,
//     topComments: [
//       {
//         comment: "Nice",
//         user: "user1",
//       },
//       {
//         comment: "Nice",
//         user: "user2",
//       },
//       {
//         comment: "Nice",
//         user: "user3",
//       },
//     ],
//   },
// ];

export default function Home() {
  const {isLoading, data, error} = useGetAllPosts();
  
  return (
    <main className="flex flex-col items-center justify-between min-h-screen-without-navbar max-h-screen-without-navbar overflow-y-auto w-full relative">
    
      <section className="w-full">
        {
          isLoading 
          ? <p>Loading...</p>
          : <CardHomeList posts={data}/>
        }
        {
          error && <p>Error...</p>
        }
      </section>

      <HomeActionButton />

    </main>
  );
}
