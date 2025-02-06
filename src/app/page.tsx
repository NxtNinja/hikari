import getAllAnime from "@/hooks/anime/getAllAnime";

const Home = async () => {
  const { data, isError, error } = await getAllAnime();

  console.log(data?.data, isError, error);

  return (
    <>
      <div className="w-full">{/* <DisplayAnimeCards /> */}</div>
    </>
  );
};

export default Home;
