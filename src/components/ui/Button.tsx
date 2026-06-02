interface Button {
  text: string;
  link: string;
}

const Button = ({ text, link }: Button) => {
  return (
    <button
      className="px-4 py-2  mt-2 text-(--color-text) typography-button border border-(--color-text) rounded-md bg-(--color-button-bg) hover:text-(--color-button-bg-hover) hover:cursor-pointer hover:text-shadow-(--shadow-button-hover) transition-all duration-450 ease-in-out"
      onClick={() => {
        window.location.href = link;
      }}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
