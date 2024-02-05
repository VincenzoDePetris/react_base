function Card() {
  return (
    <div className="rounded-md bg-zinc-950">
      <img
        src="https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="flex flex-col">
        <h2 className="text-2xl">Titolo</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates,
          provident.
        </p>
      </div>
    </div>
  );
}

export default Card;
