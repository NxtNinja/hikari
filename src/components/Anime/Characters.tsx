import kyServer from "@/lib/ky";
import { Character } from "@/lib/types";
import Image from "next/image";

async function fetchCharacters(id: number) {
  const characters = await kyServer
    .get(`anime/${id}/characters`)
    .json<{ data: Character[] }>();
  return characters.data;
}

export default async function AnimeCharacters({
  animeId,
}: {
  animeId: number;
}) {
  const characters = await fetchCharacters(animeId);

  return (
    <div className="container mx-auto space-y-4">
      {characters.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((character) => (
            <div
              key={character.character.mal_id}
              className="flex flex-col items-center space-y-2"
            >
              <Image
                src={character.character.images.jpg.image_url}
                alt={character.character.name}
                width={150}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <p className="text-center text-lg font-semibold">
                {character.character.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No characters found.</p>
      )}
    </div>
  );
}
