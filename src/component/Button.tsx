const Button: React.FC<{ name: string }> = ({ name }) => {
  return (
    <button className="px-4 py-2 bg-slate-100 rounded-md hover:bg-black hover:text-white">
      {name}
    </button>
  );
};

export default Button;
