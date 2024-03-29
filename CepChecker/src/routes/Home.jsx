import ListaCeps from "../components/ListaCeps";
import BuscaCep from "../components/BuscaCep";
import ModalDetalhesCep from "../components/ModalDetalhesCep";

const Home = () => {
  return (
    <main>
      <ModalDetalhesCep />
      <div className=" max-w-screen flex justify-center my-10">
        <h1 className="text-4xl font-semibold">CEP CHECK</h1>
      </div>
      <BuscaCep />
      <ListaCeps />
    </main>
  );
}

export default Home