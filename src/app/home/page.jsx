// import { CardHomeList } from "../components/lists/card-home-list";
import { HomeActionButton } from "../components/buttons/home-actions-button";
import SkeletonCardHomeList from "../components/skeletons/skeleton-card-home-list";
import { Suspense } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

const animals = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "rabbit", label: "Rabbit" },
  { value: "hamster", label: "Hamster" },
  { value: "parrot", label: "Parrot" },
  { value: "spider", label: "Spider" },
  { value: "goldfish", label: "Goldfish" },
  { value: "turtle", label: "Turtle" },
  { value: "chicken", label: "Chicken" },
  { value: "duck", label: "Duck" },
  { value: "pigeon", label: "Pigeon" },
  { value: "iguana", label: "Iguana" },
  { value: "snake", label: "Snake" },
  { value: "lizard", label: "Lizard" },
  { value: "hamster", label: "Hamster" },
  { value: "parrot", label: "Parrot" },
  { value: "spider", label: "Spider" },
  { value: "goldfish", label: "Goldfish" },
  { value: "turtle", label: "Turtle" },
  { value: "chicken", label: "Chicken" },
  { value: "duck", label: "Duck" },
  { value: "pigeon", label: "Pigeon" },
  { value: "iguana", label: "Iguana" },
  { value: "snake", label: "Snake" },
  { value: "lizard", label: "Lizard" },
];

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-between">
      <section className="w-full">
        <Suspense fallback={<SkeletonCardHomeList />}>
          {/* <CardHomeList /> */}
        </Suspense>
      </section>

      <HomeActionButton />
    </div>
  );
}
