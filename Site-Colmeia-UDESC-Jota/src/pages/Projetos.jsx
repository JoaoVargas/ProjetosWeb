import StandardLayout from '../components/StandardLayout/StandardLayout'



function Atividades() {
  return (
    <>
    <StandardLayout>
      <body className="bg-slate-500">
        <div className="mx-auto px-4 py-8">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src="../../../images/AboutUs.jpg"
                  alt="image"
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  Projeto Caixa de Areia
                </h2>
                <p className="mt-6 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
              </div>
            </div>
        </div>
      </body>
      

      
    </StandardLayout>
    </>
  )
}

export default Atividades