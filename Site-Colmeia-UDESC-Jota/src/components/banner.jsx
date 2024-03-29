

export default function Banner(title) {
  return (
    <>
      <div className="h-35 bg-cover bg-no-repeat p-12 text-center" id="jumbotron">
        <div className="bottom-0 left-0 right-0 top-0 bg-fixed h-full">
          <div className="mx-auto flex flex-col items-center justify-center h-full">
            <div className="text-white">
              <h4 className="mb-6 text-xl text-white font-semibold"> {title.title} </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
