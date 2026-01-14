import ClientProductLists from "./views/ClientProductLists";

export const metadata = {
  title: "Rendering & searching over 20k products",
  description:
    "Details implementation rendering and searching strategy of more than 20K items.",
};

export default async function page() {
  return <ClientProductLists />;
}
