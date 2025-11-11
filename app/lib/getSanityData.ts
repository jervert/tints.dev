export async function getSanityData() {
  const about = {
    result: [
      {
        _key: "",
        _type: "block",
        children: [
          { _key: "", _type: "span", marks: [], text: "Content pending" },
        ],
      },
    ],
  };

  return about?.result;
}
