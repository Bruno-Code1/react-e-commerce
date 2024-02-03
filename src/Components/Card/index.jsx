function Card(data) {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 m-2 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5">{data.data.name}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.title} />
            <div className="absolute top-0 m-2 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1">
                +
            </div>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light">{data.data.title}</span>
            <span className="text-lg font-medium">${data.data.price}</span>
        </p>
    </div>
  );
}

export default Card;