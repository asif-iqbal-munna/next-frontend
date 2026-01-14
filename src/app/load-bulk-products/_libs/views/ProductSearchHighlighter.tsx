export const ProductSearchHighlighter = ({
  text,
  query,
}: {
  text: string;
  query: string;
}) => {
  if (!query.trim()) return <span>{text}</span>;

  // 'gi' means Global and Case-Insensitive
  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark
            key={i}
            className="bg-yellow-200 text-black rounded-sm px-0.5 font-bold"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};
