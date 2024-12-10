import Filter from "../components/filter";
import List from "../components/list";
import Hero from "./Hero";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return( 
  <div>
    <Hero />

    <h1 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-semibold mt-[24px] md:[28px] xl:mt-[32px]">
      Sana Uygun Seeçenekler
    </h1>
    <div className="grid grid-cols-4 gap-5">
      <Filter isopen={isOpen} close={() => setIsOpen=(false)} />
      <List />
    </div>
  </div>
  );
  
};

export default Home;
